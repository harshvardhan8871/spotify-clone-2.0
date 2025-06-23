import axios from 'axios';

const BASE_URL = 'https://api.spotify.com/v1';

const getHeaders = () => ({
  Authorization: `Bearer ${localStorage.getItem('access_token')}`,
});

export const searchTracks = async (query) =>
  axios.get(`${BASE_URL}/search`, {
    headers: getHeaders(),
    params: { q: query, type: 'track,artist,album', limit: 10 },
  });

export const getUserPlaylists = () =>
  axios.get(`${BASE_URL}/me/playlists`, { headers: getHeaders() });

export const getPlaylist = (id) =>
  axios.get(`${BASE_URL}/playlists/${id}`, { headers: getHeaders() });

export const getAlbumsByArtist = (artistId) =>
  axios.get(`${BASE_URL}/artists/${artistId}/albums`, { headers: getHeaders() });