export const PLAYING_REQUEST = 'NOW_PLAYING_REQUEST';
export const PLAYING_MOVIES_SUCCESS = 'NOW_PLAYING_MOVIES_SUCCESS';
export const PLAYING_SERIALS_SUCCESS = 'NOW_PLAYING_SERIALS_SUCCESS';

export const playingRequest = () => ({
  type: PLAYING_REQUEST,
});
export const playingMovies = (payload) => ({
  type: PLAYING_MOVIES_SUCCESS,
  payload,
});
export const playingSerials = (payload) => ({type: PLAYING_SERIALS_SUCCESS, payload});
