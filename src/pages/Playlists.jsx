// src/pages/Playlists.js
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Playlists = () => {
  const [playlists, setPlaylists] = useState([]);
  const token = localStorage.getItem("token");

  useEffect(() => {
    axios
      .get("https://api.spotify.com/v1/me/playlists", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => setPlaylists(res.data.items));
  }, [token]);

  return (
    <div className="ml-60 p-6 text-white">
      <h2 className="text-2xl font-bold mb-4">Your Playlists</h2>
      <div className="grid grid-cols-4 gap-4">
        {playlists.map((pl) => (
          <Link key={pl.id} to={`/playlist/${pl.id}`}>
            <div className="bg-gray-800 p-4 rounded">
              <img src={pl.images[0]?.url} alt="" className="rounded" />
              <p>{pl.name}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Playlists;
