// Mock playlist data for testing without API credentials
const mockPlaylists = {
  spotify: {
    "37i9dQZF1DXcBWIGoYBM5M": {
      name: "Today's Top Hits",
      description: "The hottest tracks right now.",
      total_tracks: 50,
      tracks: [
        {
          track_name: "Blinding Lights",
          artist_name: "The Weeknd",
          album_name: "After Hours",
          duration_ms: 200000,
          spotify_id: "0VjIjW4GlUZAMYd2vXMi3b",
          external_url: "https://open.spotify.com/track/0VjIjW4GlUZAMYd2vXMi3b"
        },
        {
          track_name: "Dance Monkey",
          artist_name: "Tones and I",
          album_name: "The Kids Are Coming",
          duration_ms: 210000,
          spotify_id: "2XU0oxnq2qxCpomAAuJY8K",
          external_url: "https://open.spotify.com/track/2XU0oxnq2qxCpomAAuJY8K"
        },
        {
          track_name: "Shape of You",
          artist_name: "Ed Sheeran",
          album_name: "÷ (Divide)",
          duration_ms: 233000,
          spotify_id: "7qiZfU4dY1lWnlz329N4gE",
          external_url: "https://open.spotify.com/track/7qiZfU4dY1lWnlz329N4gE"
        },
        {
          track_name: "Uptown Funk",
          artist_name: "Mark Ronson ft. Bruno Mars",
          album_name: "Uptown Special",
          duration_ms: 270000,
          spotify_id: "32OlwWuMpZ6b0aN2RZOeMS",
          external_url: "https://open.spotify.com/track/32OlwWuMpZ6b0aN2RZOeMS"
        },
        {
          track_name: "Despacito",
          artist_name: "Luis Fonsi ft. Daddy Yankee",
          album_name: "Vida",
          duration_ms: 229000,
          spotify_id: "6habFhsOp2NvshLv26DqMb",
          external_url: "https://open.spotify.com/track/6habFhsOp2NvshLv26DqMb"
        }
      ]
    },
    "37i9dQZF1DX5Ejj0EkURtP": {
      name: "All Out 2010s",
      description: "The biggest songs of the 2010s.",
      total_tracks: 100,
      tracks: [
        {
          track_name: "Blinding Lights",
          artist_name: "The Weeknd",
          album_name: "After Hours",
          duration_ms: 200000,
          spotify_id: "0VjIjW4GlUZAMYd2vXMi3b",
          external_url: "https://open.spotify.com/track/0VjIjW4GlUZAMYd2vXMi3b"
        },
        {
          track_name: "Shape of You",
          artist_name: "Ed Sheeran",
          album_name: "÷ (Divide)",
          duration_ms: 233000,
          spotify_id: "7qiZfU4dY1lWnlz329N4gE",
          external_url: "https://open.spotify.com/track/7qiZfU4dY1lWnlz329N4gE"
        },
        {
          track_name: "Uptown Funk",
          artist_name: "Mark Ronson ft. Bruno Mars",
          album_name: "Uptown Special",
          duration_ms: 270000,
          spotify_id: "32OlwWuMpZ6b0aN2RZOeMS",
          external_url: "https://open.spotify.com/track/32OlwWuMpZ6b0aN2RZOeMS"
        },
        {
          track_name: "Rolling in the Deep",
          artist_name: "Adele",
          album_name: "21",
          duration_ms: 228000,
          spotify_id: "1c8gk2PeTE04A1pIDH9YMk",
          external_url: "https://open.spotify.com/track/1c8gk2PeTE04A1pIDH9YMk"
        },
        {
          track_name: "Happy",
          artist_name: "Pharrell Williams",
          album_name: "G I R L",
          duration_ms: 233000,
          spotify_id: "60nZcImufyMA1MKQY3dcCH",
          external_url: "https://open.spotify.com/track/60nZcImufyMA1MKQY3dcCH"
        },
        {
          track_name: "Someone Like You",
          artist_name: "Adele",
          album_name: "21",
          duration_ms: 285000,
          spotify_id: "1zwMYTA5nlNjZxYrvBB2pV",
          external_url: "https://open.spotify.com/track/1zwMYTA5nlNjZxYrvBB2pV"
        }
      ]
    },
    "37i9dQZF1DX4sWSpwq3LiO": {
      name: "Peaceful Piano",
      description: "Relax and indulge with beautiful piano pieces.",
      total_tracks: 30,
      tracks: [
        {
          track_name: "River Flows in You",
          artist_name: "Yiruma",
          album_name: "First Love",
          duration_ms: 180000,
          spotify_id: "7ySbfLwdCwl1EM0zNCJZ38",
          external_url: "https://open.spotify.com/track/7ySbfLwdCwl1EM0zNCJZ38"
        },
        {
          track_name: "Claire de Lune",
          artist_name: "Debussy",
          album_name: "Classical Piano",
          duration_ms: 300000,
          spotify_id: "1I3ywpzOJIKGTIVcnv1ibU",
          external_url: "https://open.spotify.com/track/1I3ywpzOJIKGTIVcnv1ibU"
        },
        {
          track_name: "Moonlight Sonata",
          artist_name: "Beethoven",
          album_name: "Piano Sonatas",
          duration_ms: 900000,
          spotify_id: "4a4a6K86Trcbf8egGmBqbb",
          external_url: "https://open.spotify.com/track/4a4a6K86Trcbf8egGmBqbb"
        }
      ]
    }
  },
  apple: {
    "pl.u-8aAVZAtoL1j7Wg": {
      name: "Today's Hits",
      description: "The biggest hits right now on Apple Music.",
      total_tracks: 45,
      tracks: [
        {
          track_name: "Blinding Lights",
          artist_name: "The Weeknd",
          album_name: "After Hours",
          duration_ms: 200000,
          apple_music_id: "1498701575",
          external_url: "https://music.apple.com/track/1498701575"
        },
        {
          track_name: "Dance Monkey",
          artist_name: "Tones and I",
          album_name: "The Kids Are Coming",
          duration_ms: 210000,
          apple_music_id: "1475511931",
          external_url: "https://music.apple.com/track/1475511931"
        },
        {
          track_name: "Watermelon Sugar",
          artist_name: "Harry Styles",
          album_name: "Fine Line",
          duration_ms: 174000,
          apple_music_id: "1481391654",
          external_url: "https://music.apple.com/track/1481391654"
        },
        {
          track_name: "Circles",
          artist_name: "Post Malone",
          album_name: "Hollywood's Bleeding",
          duration_ms: 215000,
          apple_music_id: "1475511931",
          external_url: "https://music.apple.com/track/1475511931"
        },
        {
          track_name: "Adore You",
          artist_name: "Harry Styles",
          album_name: "Fine Line",
          duration_ms: 207000,
          apple_music_id: "1481391655",
          external_url: "https://music.apple.com/track/1481391655"
        }
      ]
    },
    "pl.u-6mo4l6uL5DYj0g": {
      name: "Chill Vibes",
      description: "Relaxing tunes for your downtime.",
      total_tracks: 35,
      tracks: [
        {
          track_name: "Blinding Lights",
          artist_name: "The Weeknd",
          album_name: "After Hours",
          duration_ms: 200000,
          apple_music_id: "1498701575",
          external_url: "https://music.apple.com/track/1498701575"
        },
        {
          track_name: "Watermelon Sugar",
          artist_name: "Harry Styles",
          album_name: "Fine Line",
          duration_ms: 174000,
          apple_music_id: "1481391654",
          external_url: "https://music.apple.com/track/1481391654"
        },
        {
          track_name: "Circles",
          artist_name: "Post Malone",
          album_name: "Hollywood's Bleeding",
          duration_ms: 215000,
          apple_music_id: "1475511931",
          external_url: "https://music.apple.com/track/1475511931"
        },
        {
          track_name: "Sunflower",
          artist_name: "Post Malone, Swae Lee",
          album_name: "Spider-Man: Into the Spider-Verse",
          duration_ms: 158000,
          apple_music_id: "1440814896",
          external_url: "https://music.apple.com/track/1440814896"
        },
        {
          track_name: "Lose You To Love Me",
          artist_name: "Selena Gomez",
          album_name: "Rare",
          duration_ms: 231000,
          apple_music_id: "1498701576",
          external_url: "https://music.apple.com/track/1498701576"
        }
      ]
    }
  }
};

