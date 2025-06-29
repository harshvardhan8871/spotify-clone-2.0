// src/components/TopBar.jsx
import React from "react";

const TopBar = () => (
  <header className="topbar">
    {/* Left: Navigation Icons */}
    <div className="nav-icons">
      <span className="material-icons">home</span>
      <span className="material-icons">search</span>
    </div>

    {/* Center: Search Bar */}
    <div className="search-wrapper">
      <input type="text" placeholder="What do you want to play?" />
    </div>

    {/* Right: Actions */}
    <div className="right-section">
      <button>Explore Premium</button>
      <div className="install-app">
        <span className="material-icons">download</span>
        <span>Install App</span>
      </div>
      <span className="material-icons icon-btn">notifications</span>
      <span className="material-icons icon-btn">group</span>
      <div className="profile-circle">H</div>
    </div>
  </header>
);

export default TopBar;
