import {
  DATA_REQUEST,
  OBTAIN_CERTIFICATION_MOVIES,
  OBTAIN_CERTIFICATION_SERIALS,
  OBTAIN_CONFIG,
  GENRES_MOVIES,
  GENRES_SERIALS,
} from './data.actions';

const initialState = {
  genresMovies: [],
  genresSerials: [],
  config: null,
  certificationMovies: null,
  certificationSerials: null,
};

export const dataReducer = (state = initialState, action) => {
  switch (action.type) {
  case DATA_REQUEST:
    return {...state};
  case GENRES_MOVIES:
    return {...state, genresMovies: action.payload.genres};
  case GENRES_SERIALS:
    return {...state, genresSerials: action.payload.genres};
  case OBTAIN_CONFIG:
    return {...state, config: action.payload};
  case OBTAIN_CERTIFICATION_MOVIES:
    return {...state, certificationMovies: action.payload.certifications};
  case OBTAIN_CERTIFICATION_SERIALS:
    return {...state, certificationSerials: action.payload.certifications};

  default:
    return state;
  }
};
