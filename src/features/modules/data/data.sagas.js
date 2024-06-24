import {all, call, put, takeLatest} from 'redux-saga/effects';
import {API_KEY, BASE_URL, language} from '../../../services/api';
import {
  DATA_REQUEST,
  certificationMovies,
  certificationSerials,
  obtainConfig,
  genresMovies,
  genresSerials,
} from './data.actions';

function fetchAllGenres(entrie) {
  return fetch(
    `${BASE_URL}genre/${entrie}/list?api_key=${API_KEY}${language}`,
  ).then((response) => response.json());
}

function fetchConfiguration() {
  return fetch(`${BASE_URL}configuration?api_key=${API_KEY}`).then((response) =>
    response.json(),
  );
}

function fetchCertification(entrie) {
  return fetch(`${BASE_URL}certification/${entrie}/list?api_key=${API_KEY}`).then(
    (response) => response.json(),
  );
}

function* obtainAllMoviesGenre() {
  const genres = yield call(fetchAllGenres, 'movie');

  yield put(genresMovies(genres));
}

function* obtainAllSerialsGenre() {
  const genres = yield call(fetchAllGenres, 'tv');

  yield put(genresSerials(genres));
}

function* obtainConfiguration() {
  const config = yield call(fetchConfiguration);

  yield put(obtainConfig(config));
}

function* obtainCertificationMovies() {
  const certification = yield call(fetchCertification, 'movie');

  yield put(certificationMovies(certification));
}

function* obtainCertificationSerials() {
  const certification = yield call(fetchCertification, 'tv');

  yield put(certificationSerials(certification));
}

export function* watcherData() {
  yield all([
    takeLatest(DATA_REQUEST, obtainAllMoviesGenre),
    takeLatest(DATA_REQUEST, obtainAllSerialsGenre),
    takeLatest(DATA_REQUEST, obtainConfiguration),
    takeLatest(DATA_REQUEST, obtainCertificationMovies),
    takeLatest(DATA_REQUEST, obtainCertificationSerials),
  ]);
}
