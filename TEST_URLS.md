# 🧪 Test Playlist URLs

Use these URLs to test the Playlist Comparator without needing API credentials. The application will automatically use mock data for these URLs.

## 🎵 Spotify Playlists

### 1. Today's Top Hits
```
https://open.spotify.com/playlist/37i9dQZF1DXcBWIGoYBM5M
```
**Songs included:**
- Blinding Lights - The Weeknd
- Dance Monkey - Tones and I
- Shape of You - Ed Sheeran
- Uptown Funk - Mark Ronson ft. Bruno Mars
- Despacito - Luis Fonsi ft. Daddy Yankee

### 2. All Out 2010s
```
https://open.spotify.com/playlist/37i9dQZF1DX5Ejj0EkURtP
```
**Songs included:**
- Blinding Lights - The Weeknd
- Shape of You - Ed Sheeran
- Uptown Funk - Mark Ronson ft. Bruno Mars
- Rolling in the Deep - Adele
- Happy - Pharrell Williams
- Someone Like You - Adele

### 3. Peaceful Piano
```
https://open.spotify.com/playlist/37i9dQZF1DX4sWSpwq3LiO
```
**Songs included:**
- River Flows in You - Yiruma
- Claire de Lune - Debussy
- Moonlight Sonata - Beethoven

## 🍎 Apple Music Playlists

### 1. Today's Hits
```
https://music.apple.com/playlist/pl.u-8aAVZAtoL1j7Wg
```
**Songs included:**
- Blinding Lights - The Weeknd
- Dance Monkey - Tones and I
- Watermelon Sugar - Harry Styles
- Circles - Post Malone
- Adore You - Harry Styles

### 2. Chill Vibes
```
https://music.apple.com/playlist/pl.u-6mo4l6uL5DYj0g
```
**Songs included:**
- Blinding Lights - The Weeknd
- Watermelon Sugar - Harry Styles
- Circles - Post Malone
- Sunflower - Post Malone, Swae Lee
- Lose You To Love Me - Selena Gomez

## 🎯 Testing Scenarios

### Scenario 1: Same Platform Comparison
**Playlist 1:** Today's Top Hits (Spotify)
**Playlist 2:** All Out 2010s (Spotify)
**Expected Result:** 3 common songs (Blinding Lights, Shape of You, Uptown Funk)

### Scenario 2: Cross-Platform Comparison
**Playlist 1:** Today's Top Hits (Spotify)
**Playlist 2:** Today's Hits (Apple Music)
**Expected Result:** 2 common songs (Blinding Lights, Dance Monkey)

### Scenario 3: No Common Songs
**Playlist 1:** Peaceful Piano (Spotify)
**Playlist 2:** Today's Hits (Apple Music)
**Expected Result:** 0 common songs

### Scenario 4: Complete Overlap
**Playlist 1:** Today's Top Hits (Spotify)
**Playlist 2:** Today's Top Hits (Spotify)
**Expected Result:** All songs are common

## 🚀 How to Test

1. **Start the application:**
   ```bash
   npm run dev
   ```

2. **Open the frontend:** http://localhost:3000

3. **Click "🧪 Show Test URLs"** to see available test URLs

4. **Select URLs:**
   - Click "Use This URL" for the first playlist
   - Click "Use This URL" for the second playlist

5. **Compare:** Click "Compare Playlists" to see results

## 📊 Expected Results

The application will show:
- **Common Songs:** Songs present in both playlists
- **Unique Songs:** Songs exclusive to each playlist
- **Statistics:** Total counts and percentages
- **Detailed Tables:** Track information with duration and album details

## 🔧 Technical Details

- **Mock Data:** Stored in `backend/api/mock-data.js`
- **Fallback System:** Automatically uses mock data when API credentials are missing
- **Realistic Data:** Includes actual song names, artists, and durations
- **Cross-Platform:** Supports both Spotify and Apple Music URL formats

## 🎵 Song Matching Logic

The application matches songs based on:
- **Track Name:** Exact match (case-insensitive)
- **Artist Name:** Exact match (case-insensitive)
- **Normalization:** Removes extra spaces and special characters

This ensures accurate comparison even with slight variations in how platforms display song information. 