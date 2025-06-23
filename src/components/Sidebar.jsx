// src/components/Sidebar.js
import { Link } from "react-router-dom";

const playlists = [
  { name: "Liked Songs", type: "Playlist", songs: 38, image: "https://misc.scdn.co/liked-songs/liked-songs-640.png" },
  { name: "Moosetape", type: "Album · Sidhu Moose Wala", image: "https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228" },
  { name: "Boii", type: "Playlist · Harsh Meena", image: null },
  { name: "kehndi hundi si chan tak raah banade", type: "Playlist · anshika", image: null },
  { name: "Moon", type: "Playlist · Harsh Meena", image: null },
];

const Sidebar = () => (
  <aside className="sidebar bg-[#181818] text-white w-72 h-full flex flex-col border-r border-[#222] p-0">
    <div className="px-6 pt-6 pb-2 text-xl font-bold">Your Library</div>
    <div className="flex gap-2 px-6 pb-4">
      <button className="bg-[#232323] text-white px-4 py-1 rounded-full text-sm font-semibold">Playlists</button>
      <button className="bg-[#232323] text-gray-300 px-4 py-1 rounded-full text-sm">Artists</button>
      <button className="bg-[#232323] text-gray-300 px-4 py-1 rounded-full text-sm">Albums</button>
    </div>
    <div className="flex-1 overflow-y-auto px-2 pb-4">
      <ul className="flex flex-col gap-2">
        {playlists.map((pl) => (
          <li key={pl.name} className="flex items-center gap-3 p-2 rounded-lg hover:bg-[#232323] cursor-pointer transition-all">
            {pl.image ? (
              <img src={pl.image} alt={pl.name} className="w-12 h-12 rounded object-cover" />
            ) : (
              <div className="w-12 h-12 bg-[#333] rounded flex items-center justify-center text-2xl">
                <span className="material-icons">music_note</span>
              </div>
            )}
            <div className="flex flex-col">
              <span className="font-semibold text-base truncate">{pl.name}</span>
              <span className="text-xs text-gray-400 truncate">{pl.type}{pl.songs ? ` · ${pl.songs} songs` : ""}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  </aside>
);

export default Sidebar;
