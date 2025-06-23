// src/pages/Albums.js
import { useEffect, useState } from "react";
import axios from "axios";

const Albums = () => {
  const [albums, setAlbums] = useState([]);
  const token = localStorage.getItem("token");

  useEffect(() => {
    axios
      .get("https://api.spotify.com/v1/me/albums", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => setAlbums(res.data.items));
  }, [token]);

  return (
    <div className="ml-60 p-6 text-white">
      <h2 className="text-2xl font-bold mb-4">Saved Albums</h2>
      <div className="grid grid-cols-4 gap-4">
        {albums.map((a) => (
          <div key={a.album.id} className="bg-gray-800 p-4 rounded">
            <img src={a.album.images[0]?.url} alt="" className="rounded" />
            <p>{a.album.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Albums;
