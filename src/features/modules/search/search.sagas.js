import {all, call, put, takeLatest} from 'redux-saga/effects';
import {API_KEY, BASE_URL, language} from '../../../services/api';
import {SEARCH_DEFAULT_REQUEST, SEARCH_REQUEST, searchDef, searchSuccess,} from './search.actions';

const URL = `${BASE_URL}discover/`;

function fetchSearch(entrie, page, sort, release, genres, certification) {
  if (entrie === 'movie') {
    return fetch(
      `${URL}movie?api_key=${API_KEY}${language}&sort_by=${sort}&page=${page}${
        release[0] ?
          '&release_date.gte=' +
            release[0] +
            '&release_date.lte=' +
            release[1] :
          '&release_date.lte=' + release[1]
      }${genres[0] ? '&with_genres=' + genres.join(',') : ''}${
        certification[0] ?
          '&certification_country=US&certification.gte=' +
            certification[0].value :
          ''
      }`,
    ).then((response) => response.json());
  } else {
    return fetch(
      `${URL}tv?api_key=${API_KEY}${language}&sort_by=${sort}&page=${page}${
        release[0] ?
          '&first_air_date.gte=' +
            release[0] +
            '&first_air_date.lte=' +
            release[1] :
          '&first_air_date.lte=' + release[1]
      }${genres[0] ? '&with_genres=' + genres.join(',') : ''}${
        certification[0] ?
          '&certification_country=US&certification.gte=' +
            certification[0].value :
          ''
      }`,
    ).then((response) => response.json());
  }
}

function fetchDefSearch(entrie, page) {
  return fetch(
    `${URL}${entrie}?api_key=${API_KEY}${language}&sort_by=popularity.desc&page=${page}`,
  ).then((response) => response.json());
}

function* fetchEntries({entrie, page, sort, release, genres, certification}) {
  const entries = yield call(
    fetchSearch,
    entrie,
    page,
    sort,
    release,
    genres,
    certification,
  );
  
  yield put(searchSuccess(entries));
}

function* obtainFetchDefaultSearch({entrie, page}) {
  const entries = yield call(fetchDefSearch, entrie, page);

  yield put(searchDef(entries));
}

export function* watcherSearch() {
  yield all([
    takeLatest(SEARCH_REQUEST, fetchEntries),
    takeLatest(SEARCH_DEFAULT_REQUEST, obtainFetchDefaultSearch),
  ]);
}
