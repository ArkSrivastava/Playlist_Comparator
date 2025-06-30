const axios = require('axios');
const { getMockPlaylist } = require('./mock-data');

// Spotify API configuration
const SPOTIFY_CLIENT_ID = process.env.SPOTIFY_CLIENT_ID;
const SPOTIFY_CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET;

let accessToken = null;
let tokenExpiry = 0;

// Get Spotify access token using Client Credentials flow
async function getSpotifyAccessToken() {
  if (accessToken && Date.now() < tokenExpiry) {
    return accessToken;
  }

  try {
    const response = await axios.post('https://accounts.spotify.com/api/token', 
      'grant_type=client_credentials',
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Authorization': `Basic ${Buffer.from(`${SPOTIFY_CLIENT_ID}:${SPOTIFY_CLIENT_SECRET}`).toString('base64')}`
        }
      }
    );

    accessToken = response.data.access_token;
    tokenExpiry = Date.now() + (response.data.expires_in * 1000);
    
    return accessToken;
  } catch (error) {
    console.error('Error getting Spotify access token:', error);
    throw new Error('Failed to authenticate with Spotify');
  }
}

// Extract playlist ID from Spotify URL
function extractPlaylistId(url) {
  const match = url.match(/playlist\/([a-zA-Z0-9]+)/);
  if (!match) {
    throw new Error('Invalid Spotify playlist URL');
  }
  return match[1];
}

// Fetch playlist data from Spotify
async function fetchSpotifyPlaylist(playlistId) {
  try {
    // Check if we have API credentials
    if (!SPOTIFY_CLIENT_ID || !SPOTIFY_CLIENT_SECRET) {
      console.log('⚠️  No Spotify API credentials found. Using mock data for testing.');
      const mockData = getMockPlaylist(`https://open.spotify.com/playlist/${playlistId}`);
      if (mockData) {
        return mockData;
      } else {
        throw new Error('Mock playlist not found. Please use one of the test URLs.');
      }
    }

    const token = await getSpotifyAccessToken();
    
    // First, get playlist details
    const playlistResponse = await axios.get(`https://api.spotify.com/v1/playlists/${playlistId}`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });

    const playlist = playlistResponse.data;
    const tracks = [];

    // Get all tracks from the playlist
    let nextUrl = playlist.tracks.href;
    
    while (nextUrl) {
      const tracksResponse = await axios.get(nextUrl, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      const items = tracksResponse.data.items;
      
      for (const item of items) {
        if (item.track) {
          tracks.push({
            track_name: item.track.name,
            artist_name: item.track.artists.map(artist => artist.name).join(', '),
            album_name: item.track.album.name,
            duration_ms: item.track.duration_ms,
            spotify_id: item.track.id,
            external_url: item.track.external_urls.spotify
          });
        }
      }

      nextUrl = tracksResponse.data.next;
    }

    return {
      name: playlist.name,
      description: playlist.description,
      total_tracks: playlist.tracks.total,
      tracks: tracks
    };
  } catch (error) {
    console.error('Error fetching Spotify playlist:', error);
    
    // Fallback to mock data if API fails
    console.log('🔄 Falling back to mock data...');
    const mockData = getMockPlaylist(`https://open.spotify.com/playlist/${playlistId}`);
    if (mockData) {
      return mockData;
    }
    
    throw new Error('Failed to fetch Spotify playlist and no mock data available');
  }
}

// Main function to compare Spotify playlists
async function comparePlaylists(playlistUrl) {
  try {
    const playlistId = extractPlaylistId(playlistUrl);
    return await fetchSpotifyPlaylist(playlistId);
  } catch (error) {
    console.error('Error in comparePlaylists:', error);
    throw error;
  }
}

module.exports = {
  comparePlaylists,
  fetchSpotifyPlaylist
}; 