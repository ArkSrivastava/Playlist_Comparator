const express = require('express');
const cors = require('cors');
const { comparePlaylists } = require('./api/spotify');
const { compareApplePlaylists } = require('./api/apple');
const { getMockPlaylistUrls } = require('./api/mock-data');

const app = express();
const PORT = process.env.PORT || 5005;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.json({ message: 'Playlist Comparator API is running!' });
});

// Test endpoint to get available mock playlist URLs
app.get('/api/test-urls', (req, res) => {
  const mockUrls = getMockPlaylistUrls();
  res.json({
    message: 'Available test playlist URLs',
    urls: mockUrls,
    instructions: 'Use these URLs to test the playlist comparison without API credentials'
  });
});

// Compare playlists endpoint
app.post('/api/compare', async (req, res) => {
  try {
    const { playlist1Url, playlist2Url } = req.body;
    
    if (!playlist1Url || !playlist2Url) {
      return res.status(400).json({ error: 'Both playlist URLs are required' });
    }

    // Determine platform for each playlist
    const platform1 = getPlatformFromUrl(playlist1Url);
    const platform2 = getPlatformFromUrl(playlist2Url);

    let playlist1, playlist2;

    // Fetch playlist data based on platform
    if (platform1 === 'spotify') {
      playlist1 = await comparePlaylists(playlist1Url);
    } else if (platform1 === 'apple') {
      playlist1 = await compareApplePlaylists(playlist1Url);
    } else {
      return res.status(400).json({ error: 'Unsupported platform for playlist 1' });
    }

    if (platform2 === 'spotify') {
      playlist2 = await comparePlaylists(playlist2Url);
    } else if (platform2 === 'apple') {
      playlist2 = await compareApplePlaylists(playlist2Url);
    } else {
      return res.status(400).json({ error: 'Unsupported platform for playlist 2' });
    }

    // Compare playlists
    const comparison = comparePlaylistData(playlist1, playlist2);

    res.json(comparison);
  } catch (error) {
    console.error('Error comparing playlists:', error);
    res.status(500).json({ error: 'Failed to compare playlists' });
  }
});

// Helper function to determine platform from URL
function getPlatformFromUrl(url) {
  if (url.includes('spotify.com')) return 'spotify';
  if (url.includes('music.apple.com')) return 'apple';
  return 'unknown';
}

// Helper function to compare playlist data
function comparePlaylistData(playlist1, playlist2) {
  const songs1 = playlist1.tracks || [];
  const songs2 = playlist2.tracks || [];

  // Normalize song data for comparison
  const normalizeSong = (song) => {
    const trackName = song.track_name || song.name || '';
    const artist = song.artist_name || song.artist || '';
    return `${trackName.toLowerCase().trim()} - ${artist.toLowerCase().trim()}`;
  };

  const normalizedSongs1 = songs1.map(normalizeSong);
  const normalizedSongs2 = songs2.map(normalizeSong);

  // Find common songs
  const commonSongs = songs1.filter((song, index) => {
    const normalized = normalizedSongs1[index];
    return normalizedSongs2.includes(normalized);
  });

  // Find unique songs for each playlist
  const uniqueToPlaylist1 = songs1.filter((song, index) => {
    const normalized = normalizedSongs1[index];
    return !normalizedSongs2.includes(normalized);
  });

  const uniqueToPlaylist2 = songs2.filter((song, index) => {
    const normalized = normalizedSongs2[index];
    return !normalizedSongs1.includes(normalized);
  });

  return {
    playlist1: {
      name: playlist1.name || 'Playlist 1',
      totalSongs: songs1.length,
      uniqueSongs: uniqueToPlaylist1
    },
    playlist2: {
      name: playlist2.name || 'Playlist 2',
      totalSongs: songs2.length,
      uniqueSongs: uniqueToPlaylist2
    },
    commonSongs,
    summary: {
      totalCommon: commonSongs.length,
      totalUnique1: uniqueToPlaylist1.length,
      totalUnique2: uniqueToPlaylist2.length
    }
  };
}

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
}); 