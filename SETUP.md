# 🚀 Quick Setup Guide

## Prerequisites
- Node.js (v14 or higher)
- npm or yarn

## 🎯 Quick Start (5 minutes)

### 1. Install Dependencies
```bash
# Install all dependencies for both backend and frontend
npm run install-all
```

### 2. Configure Environment (Optional for testing)
```bash
# Copy the example environment file
cp backend/env.example backend/.env

# Edit the .env file with your API credentials (optional for demo)
# For now, you can leave them empty to test the UI
```

### 3. Start Development Servers
```bash
# Start both backend and frontend servers
npm run dev
```

Or start them separately:
```bash
# Terminal 1 - Backend
npm run backend

# Terminal 2 - Frontend  
npm run frontend
```

### 4. Open the Application
- Frontend: http://localhost:3000
- Backend: http://localhost:5005

## 🧪 Testing Without API Keys

The application will work for UI testing even without API keys. The backend will return appropriate error messages when API credentials are missing.

## 🔧 Adding API Keys (For Full Functionality)

### Spotify API Setup
1. Go to [Spotify Developer Dashboard](https://developer.spotify.com/dashboard)
2. Create a new application
3. Copy your `Client ID` and `Client Secret`
4. Add them to `backend/.env`:
   ```
   SPOTIFY_CLIENT_ID=your_client_id
   SPOTIFY_CLIENT_SECRET=your_client_secret
   ```

### Apple Music API Setup (Optional)
1. Go to [Apple Developer Portal](https://developer.apple.com)
2. Create a MusicKit app
3. Generate a Music User Token
4. Add to `backend/.env`:
   ```
   APPLE_MUSIC_TOKEN=your_token
   APPLE_MUSIC_TEAM_ID=your_team_id
   ```

## 📱 Using the Application

1. **Enter Playlist URLs**: Paste Spotify or Apple Music playlist links
2. **Click Compare**: The app will analyze both playlists
3. **View Results**: See common songs, unique tracks, and statistics

## 🛠️ Available Scripts

- `npm run dev` - Start both servers
- `npm run backend` - Start backend only
- `npm run frontend` - Start frontend only
- `npm run test` - Test backend connectivity
- `npm run build` - Build frontend for production

## 🐛 Troubleshooting

### Port Already in Use
If you get "port already in use" errors:
```bash
# Kill processes on ports 3000 and 5005
lsof -ti:3000 | xargs kill -9
lsof -ti:5005 | xargs kill -9
```

### Dependencies Issues
```bash
# Clean install
rm -rf node_modules package-lock.json
rm -rf backend/node_modules backend/package-lock.json
rm -rf frontend/node_modules frontend/package-lock.json
npm run install-all
```

### API Errors
- Check your `.env` file has correct credentials
- Verify your Spotify/Apple Music API credentials are valid
- Check the browser console and server logs for detailed error messages

## 📞 Support

If you encounter issues:
1. Check the browser console (F12)
2. Check the terminal for server errors
3. Verify your API credentials
4. Try the test script: `npm run test`

---

**🎵 Happy Playlist Comparing!** 