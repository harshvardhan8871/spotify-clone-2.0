import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');
  return (
    <div className="p-4">
      <input
        type="text"
        value={query}
        placeholder="Search for songs, albums..."
        onChange={(e) => setQuery(e.target.value)}
        className="w-full p-2 border rounded"
      />
      <button onClick={() => onSearch(query)} className="mt-2 px-4 py-2 bg-green-500 text-white rounded">
        Search
      </button>
    </div>
  );
};

export default SearchBar;