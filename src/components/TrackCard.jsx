const TrackCard = ({ track, setCurrentTrackUrl }) => {
  return (
    <div className="bg-gray-800 p-4 rounded text-white">
      <img src={track.album.images[0]?.url} alt={track.name} className="w-full h-40 object-cover rounded" />
      <p className="mt-2 font-semibold">{track.name}</p>
      <p className="text-sm text-gray-300">{track.artists[0].name}</p>
      {track.preview_url ? (
        <button onClick={() => setCurrentTrackUrl(track.preview_url)} className="mt-2 w-full bg-green-600 hover:bg-green-700 text-white py-1 rounded">Play Preview</button>
      ) : (
        <p className="mt-2">No preview available</p>
      )}
    </div>
  );
};