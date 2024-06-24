import {PLAYING_MOVIES_SUCCESS, PLAYING_REQUEST, PLAYING_SERIALS_SUCCESS,} from './playing.actions';

const initialState = {
  movies: {},
  serials: {},
  loading: false
};

export const playingReducer = (state = initialState, action) => {
  switch (action.type) {
  case PLAYING_REQUEST:
    return {...state, loading: true};
  case PLAYING_MOVIES_SUCCESS:
    return {...state, movies: action.payload, loading: false};
  case PLAYING_SERIALS_SUCCESS:
    return {...state, serials: action.payload, loading: false};

  default:
    return state;
  }
};
