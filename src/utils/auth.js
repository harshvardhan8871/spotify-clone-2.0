export const getAuthUrl = () => {
  const scopes = encodeURIComponent(process.env.REACT_APP_SCOPES);
  return `${process.env.REACT_APP_AUTH_ENDPOINT}?client_id=${process.env.REACT_APP_SPOTIFY_CLIENT_ID}&redirect_uri=${process.env.REACT_APP_REDIRECT_URI}&response_type=token&scope=${scopes}`;
};