import {API_KEY, BASE_URL, language} from '../../../services/api';
import {all, call, debounce, put} from 'redux-saga/effects';
import {
  ONE_SEARCH_REQUEST,
  oneSearchSuccessMovies,
  oneSearchSuccessSerials,
} from './oneSearch.actions';

const URL = `${BASE_URL}search/`;

function fetchOneSearchMovies(query, page) {
  return fetch(
    `${URL}movie?api_key=${API_KEY}${language}&query=${query}&page=${page}`,
  ).then((response) => response.json());
}

function fetchOneSearchSerials(query, page) {
  return fetch(
    `${URL}tv?api_key=${API_KEY}${language}&query=${query}&page=${page}`,
  ).then((response) => response.json());
}

function* oneSearchMovies({searchQuery, page}) {
  const search = yield call(fetchOneSearchMovies, searchQuery, page);
  
  yield put(oneSearchSuccessMovies(search));
}

function* oneSearchSerials({searchQuery, page}) {
  const search = yield call(fetchOneSearchSerials, searchQuery, page);
  
  yield put(oneSearchSuccessSerials(search));
}

export function* watcherOneSearch() {
  yield all([
    debounce(300,ONE_SEARCH_REQUEST, oneSearchMovies),
    debounce(300,ONE_SEARCH_REQUEST, oneSearchSerials),
  ]);
}
