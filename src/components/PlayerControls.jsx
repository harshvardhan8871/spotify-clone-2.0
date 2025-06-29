import React, { useState, useRef, useEffect } from "react";

const PlayerControls = ({ trackUrl }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [volume, setVolume] = useState(0.7);
  const audioRef = useRef(null);

  // Placeholder data for demo
  const albumArt = "https://misc.scdn.co/liked-songs/liked-songs-300.png";
  const trackTitle = "Track Title";
  const trackArtist = "Artist Name";
  const trackDuration = 210; // 3:30 in seconds

  const formatTime = (secs) => {
    if (!secs || isNaN(secs)) return "0:00";
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${m}:${s < 10 ? "0" : ""}${s}`;
  };

  // Pause audio and reset isPlaying when trackUrl changes
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
    setIsPlaying(false);
    setProgress(0);
  }, [trackUrl]);

  const handlePlayPause = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(() => {}); // Ignore play() errors
    }
    setIsPlaying(!isPlaying);
  };

  const handleTimeUpdate = () => {
    if (!audioRef.current) return;
    setProgress(audioRef.current.currentTime / audioRef.current.duration || 0);
  };

  const handleProgressChange = (e) => {
    if (!audioRef.current) return;
    const duration = audioRef.current.duration;
    if (!duration || isNaN(duration) || !isFinite(duration)) return;
    const newTime = e.target.value * duration;
    if (isNaN(newTime) || !isFinite(newTime)) return;
    audioRef.current.currentTime = newTime;
    setProgress(e.target.value);
  };

  const handleVolumeChange = (e) => {
    setVolume(e.target.value);
    if (audioRef.current) {
      audioRef.current.volume = e.target.value;
    }
  };

  return (
    <div className="player-controls">
      <audio
        ref={audioRef}
        src={trackUrl}
        onTimeUpdate={handleTimeUpdate}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        style={{ display: "none" }}
      />
      {/* Left: Album Art & Track Info */}
      <div className="player-section player-section-left">
        <img src={albumArt} alt="Album Art" className="player-album-art" />
        <div className="player-track-info">
          <div className="player-track-title">{trackTitle}</div>
          <div className="player-track-artist">{trackArtist}</div>
        </div>
        <button className="player-btn player-like-btn" title="Like">
          <span className="material-icons">favorite_border</span>
        </button>
      </div>
      {/* Center: Controls & Progress */}
      <div className="player-section player-section-center">
        <div className="player-controls-row">
          <button className="player-btn" title="Shuffle">
            <span className="material-icons">shuffle</span>
          </button>
          <button className="player-btn" title="Previous">
            <span className="material-icons">skip_previous</span>
          </button>
          <button className="player-btn player-btn-main" onClick={handlePlayPause} title={isPlaying ? "Pause" : "Play"}>
            <span className="material-icons" style={{ fontSize: 36 }}>
              {isPlaying ? "pause_circle" : "play_circle"}
            </span>
          </button>
          <button className="player-btn" title="Next">
            <span className="material-icons">skip_next</span>
          </button>
          <button className="player-btn" title="Repeat">
            <span className="material-icons">repeat</span>
          </button>
        </div>
        <div className="player-progress-row">
          <span className="player-time">{formatTime(audioRef.current?.currentTime)}</span>
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={progress}
            onChange={handleProgressChange}
            className="player-progress-bar"
          />
          <span className="player-time">{formatTime(audioRef.current?.duration || trackDuration)}</span>
        </div>
      </div>
      {/* Right: Volume & Devices */}
      <div className="player-section player-section-right">
        <button className="player-btn" title="Queue">
          <span className="material-icons">queue_music</span>
        </button>
        <button className="player-btn" title="Devices">
          <span className="material-icons">devices</span>
        </button>
        <button className="player-btn" title="Mute/Unmute">
          <span className="material-icons">volume_up</span>
        </button>
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={handleVolumeChange}
          className="player-volume-bar"
        />
      </div>
    </div>
  );
};

export default PlayerControls;