import {API_KEY, BASE_URL, language} from '../../../services/api';
import {all, call, put, takeLatest} from 'redux-saga/effects';
import {PLAYING_REQUEST, playingMovies, playingSerials,} from './playing.actions';

function fetchMovies() {
  return fetch(
    `${BASE_URL}movie/now_playing?api_key=${API_KEY}${language}&page=1`,
  ).then((response) => response.json());
}

function fetchSerials() {
  return fetch(`${BASE_URL}tv/popular?api_key=${API_KEY}${language}&page=1`).then(
    (response) => response.json(),
  );
}

function* fetchPlaying() {
  const movies = yield call(fetchMovies);
  const serials = yield call(fetchSerials);
    
  yield all([
    put(playingMovies(movies)),
    put(playingSerials(serials))
  ]);
}

export function* watcherNowPlaying() {
  yield all([
    takeLatest(PLAYING_REQUEST, fetchPlaying),
  ]);
}