// Extract playlist ID from URL
function extractPlaylistId(url) {
  if (url.includes('spotify.com')) {
    const match = url.match(/playlist\/([a-zA-Z0-9]+)/);
    return match ? match[1] : null;
  } else if (url.includes('music.apple.com')) {
    const match = url.match(/playlist\/([a-zA-Z0-9-]+)/);
    return match ? match[1] : null;
  }
  return null;
}

// Get mock playlist data
function getMockPlaylist(url) {
  const playlistId = extractPlaylistId(url);
  if (!playlistId) return null;

  // Check Spotify playlists
  if (mockPlaylists.spotify[playlistId]) {
    return mockPlaylists.spotify[playlistId];
  }

  // Check Apple Music playlists
  if (mockPlaylists.apple[playlistId]) {
    return mockPlaylists.apple[playlistId];
  }

  return null;
}

// Get available mock playlist URLs for testing
function getMockPlaylistUrls() {
  const urls = [];
  
  // Spotify URLs
  Object.keys(mockPlaylists.spotify).forEach(id => {
    urls.push(`https://open.spotify.com/playlist/${id}`);
  });
  
  // Apple Music URLs
  Object.keys(mockPlaylists.apple).forEach(id => {
    urls.push(`https://music.apple.com/playlist/${id}`);
  });
  
  return urls;
}

module.exports = {
  mockPlaylists,
  getMockPlaylist,
  getMockPlaylistUrls,
  extractPlaylistId
}; 