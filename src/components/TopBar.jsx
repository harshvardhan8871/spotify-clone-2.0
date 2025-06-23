import React from "react";

const TopBar = () => (
  <header className="topbar w-full flex items-center justify-between px-6 py-3 bg-[#121212] border-b border-[#222] sticky top-0 z-20">
    {/* Left Section */}
    <div className="flex items-center min-w-0">
      <div className="flex items-center gap-6">
        <img src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_White.png" alt="Spotify Logo" style={{ width: 40, height: 40 }} className="inline-block align-middle" />
        <span className="flex items-center justify-center w-10 h-10 rounded-full bg-[#181818] hover:bg-[#232323] cursor-pointer">
          <span className="material-icons text-white text-2xl">home</span>
        </span>
        <span className="flex items-center justify-center w-10 h-10 rounded-full bg-[#181818] hover:bg-[#232323] cursor-pointer">
          <span className="material-icons text-white text-2xl">search</span>
        </span>
      </div>
      <div className="flex items-center bg-[#181818] rounded-full px-4 py-2 ml-6 w-[480px] max-w-[40vw] min-w-[200px] gap-2">
        <span className="material-icons text-gray-400 text-xl mr-2">search</span>
        <input type="text" placeholder="What do you want to play?" className="bg-transparent text-white border-none outline-none flex-1 text-base" />
        <span className="h-6 w-px bg-[#333] mx-3" />
        <span className="material-icons text-gray-300 text-2xl">inventory_2</span>
      </div>
    </div>
    {/* Right Section */}
    <div className="flex items-center gap-5">
      <button className="bg-white text-black px-7 py-2 rounded-full font-bold hover:bg-[#1ed760] transition-all">Explore Premium</button>
      <span className="flex items-center gap-1 text-white text-base cursor-pointer"><span className="material-icons text-2xl">download</span>Install App</span>
      <span className="material-icons text-white text-2xl cursor-pointer">notifications</span>
      <span className="material-icons text-white text-2xl cursor-pointer">group</span>
      <div className="w-10 h-10 rounded-full bg-orange-600 flex items-center justify-center font-bold text-lg text-white border-4 border-[#232323]">H</div>
    </div>
  </header>
);

export default TopBar; 