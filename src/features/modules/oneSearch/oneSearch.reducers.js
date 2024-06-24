import {
  ALL_SEARCH_QUERY,
  ONE_SEARCH_REQUEST,
  ONE_SEARCH_SUCCESS_MOVIES,
  ONE_SEARCH_SUCCESS_SERIALS,
} from './oneSearch.actions';

const initialState = {
  searchQuery: '',
  searchMovies: {},
  searchSerials: {},
  loading: false
};

export const oneSearchReducer = (state = initialState, action) => {
  switch (action.type) {
  case ONE_SEARCH_REQUEST:
    return {...state, loading: true};
  case ALL_SEARCH_QUERY:
    return {...state, searchQuery: action.payload};
  case ONE_SEARCH_SUCCESS_MOVIES:
    return {...state, searchMovies: action.payload, loading: false};
  case ONE_SEARCH_SUCCESS_SERIALS:
    return {...state, searchSerials: action.payload, loading: false};

  default:
    return state;
  }
};
