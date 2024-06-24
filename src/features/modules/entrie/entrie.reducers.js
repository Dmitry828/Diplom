import {
  CLEAR_PRODUCT,
  CREDITS,
  RATING,
  VIDEOS,
  PRODUCT_REQUEST,
  PRODUCT_SUCCESS,
} from './entrie.actions';

const initialState = {
  entrie: {},
  credits: {},
  videos: {},
  content_rating: '',
  loading: false,
};

export const entrieReducer = (state = initialState, action) => {
  switch (action.type) {
  case PRODUCT_REQUEST:
    return {...state, loading: true};
  case PRODUCT_SUCCESS:
    return {
      ...state,
      entrie: {
        ...action.payload,
      }, loading: false,
    };
  case CLEAR_PRODUCT:
    return initialState;
  case CREDITS:
    return {...state, credits: action.payload};
  case VIDEOS:
    return {...state, videos: action.payload};
  case RATING:
    return {...state, content_rating: action.payload};

  default:
    return state;
  }
};
