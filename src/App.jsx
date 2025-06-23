// src/App.js
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

function App() {
  const navigate = useNavigate();
  const [token, setToken] = useState("");
  const [currentTrackUrl, setCurrentTrackUrl] = useState("");

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
    <div className="bg-[#121212] min-h-screen flex flex-col">
      <TopBar />
      <div className="flex flex-1 h-[calc(100vh-64px)]">
        <Sidebar />
        <main className="flex-1 min-h-screen bg-[#181818]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<Search token={token} setCurrentTrackUrl={setCurrentTrackUrl} />} />
            <Route path="/playlists" element={<Playlists />} />
            <Route path="/albums" element={<Albums />} />
            <Route path="/liked" element={<div className='text-white text-2xl'>Liked Songs (Coming Soon)</div>} />
            <Route path="/callback" element={<Callback />} />
          </Routes>
        </main>
      </div>
      {currentTrackUrl && <PlayerControls trackUrl={currentTrackUrl} />}
    </div>
  );
}

export default App;