import React, { useState, useEffect } from 'react';
import './TestUrls.css';

const TestUrls = ({ onUrlSelect }) => {
  const [testUrls, setTestUrls] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchTestUrls();
  }, []);

  const fetchTestUrls = async () => {
    try {
      const response = await fetch('/api/test-urls');
      const data = await response.json();
      setTestUrls(data.urls);
    } catch (err) {
      setError('Failed to load test URLs');
    } finally {
      setLoading(false);
    }
  };

  const handleUrlClick = (url) => {
    onUrlSelect(url);
  };

  const copyToClipboard = (url) => {
    navigator.clipboard.writeText(url);
    // You could add a toast notification here
  };

  if (loading) {
    return (
      <div className="test-urls-container">
        <div className="loading">Loading test URLs...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="test-urls-container">
        <div className="error">{error}</div>
      </div>
    );
  }

  return (
    <div className="test-urls-container">
      <div className="test-urls-header">
        <h3>🧪 Test Playlist URLs</h3>
        <p>Click any URL below to test the playlist comparison without API credentials</p>
      </div>
      
      <div className="test-urls-grid">
        {testUrls.map((url, index) => (
          <div key={index} className="test-url-card">
            <div className="url-info">
              <span className="platform-icon">
                {url.includes('spotify.com') ? '🎵' : '🍎'}
              </span>
              <span className="url-text">{url}</span>
            </div>
            <div className="url-actions">
              <button 
                className="use-url-btn"
                onClick={() => handleUrlClick(url)}
              >
                Use This URL
              </button>
              <button 
                className="copy-url-btn"
                onClick={() => copyToClipboard(url)}
                title="Copy to clipboard"
              >
                📋
              </button>
            </div>
          </div>
        ))}
      </div>
      
      <div className="test-instructions">
        <h4>How to test:</h4>
        <ol>
          <li>Click "Use This URL" for the first playlist</li>
          <li>Click "Use This URL" for the second playlist</li>
          <li>Click "Compare Playlists" to see the results</li>
        </ol>
      </div>
    </div>
  );
};

export default TestUrls; 