// src/App.js - Complete Updated File
import React, { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import Search from "./pages/Search";
import PlayerControls from "./components/PlayerControls";
import Sidebar from "./components/Sidebar";
import Playlists from "./pages/Playlists";
import Albums from "./pages/Albums";
import Callback from "./pages/Callback";
import TopBar from "./components/TopBar";
import axios from "axios";

function App() {
  const navigate = useNavigate();
  const [token, setToken] = useState("");
  const [currentTrackUrl, setCurrentTrackUrl] = useState("");
  const [playlistTracks, setPlaylistTracks] = useState([]);
  const [playlistError, setPlaylistError] = useState("");

  useEffect(() => {
    const hash = window.location.hash;
    let _token = window.localStorage.getItem("token");

    if (!token && hash) {
      _token = hash
        .substring(1)
        .split("&")
        .find((elem) => elem.startsWith("access_token"))
        ?.split("=")[1];
      window.location.hash = "";
      window.localStorage.setItem("token", _token);
    }

    setToken(_token);
  }, [token]);

  // Fetch playlist tracks
  useEffect(() => {
    async function fetchPlaylistTracks() {
      if (!token) {
        console.log("No token available");
        setPlaylistError("No Spotify token. Please log out and log in again.");
        return;
      }
      try {
        console.log("Fetching playlist tracks...");
        const res = await axios.get(
          `https://api.spotify.com/v1/playlists/16QdqGHwGAh1ml8uwQFokJ/tracks`,
          { headers: { Authorization: `Bearer ${token}` } }
        );
        console.log("Playlist response:", res.data);
        setPlaylistTracks(res.data.items);
        setPlaylistError("");
      } catch (err) {
        if (err.response?.status === 401) {
          setPlaylistError("Spotify token expired or invalid. Please log out and log in again.");
        } else {
          setPlaylistError("Failed to load playlist. Try again later.");
        }
        setPlaylistTracks([]);
      }
    }
    fetchPlaylistTracks();
  }, [token]);

  const logout = () => {
    setToken("");
    window.localStorage.removeItem("token");
    navigate("/");
  };

  if (!token) {
    const authEndpoint = process.env.REACT_APP_AUTH_ENDPOINT;
    const clientId = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
    const redirectUri = process.env.REACT_APP_REDIRECT_URI;
    const scopes = process.env.REACT_APP_SCOPES;

    const authUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=token&scope=${scopes}`;

    return (
      <div className="container">
        <h1>Spotify 2.0 Clone</h1>
        <a href={authUrl}>
          <button>Login with Spotify</button>
        </a>
      </div>
    );
  }

  return (
    <div>
      <TopBar />
      <div className="app-main-layout">
        <Sidebar />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<Search token={token} setCurrentTrackUrl={setCurrentTrackUrl} />} />
            <Route path="/playlists" element={<Playlists />} />
            <Route path="/albums" element={<Albums />} />
            <Route path="/liked" element={<div className='text-white text-2xl'>Liked Songs (Coming Soon)</div>} />
            <Route path="/callback" element={<Callback />} />
          </Routes>
          {/* Playlist Tracks Section */}
          <div style={{marginTop: 32}}>
            <h3 style={{color: '#1ed760'}}>Moon 🌝 Playlist</h3>
            {playlistError && (
              <div style={{color: 'red', marginBottom: 16}}>{playlistError}</div>
            )}
            <ul style={{listStyle: 'none', padding: 0}}>
              {playlistTracks.map((item, idx) => (
                <li key={item.track.id} style={{marginBottom: 8, display: 'flex', alignItems: 'center'}}>
                  <img src={item.track.album?.images?.[0]?.url || "https://via.placeholder.com/40x40/1ed760/ffffff?text=♪"} alt="album art" style={{width: 40, height: 40, borderRadius: 4, marginRight: 8}} />
                  <span style={{marginRight: 12}}>{item.track.name} - {item.track.artists.map(a => a.name).join(', ')}</span>
                  {item.track.preview_url ? (
                    <button style={{background: '#1ed760', color: '#181818', border: 'none', borderRadius: 4, padding: '2px 10px', cursor: 'pointer'}} onClick={() => setCurrentTrackUrl(item.track.preview_url)}>Play</button>
                  ) : (
                    <span style={{color: '#b3b3b3'}}>No preview</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      {/* Always show the player bar */}
      <PlayerControls trackUrl={currentTrackUrl || null} />
    </div>
  );
}

export default App;