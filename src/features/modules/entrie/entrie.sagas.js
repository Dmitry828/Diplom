import {all, call, put, takeLatest} from 'redux-saga/effects';
import {API_KEY, BASE_URL, language} from '../../../services/api';
import {
  getCredits,
  getRating,
  getVideos,
  PRODUCT_REQUEST,
  entrieSuccess,
} from './entrie.actions';

function fetchEntrie(id, entrie) {
  return fetch(`${BASE_URL}${entrie}/${id}?api_key=${API_KEY}${language}`).then(
    (response) => response.json(),
  );
}

function fetchCredits(id, entrie) {
  if (entrie === 'movie') {
    return fetch(
      `${BASE_URL}movie/${id}/credits?api_key=${API_KEY}${language}`,
    ).then((response) => response.json());
  } else {
    return fetch(
      `${BASE_URL}tv/${id}/aggregate_credits?api_key=${API_KEY}${language}`,
    ).then((response) => response.json());
  }
}

function fetchVideos(id, entrie) {
  return fetch(
    `${BASE_URL}${entrie}/${id}/videos?api_key=${API_KEY}${language}`,
  ).then((response) => response.json());
}

function fetchRating(id, entrie) {
  if (entrie === 'movie') {
    return fetch(
      `${BASE_URL}movie/${id}/release_dates?api_key=${API_KEY}${language}`,
    ).then((response) => response.json());
  } else {
    return fetch(
      `${BASE_URL}tv/${id}/content_ratings?api_key=${API_KEY}${language}`,
    ).then((response) => response.json());
  }
}

function* obtainEntrie({id, entrie}) {
  const currentEntrie = yield call(fetchEntrie, id, entrie);
  
  yield put(entrieSuccess(currentEntrie));
}

function* obtainCredits({id, entrie}) {
  const credits = yield call(fetchCredits, id, entrie);

  yield put(getCredits(credits));
}

function* obtainVideos({id, entrie}) {
  const videos = yield call(fetchVideos, id, entrie);

  yield put(getVideos(videos));
}

function* obtainRating({id, entrie}) {
  const rating = yield call(fetchRating, id, entrie);

  yield put(getRating(rating));
}

export function* watcherEntrie() {
  yield all([
    takeLatest(PRODUCT_REQUEST, obtainEntrie),
    takeLatest(PRODUCT_REQUEST, obtainCredits),
    takeLatest(PRODUCT_REQUEST, obtainVideos),
    takeLatest(PRODUCT_REQUEST, obtainRating),
  ]);
}
