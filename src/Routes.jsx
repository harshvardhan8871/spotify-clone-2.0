import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Search from './pages/Search';
import Playlist from './pages/Playlist';
import Album from './pages/Album';

export default function RoutePanel() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/search" element={<Search />} />
      <Route path="/playlist/:id" element={<Playlist />} />
      <Route path="/album/:id" element={<Album />} />
    </Routes>
  );
}