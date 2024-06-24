import {ADD_TO_FAVOURITE, REMOVE_FROM_FAVOURITE} from './favourite.actions';

const initialState = {
  favouriteList: [],
};

export const favouriteReducer = (state = initialState, action) => {
  switch (action.type) {
  case ADD_TO_FAVOURITE:
    return {
      ...state,
      favouriteList: [...state.favouriteList, action.payload],
    };
  case REMOVE_FROM_FAVOURITE:
    return {
      ...state,
      favouriteList: state.favouriteList.filter(
        (el) => el.id !== action.payload,
      ),
    };

  default:
    return state;
  }
};
