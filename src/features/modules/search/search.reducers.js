import {
  RELEASE_FILTER,
  ADD_GENRES_FILTER,
  REMOVE_GENRES_FILTER,
  ADD_AGE_FILTER,
  REMOVE_AGE_FILTER,
  SORT_AGES_FILTER,
  NEXT_PAGE,
  PREV_PAGE,
  SEARCH_DEFAULT,
  SEARCH_DEFAULT_REQUEST,
  SEARCH_REQUEST,
  SEARCH_SUCCESS,
  SET_SORT,
} from './search.actions';
import {currDate} from '../../../core/currDate';

const initialState = {
  entries: {},
  sort: 'popularity.desc',
  genres: [],
  certification: [],
  release: ['', currDate(1)],
  changing: false,
  loading: false,
};

export const searchReducer = (state = initialState, action) => {
  switch (action.type) {
  case SEARCH_REQUEST:
    return {...state, loading: true};
  case SEARCH_DEFAULT_REQUEST:
    return {...initialState, loading: true};
  case SEARCH_DEFAULT:
    return {...initialState, entries: action.payload, loading: false, changing: false,};
  case SEARCH_SUCCESS:
    return {...state, entries: action.payload, loading: false, changing: false,};
  case SET_SORT:
    return {...state, sort: action.payload, changing: true};
  case RELEASE_FILTER:
    return {...state, release: action.payload, changing: true};
  case ADD_GENRES_FILTER:
    return {
      ...state,
      genres: [...state.genres, action.payload],
      changing: true,
    };
  case REMOVE_GENRES_FILTER:
    return {
      ...state,
      genres: state.genres.filter((el) => el !== action.payload),
      changing: true,
    };
  case ADD_AGE_FILTER:
    return {
      ...state,
      certification: [...state.certification, action.payload],
      changing: true,
    };
  case REMOVE_AGE_FILTER:
    return {
      ...state,
      certification: state.certification.filter(
        (el) => el.value !== action.payload,
      ),
      changing: true,
    };
  case SORT_AGES_FILTER:
    return {
      ...state,
      certification: state.certification.sort((a, b) => a.order - b.order),
    };
  case NEXT_PAGE:
    return {
      ...state,
      entries: {
        ...state.entries,
        page: action.payload,
      },
    };
  case PREV_PAGE:
    return {
      ...state,
      entries: {
        ...state.entries,
        page: action.payload,
      },
    };

  default:
    return state;
  }
};
