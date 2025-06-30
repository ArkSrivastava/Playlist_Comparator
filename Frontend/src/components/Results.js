import React, { useState } from 'react';
import './Results.css';

const Results = ({ result }) => {
  const [activeTab, setActiveTab] = useState('summary');

  const formatDuration = (ms) => {
    if (!ms) return 'N/A';
    const minutes = Math.floor(ms / 60000);
    const seconds = Math.floor((ms % 60000) / 1000);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const renderSongList = (songs, title, emptyMessage) => (
    <div className="song-list">
      <h3>{title}</h3>
      {songs.length === 0 ? (
        <p className="empty-message">{emptyMessage}</p>
      ) : (
        <div className="songs-table">
          <div className="table-header">
            <span>Track</span>
            <span>Artist</span>
            <span>Album</span>
            <span>Duration</span>
          </div>
          {songs.map((song, index) => (
            <div key={index} className="song-row">
              <span className="track-name">{song.track_name || song.name}</span>
              <span className="artist-name">{song.artist_name || song.artist}</span>
              <span className="album-name">{song.album_name || song.album}</span>
              <span className="duration">{formatDuration(song.duration_ms)}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );

  return (
    <div className="results-container">
      <div className="results-header">
        <h2>🎵 Comparison Results</h2>
        <div className="summary-stats">
          <div className="stat">
            <span className="stat-number">{result.summary.totalCommon}</span>
            <span className="stat-label">Common Songs</span>
          </div>
          <div className="stat">
            <span className="stat-number">{result.summary.totalUnique1}</span>
            <span className="stat-label">Unique to {result.playlist1.name}</span>
          </div>
          <div className="stat">
            <span className="stat-number">{result.summary.totalUnique2}</span>
            <span className="stat-label">Unique to {result.playlist2.name}</span>
          </div>
        </div>
      </div>

      <div className="playlist-info">
        <div className="playlist-card">
          <h3>📀 {result.playlist1.name}</h3>
          <p>{result.playlist1.totalSongs} songs</p>
        </div>
        <div className="vs-divider">VS</div>
        <div className="playlist-card">
          <h3>📀 {result.playlist2.name}</h3>
          <p>{result.playlist2.totalSongs} songs</p>
        </div>
      </div>

      <div className="tabs">
        <button 
          className={`tab ${activeTab === 'summary' ? 'active' : ''}`}
          onClick={() => setActiveTab('summary')}
        >
          📊 Summary
        </button>
        <button 
          className={`tab ${activeTab === 'common' ? 'active' : ''}`}
          onClick={() => setActiveTab('common')}
        >
          🔗 Common Songs ({result.commonSongs.length})
        </button>
        <button 
          className={`tab ${activeTab === 'unique1' ? 'active' : ''}`}
          onClick={() => setActiveTab('unique1')}
        >
          ⭐ {result.playlist1.name} Only ({result.playlist1.uniqueSongs.length})
        </button>
        <button 
          className={`tab ${activeTab === 'unique2' ? 'active' : ''}`}
          onClick={() => setActiveTab('unique2')}
        >
          ⭐ {result.playlist2.name} Only ({result.playlist2.uniqueSongs.length})
        </button>
      </div>

      <div className="tab-content">
        {activeTab === 'summary' && (
          <div className="summary-content">
            <div className="summary-grid">
              <div className="summary-card common">
                <h3>🔗 Common Songs</h3>
                <p className="count">{result.summary.totalCommon}</p>
                <p className="percentage">
                  {result.summary.totalCommon > 0 
                    ? `${Math.round((result.summary.totalCommon / Math.max(result.playlist1.totalSongs, result.playlist2.totalSongs)) * 100)}%`
                    : '0%'
                  }
                </p>
              </div>
              <div className="summary-card unique1">
                <h3>⭐ {result.playlist1.name} Only</h3>
                <p className="count">{result.summary.totalUnique1}</p>
                <p className="percentage">
                  {result.summary.totalUnique1 > 0 
                    ? `${Math.round((result.summary.totalUnique1 / result.playlist1.totalSongs) * 100)}%`
                    : '0%'
                  }
                </p>
              </div>
              <div className="summary-card unique2">
                <h3>⭐ {result.playlist2.name} Only</h3>
                <p className="count">{result.summary.totalUnique2}</p>
                <p className="percentage">
                  {result.summary.totalUnique2 > 0 
                    ? `${Math.round((result.summary.totalUnique2 / result.playlist2.totalSongs) * 100)}%`
                    : '0%'
                  }
                </p>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'common' && renderSongList(
          result.commonSongs, 
          'Songs in Both Playlists', 
          'No common songs found between these playlists.'
        )}

        {activeTab === 'unique1' && renderSongList(
          result.playlist1.uniqueSongs, 
          `Songs Only in ${result.playlist1.name}`, 
          'All songs from this playlist are also in the other playlist.'
        )}

        {activeTab === 'unique2' && renderSongList(
          result.playlist2.uniqueSongs, 
          `Songs Only in ${result.playlist2.name}`, 
          'All songs from this playlist are also in the other playlist.'
        )}
      </div>
    </div>
  );
};

export default Results; 