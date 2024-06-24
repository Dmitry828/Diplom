export const ONE_SEARCH_REQUEST = 'ONE_SEARCH_REQUEST';
export const ALL_SEARCH_QUERY = 'ALL_SEARCH_QUERY';
export const ONE_SEARCH_SUCCESS_MOVIES = 'ONE_SEARCH_SUCCESS_MOVIES';
export const ONE_SEARCH_SUCCESS_SERIALS = 'ONE_SEARCH_SUCCESS_SERIALS';
export const NEXT_PAGE = 'NEXT_PAGE';
export const PREV_PAGE = 'PREV_PAGE';

export const oneSearchRequest = (searchQuery, page) => ({
  type: ONE_SEARCH_REQUEST,
  searchQuery,
  page,
});
export const allSearchQuery = (payload) => ({
  type: ALL_SEARCH_QUERY,
  payload,
});
export const oneSearchSuccessMovies = (payload) => ({
  type: ONE_SEARCH_SUCCESS_MOVIES,
  payload,
});
export const oneSearchSuccessSerials = (payload) => ({
  type: ONE_SEARCH_SUCCESS_SERIALS,
  payload,
});
export const nextPage = (payload) => ({type: NEXT_PAGE, payload});
export const prevPage = (payload) => ({type: PREV_PAGE, payload});
