# 🎵 Playlist Comparator

A beautiful web application that allows you to compare playlists from different music streaming platforms like Spotify and Apple Music. Find common songs, discover unique tracks, and analyze your music taste across platforms.

## ✨ Features

- **Cross-Platform Support**: Compare playlists from Spotify and Apple Music
- **Smart Matching**: Intelligent song matching based on track name and artist
- **Beautiful UI**: Modern, responsive design with glassmorphism effects
- **Detailed Analysis**: View common songs, unique tracks, and statistics
- **Real-time Results**: Instant comparison with loading states and error handling

## 🛠️ Tech Stack

### Frontend
- **React.js** - Modern UI framework
- **CSS3** - Custom styling with glassmorphism effects
- **Responsive Design** - Works on desktop, tablet, and mobile

### Backend
- **Node.js** - Server runtime
- **Express.js** - Web framework
- **Axios** - HTTP client for API calls
- **CORS** - Cross-origin resource sharing

### APIs
- **Spotify Web API** - Fetch Spotify playlist data
- **Apple Music API** - Fetch Apple Music playlist data

## 📦 Installation

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- Spotify Developer Account (for Spotify API)
- Apple Developer Account (for Apple Music API)

### Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd playlist-comparator
   ```

2. **Install backend dependencies**
   ```bash
   cd backend
   npm install
   ```

3. **Install frontend dependencies**
   ```bash
   cd ../frontend
   npm install
   ```

4. **Environment Configuration**

   Create a `.env` file in the `backend` directory:
   ```env
   # Spotify API Credentials
   SPOTIFY_CLIENT_ID=your_spotify_client_id
   SPOTIFY_CLIENT_SECRET=your_spotify_client_secret

   # Apple Music API Credentials (Optional)
   APPLE_MUSIC_TOKEN=your_apple_music_token
   APPLE_MUSIC_TEAM_ID=your_apple_music_team_id

   # Server Configuration
   PORT=5005
   ```

## 🚀 Running the Application

### Development Mode

1. **Start the backend server**
   ```bash
   cd backend
   npm run dev
   ```
   The backend will run on `http://localhost:5005`

2. **Start the frontend development server**
   ```bash
   cd frontend
   npm start
   ```
   The frontend will run on `http://localhost:3000`

### Production Mode

1. **Build the frontend**
   ```bash
   cd frontend
   npm run build
   ```

2. **Start the backend**
   ```bash
   cd backend
   npm start
   ```

## 🔧 API Setup

### Spotify API Setup

1. Go to [Spotify Developer Dashboard](https://developer.spotify.com/dashboard)
2. Create a new application
3. Get your `Client ID` and `Client Secret`
4. Add them to your `.env` file

### Apple Music API Setup (Optional)

1. Go to [Apple Developer Portal](https://developer.apple.com)
2. Create a MusicKit app
3. Generate a Music User Token
4. Add the token and team ID to your `.env` file

## 📱 Usage

1. **Open the application** in your browser
2. **Enter playlist URLs** from Spotify or Apple Music
3. **Click "Compare Playlists"** to start the analysis
4. **View results** in the interactive tabs:
   - Summary statistics
   - Common songs between playlists
   - Unique songs in each playlist

## 🎯 Supported URL Formats

### Spotify
- `https://open.spotify.com/playlist/37i9dQZF1DXcBWIGoYBM5M`
- `https://open.spotify.com/playlist/playlist_id`

### Apple Music
- `https://music.apple.com/us/playlist/playlist_name/playlist_id`
- `https://music.apple.com/playlist/playlist_id`

## 📊 API Endpoints

### POST `/api/compare`
Compare two playlists and return analysis results.

**Request Body:**
```json
{
  "playlist1Url": "https://open.spotify.com/playlist/...",
  "playlist2Url": "https://music.apple.com/playlist/..."
}
```

**Response:**
```json
{
  "playlist1": {
    "name": "Playlist Name",
    "totalSongs": 50,
    "uniqueSongs": [...]
  },
  "playlist2": {
    "name": "Playlist Name",
    "totalSongs": 45,
    "uniqueSongs": [...]
  },
  "commonSongs": [...],
  "summary": {
    "totalCommon": 20,
    "totalUnique1": 30,
    "totalUnique2": 25
  }
}
```

## 🎨 Features in Detail

### Smart Song Matching
- Normalizes track names and artist names for better matching
- Handles variations in artist names (e.g., "feat.", "ft.", etc.)
- Case-insensitive comparison

### Beautiful UI Components
- **Glassmorphism Design**: Modern glass-like effects
- **Responsive Layout**: Works on all screen sizes
- **Interactive Tabs**: Easy navigation between different views
- **Loading States**: Smooth user experience with spinners
- **Error Handling**: User-friendly error messages

### Data Visualization
- **Summary Cards**: Visual representation of comparison statistics
- **Song Tables**: Detailed track information with hover effects
- **Percentage Calculations**: Shows overlap percentages
- **Color-coded Results**: Different colors for common vs unique songs

## 🔮 Future Enhancements

- [ ] Support for YouTube Music
- [ ] Support for Amazon Music
- [ ] Export results to CSV/JSON
- [ ] User accounts and saved comparisons
- [ ] Playlist creation from comparison results
- [ ] Advanced filtering options
- [ ] Collaborative playlist features

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License

## 🙏 Acknowledgments

- Spotify Web API for playlist data
- Apple Music API for playlist data
- React.js community for amazing tools and libraries
- Glassmorphism design inspiration

**Built with ❤️ for music lovers everywhere** 
