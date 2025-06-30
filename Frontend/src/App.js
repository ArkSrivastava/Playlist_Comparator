import React, { useState } from 'react';
import InputForm from './components/InputForm';
import Results from './components/Results';
import './App.css';

function App() {
  const [comparisonResult, setComparisonResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleCompare = async (playlist1Url, playlist2Url) => {
    setLoading(true);
    setError(null);
    setComparisonResult(null);

    try {
      const response = await fetch('/api/compare', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          playlist1Url,
          playlist2Url
        })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to compare playlists');
      }

      setComparisonResult(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>🎵 Playlist Comparator</h1>
        <p>Compare playlists from Spotify, Apple Music, and more!</p>
      </header>

      <main className="App-main">
        <InputForm onCompare={handleCompare} loading={loading} />
        
        {error && (
          <div className="error-message">
            <p>❌ {error}</p>
          </div>
        )}

        {comparisonResult && (
          <Results result={comparisonResult} />
        )}
      </main>

      <footer className="App-footer">
        <p>Built with ❤️ for music lovers</p>
      </footer>
    </div>
  );
}

export default App; 