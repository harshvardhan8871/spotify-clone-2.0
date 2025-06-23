const PlayerControls = ({ trackUrl }) => {
  return (
    <div className="player-controls fixed bottom-0 w-full p-4 bg-black text-white flex items-center justify-center">
      {trackUrl && <audio src={trackUrl} controls autoPlay />}
    </div>
  );
};

export default PlayerControls;