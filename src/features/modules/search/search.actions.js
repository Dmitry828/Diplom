export const SEARCH_REQUEST = 'SEARCH_REQUEST';
export const SEARCH_DEFAULT_REQUEST = 'SEARCH_DEFAULT_REQUEST';
export const SEARCH_DEFAULT = 'SEARCH_DEFAULT';
export const SEARCH_SUCCESS = 'SEARCH_SUCCESS';
export const SET_SORT = 'SET_SORT';
export const RELEASE_FILTER = 'RELEASE_FILTER';
export const ADD_GENRES_FILTER = 'ADD_GENRES_FILTER';
export const REMOVE_GENRES_FILTER = 'REMOVE_GENRES_FILTER';
export const ADD_AGE_FILTER = 'ADD_AGE_FILTER';
export const REMOVE_AGE_FILTER = 'REMOVE_AGE_FILTER';
export const SORT_AGES_FILTER = 'SORT_AGES_FILTER';
export const NEXT_PAGE = 'NEXT_PAGE';
export const PREV_PAGE = 'PREV_PAGE';

export const searchRequest = (
  entrie,
  page,
  sort,
  release,
  genres,
  certification,
) => ({
  type: SEARCH_REQUEST,
  entrie,
  page,
  sort,
  release,
  genres,
  certification,
});
export const searchDefRequest = (entrie, page) => ({
  type: SEARCH_DEFAULT_REQUEST,
  entrie, page
});
export const searchDef = (payload) => ({
  type: SEARCH_DEFAULT,
  payload
});
export const searchSuccess = (payload) => ({
  type: SEARCH_SUCCESS,
  payload,
});
export const setSort = (payload) => ({type: SET_SORT, payload});
export const releaseFilter = (payload) => ({
  type: RELEASE_FILTER,
  payload,
});
export const filtAddGenres = (payload) => ({
  type: ADD_GENRES_FILTER,
  payload,
});
export const filterDeleteGenres = (payload) => ({
  type: REMOVE_GENRES_FILTER,
  payload,
});
export const filterAddAge = (payload) => ({
  type: ADD_AGE_FILTER,
  payload,
});
export const filterDeleteAge = (payload) => ({
  type: REMOVE_AGE_FILTER,
  payload,
});
export const filterSortAges = () => ({type: SORT_AGES_FILTER});
export const nextPage = (payload) => ({type: NEXT_PAGE, payload});
export const prevPage = (payload) => ({type: PREV_PAGE, payload});
