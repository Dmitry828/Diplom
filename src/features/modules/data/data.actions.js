export const DATA_REQUEST = 'DATA_REQUEST';
export const GENRES_MOVIES = 'GENRES_MOVIES';
export const GENRES_SERIALS = 'GENRES_SERIALS';
export const OBTAIN_CONFIG = 'OBTAIN_CONFIG';
export const OBTAIN_CERTIFICATION_MOVIES = 'OBTAIN_CERTIFICATION_MOVIES';
export const OBTAIN_CERTIFICATION_SERIALS = 'OBTAIN_CERTIFICATION_SERIALS';

export const dataRequest = () => ({
  type: DATA_REQUEST,
});
export const genresMovies = (payload) => ({
  type: GENRES_MOVIES,
  payload,
});
export const genresSerials = (payload) => ({
  type: GENRES_SERIALS,
  payload,
});
export const obtainConfig = (payload) => ({type: OBTAIN_CONFIG, payload});
export const certificationMovies = (payload) => ({
  type: OBTAIN_CERTIFICATION_MOVIES,
  payload,
});
export const certificationSerials = (payload) => ({
  type: OBTAIN_CERTIFICATION_SERIALS,
  payload,
});
