// src/pages/Home.js
import React from "react";

const recentlyPlayed = [
  {
    title: "Punjabi Hits",
    image: "https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228",
  },
  {
    title: "Chill Vibes",
    image: "https://i.scdn.co/image/ab67616d00001e02b3c7c3b6e3e1e6e7e7e7e7e7",
  },
  {
    title: "Workout Mix",
    image: "https://i.scdn.co/image/ab67616d00001e02c3b3c7c3b6e3e1e6e7e7e7e7",
  },
  {
    title: "Top 50 Global",
    image: "https://i.scdn.co/image/ab67616d00001e02d3b3c7c3b6e3e1e6e7e7e7e7",
  },
];

const topMixes = [
  {
    title: "Your Top Mix 1",
    image: "https://i.scdn.co/image/ab67616d00001e02e3b3c7c3b6e3e1e6e7e7e7e7",
  },
  {
    title: "Your Top Mix 2",
    image: "https://i.scdn.co/image/ab67616d00001e02f3b3c7c3b6e3e1e6e7e7e7e7",
  },
  {
    title: "Your Top Mix 3",
    image: "https://i.scdn.co/image/ab67616d00001e02a3b3c7c3b6e3e1e6e7e7e7e7",
  },
  {
    title: "Your Top Mix 4",
    image: "https://i.scdn.co/image/ab67616d00001e02b3b3c7c3b6e3e1e6e7e7e7e7",
  },
];

export default function Home() {
  return (
    <div className="min-h-[80vh] w-full bg-[#181818] flex flex-col items-center py-8 px-2">
      <div className="w-full max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-8">Good morning</h2>
        <div className="mb-10">
          <h3 className="text-xl font-semibold text-white mb-4">Recently played</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 justify-items-center">
            {recentlyPlayed.map((item) => (
              <div key={item.title} className="home-card">
                <img src={item.image} alt={item.title} />
                <div className="home-card-title">{item.title}</div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Your top mixes</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 justify-items-center">
            {topMixes.map((item) => (
              <div key={item.title} className="home-card">
                <img src={item.image} alt={item.title} />
                <div className="home-card-title">{item.title}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}