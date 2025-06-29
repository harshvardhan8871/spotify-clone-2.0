// src/pages/Home.jsx - Refactored for custom CSS only
import React from "react";

const quickAccess = [
  {
    title: "Liked Songs",
    image: "https://misc.scdn.co/liked-songs/liked-songs-300.png",
  },
  {
    title: "Moosetape",
    image: "https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228",
  },
  {
    title: "Boii 😍😍",
    image: "https://via.placeholder.com/300x300/1ed760/ffffff?text=Playlist",
  },
  {
    title: "kehndi hundi si chan tak raah banade",
    image: "https://via.placeholder.com/300x300/1ed760/ffffff?text=Playlist",
  },
  {
    title: "Moon 😊",
    image: "https://via.placeholder.com/300x300/1ed760/ffffff?text=Playlist",
  },
  {
    title: "My Playlist #1",
    image: "https://via.placeholder.com/300x300/1ed760/ffffff?text=Playlist",
  },
];

const madeForYou = [
  {
    title: "Discover Weekly",
    subtitle: "Your shortcut to hidden gems, deep cuts...",
    image: "https://via.placeholder.com/300x300/1ed760/ffffff?text=Discover+Weekly",
  },
  {
    title: "Release Radar",
    subtitle: "Catch all the latest music from artists you follow...",
    image: "https://via.placeholder.com/300x300/1ed760/ffffff?text=Release+Radar",
  },
  {
    title: "Daily Mix 1",
    subtitle: "Sidhu Moose Wala, Karan Aujla, Diljit Dosanjh and more",
    image: "https://via.placeholder.com/300x300/1ed760/ffffff?text=Daily+Mix+1",
  },
  {
    title: "Daily Mix 2",
    subtitle: "Hip Hop and Rap hits",
    image: "https://via.placeholder.com/300x300/1ed760/ffffff?text=Daily+Mix+2",
  },
  {
    title: "Daily Mix 3",
    subtitle: "Pop and mainstream hits",
    image: "https://via.placeholder.com/300x300/1ed760/ffffff?text=Daily+Mix+3",
  },
];

const popularRadio = [
  {
    title: "Punjabi Radio",
    subtitle: "With Sidhu Moose Wala",
    image: "https://seeded-session-images.scdn.co/v2/img/540/r/artist/6M2wZ9GZgrQXHCFfjv46we/en",
    color: "#E49E61",
  },
  {
    title: "Hip Hop Radio",
    subtitle: "With Drake",
    image: "https://seeded-session-images.scdn.co/v2/img/540/r/artist/3TVXtAsR1Inumwj472S9r4/en",
    color: "#7358FF",
  },
  {
    title: "Pop Radio",
    subtitle: "With Taylor Swift", 
    image: "https://seeded-session-images.scdn.co/v2/img/540/r/artist/06HL4z0CvFAxyc27GXpf02/en",
    color: "#1DB954",
  },
  {
    title: "Rock Radio",
    subtitle: "With Imagine Dragons",
    image: "https://seeded-session-images.scdn.co/v2/img/540/r/artist/53XhwfbYqKCa1cC15pYq2q/en",
    color: "#E22134",
  },
  {
    title: "Indie Radio",
    subtitle: "With Arctic Monkeys",
    image: "https://seeded-session-images.scdn.co/v2/img/540/r/artist/7Ln80lUS6He07XvHI8qqHH/en",
    color: "#AF2896",
  },
];

export default function Home() {
  return (
    <div className="home-root">
      {/* Good morning section */}
      <section className="home-section">
        <div className="home-section-header">
          <h1 className="home-section-title">Good morning</h1>
        </div>
        <div className="home-card-row">
          {quickAccess.map((item, index) => (
            <div key={index} className="quick-access-card">
              <img src={item.image} alt={item.title} />
              <div className="quick-access-card-title">{item.title}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Made for Harsh Meena section */}
      <section className="home-section">
        <div className="home-section-header">
          <h2 className="home-section-title">Made For Harsh Meena</h2>
          <button className="home-section-showall">Show all</button>
        </div>
        <div className="home-card-row">
          {madeForYou.map((item, index) => (
            <div key={index} className="home-card">
              <img src={item.image} alt={item.title} />
              <div className="home-card-title">{item.title}</div>
              <div className="home-card-subtitle">{item.subtitle}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Popular radio section */}
      <section className="home-section">
        <div className="home-section-header">
          <h2 className="home-section-title">Popular radio</h2>
          <button className="home-section-showall">Show all</button>
        </div>
        <div className="home-card-row">
          {popularRadio.map((item, index) => (
            <div key={index} className="home-card">
              <div 
                className="home-card-img-radio"
                style={{ backgroundColor: item.color }}
              >
                RADIO
              </div>
              <div className="home-card-title">{item.title}</div>
              <div className="home-card-subtitle">{item.subtitle}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}