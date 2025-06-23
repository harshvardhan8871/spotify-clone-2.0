// src/pages/Search.js
import React, { useState } from "react";
import axios from "axios";

export default function Search({ token, setCurrentTrackUrl }) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const search = async () => {
    const res = await axios.get("https://api.spotify.com/v1/search", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: {
        q: query,
        type: "track",
        limit: 10,
      },
    });
    setResults(res.data.tracks.items);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search songs..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={search}>Search</button>

      <div className="grid grid-cols-3 gap-4 mt-4">
        {results.map((track) => (
          <div key={track.id} className="track-card">
            <img src={track.album.images[0]?.url} alt={track.name} />
            <p>{track.name}</p>
            <p className="text-sm text-gray-400">{track.artists[0]?.name}</p>
            {track.preview_url ? (
              <button onClick={() => setCurrentTrackUrl(track.preview_url)}>Play Preview</button>
            ) : (
              <p>No preview available</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}