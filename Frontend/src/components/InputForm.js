import React, { useState } from 'react';
import TestUrls from './TestUrls';
import './InputForm.css';

const InputForm = ({ onCompare, loading }) => {
  const [playlist1Url, setPlaylist1Url] = useState('');
  const [playlist2Url, setPlaylist2Url] = useState('');
  const [errors, setErrors] = useState({});
  const [showTestUrls, setShowTestUrls] = useState(false);

  const validateUrls = () => {
    const newErrors = {};
    
    if (!playlist1Url.trim()) {
      newErrors.playlist1 = 'Playlist 1 URL is required';
    } else if (!isValidUrl(playlist1Url)) {
      newErrors.playlist1 = 'Please enter a valid playlist URL';
    }
    
    if (!playlist2Url.trim()) {
      newErrors.playlist2 = 'Playlist 2 URL is required';
    } else if (!isValidUrl(playlist2Url)) {
      newErrors.playlist2 = 'Please enter a valid playlist URL';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const isValidUrl = (url) => {
    return url.includes('spotify.com') || url.includes('music.apple.com');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateUrls()) {
      onCompare(playlist1Url.trim(), playlist2Url.trim());
    }
  };

  const getPlatformIcon = (url) => {
    if (url.includes('spotify.com')) return '🎵';
    if (url.includes('music.apple.com')) return '🍎';
    return '🎶';
  };

  const handleUrlSelect = (url) => {
    if (!playlist1Url) {
      setPlaylist1Url(url);
    } else if (!playlist2Url) {
      setPlaylist2Url(url);
    } else {
      // If both are filled, replace the second one
      setPlaylist2Url(url);
    }
  };

  return (
    <div className="input-form-container">
      <form onSubmit={handleSubmit} className="input-form">
        <div className="form-header">
          <h2>Enter Playlist URLs</h2>
          <p>Paste the links to the playlists you want to compare</p>
        </div>

        <div className="form-row">
          <div className="input-group">
            <label htmlFor="playlist1">
              {getPlatformIcon(playlist1Url)} Playlist 1
            </label>
            <input
              type="url"
              id="playlist1"
              value={playlist1Url}
              onChange={(e) => setPlaylist1Url(e.target.value)}
              placeholder="https://open.spotify.com/playlist/..."
              className={errors.playlist1 ? 'error' : ''}
              disabled={loading}
            />
            {errors.playlist1 && (
              <span className="error-text">{errors.playlist1}</span>
            )}
          </div>

          <div className="input-group">
            <label htmlFor="playlist2">
              {getPlatformIcon(playlist2Url)} Playlist 2
            </label>
            <input
              type="url"
              id="playlist2"
              value={playlist2Url}
              onChange={(e) => setPlaylist2Url(e.target.value)}
              placeholder="https://music.apple.com/playlist/..."
              className={errors.playlist2 ? 'error' : ''}
              disabled={loading}
            />
            {errors.playlist2 && (
              <span className="error-text">{errors.playlist2}</span>
            )}
          </div>
        </div>

        <div className="supported-platforms">
          <h3>Supported Platforms:</h3>
          <div className="platform-icons">
            <span className="platform">🎵 Spotify</span>
            <span className="platform">🍎 Apple Music</span>
          </div>
        </div>

        <div className="test-section">
          <button 
            type="button"
            className="test-toggle-btn"
            onClick={() => setShowTestUrls(!showTestUrls)}
          >
            {showTestUrls ? '🔽 Hide Test URLs' : '🧪 Show Test URLs'}
          </button>
          
          {showTestUrls && (
            <TestUrls onUrlSelect={handleUrlSelect} />
          )}
        </div>

        <button 
          type="submit" 
          className="compare-button"
          disabled={loading}
        >
          {loading ? (
            <>
              <span className="spinner"></span>
              Comparing Playlists...
            </>
          ) : (
            'Compare Playlists'
          )}
        </button>
      </form>
    </div>
  );
};

export default InputForm; 