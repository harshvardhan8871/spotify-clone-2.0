// src/components/Sidebar.jsx - Complete Updated File
import { Link } from "react-router-dom";

const playlists = [
  { name: "Liked Songs", type: "Playlist", songs: 38, image: "https://misc.scdn.co/liked-songs/liked-songs-640.png" },
  { name: "Moosetape", type: "Album · Sidhu Moose Wala", image: "https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228" },
  { name: "Boii 😍😍", type: "Playlist · Harsh Meena", image: null },
  { name: "kehndi hundi si chan tak raah banade", type: "Playlist · anshika", image: null },
  { name: "Moon 😊", type: "Playlist · Harsh Meena", image: null },
];

const Sidebar = () => (
  <aside className="sidebar">
    <div className="sidebar-header">Your Library</div>
    <div className="sidebar-filters">
      <button className="sidebar-filter active">Playlists</button>
      <button className="sidebar-filter">Artists</button>
      <button className="sidebar-filter">Albums</button>
    </div>
    <div className="sidebar-playlists">
      <ul>
        {playlists.map((pl) => (
          <li key={pl.name} className="sidebar-playlist-item">
            {pl.image ? (
              <img src={pl.image} alt={pl.name} className="sidebar-playlist-img" />
            ) : (
              <div className="sidebar-playlist-img placeholder">
                <span className="material-icons">music_note</span>
              </div>
            )}
            <div className="sidebar-playlist-info">
              <span className="sidebar-playlist-title">{pl.name}</span>
              <span className="sidebar-playlist-type">{pl.type}{pl.songs ? ` · ${pl.songs} songs` : ""}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  </aside>
);

export default Sidebar;