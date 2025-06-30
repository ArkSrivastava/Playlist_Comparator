const axios = require('axios');
const { getMockPlaylist } = require('./mock-data');

// Apple Music API configuration
const APPLE_MUSIC_TOKEN = process.env.APPLE_MUSIC_TOKEN;
const APPLE_MUSIC_TEAM_ID = process.env.APPLE_MUSIC_TEAM_ID;

// Extract playlist ID from Apple Music URL
function extractApplePlaylistId(url) {
  const match = url.match(/playlist\/([a-zA-Z0-9-]+)/);
  if (!match) {
    throw new Error('Invalid Apple Music playlist URL');
  }
  return match[1];
}

// Fetch playlist data from Apple Music
async function fetchApplePlaylist(playlistId) {
  try {
    // Check if we have API credentials
    if (!APPLE_MUSIC_TOKEN || !APPLE_MUSIC_TEAM_ID) {
      console.log('⚠️  No Apple Music API credentials found. Using mock data for testing.');
      const mockData = getMockPlaylist(`https://music.apple.com/playlist/${playlistId}`);
      if (mockData) {
        return mockData;
      } else {
        throw new Error('Mock playlist not found. Please use one of the test URLs.');
      }
    }

    // Apple Music API endpoint
    const url = `https://api.music.apple.com/v1/catalog/us/playlists/${playlistId}`;
    
    const response = await axios.get(url, {
      headers: {
        'Authorization': `Bearer ${APPLE_MUSIC_TOKEN}`,
        'Music-User-Token': APPLE_MUSIC_TEAM_ID
      }
    });

    const playlist = response.data.data[0];
    const tracks = [];

    // Get all tracks from the playlist
    if (playlist.relationships && playlist.relationships.tracks) {
      const trackItems = playlist.relationships.tracks.data;
      
      for (const track of trackItems) {
        tracks.push({
          track_name: track.attributes.name,
          artist_name: track.attributes.artistName,
          album_name: track.attributes.albumName,
          duration_ms: track.attributes.durationInMillis,
          apple_music_id: track.id,
          external_url: track.attributes.url
        });
      }
    }

    return {
      name: playlist.attributes.name,
      description: playlist.attributes.description?.standard || '',
      total_tracks: tracks.length,
      tracks: tracks
    };
  } catch (error) {
    console.error('Error fetching Apple Music playlist:', error);
    
    // Fallback to mock data if API fails
    console.log('🔄 Falling back to mock data...');
    const mockData = getMockPlaylist(`https://music.apple.com/playlist/${playlistId}`);
    if (mockData) {
      return mockData;
    }
    
    throw new Error('Failed to fetch Apple Music playlist and no mock data available');
  }
}

// Main function to compare Apple Music playlists
async function compareApplePlaylists(playlistUrl) {
  try {
    const playlistId = extractApplePlaylistId(playlistUrl);
    return await fetchApplePlaylist(playlistId);
  } catch (error) {
    console.error('Error in compareApplePlaylists:', error);
    throw error;
  }
}

module.exports = {
  compareApplePlaylists,
  fetchApplePlaylist
}; 
