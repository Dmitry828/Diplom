export const PRODUCT_REQUEST = 'PRODUCT_REQUEST';
export const PRODUCT_SUCCESS = 'PRODUCT_SUCCESS';
export const CLEAR_PRODUCT = 'CLEAR_PRODUCT';
export const CREDITS = 'CREDITS';
export const VIDEOS = 'VIDEOS';
export const RATING = 'RATING';

export const entrieRequest = (id, entrie) => ({
  type: PRODUCT_REQUEST,
  id,
  entrie,
});
export const entrieSuccess = (payload) => ({type: PRODUCT_SUCCESS, payload});
export const clearEntrie = () => ({type: CLEAR_PRODUCT});
export const getRating = (payload) => ({type: RATING, payload});
export const getCredits = (payload) => ({type: CREDITS, payload});
export const getVideos = (payload) => ({type: VIDEOS, payload});
