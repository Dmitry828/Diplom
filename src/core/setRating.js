export const setRating = (rating) => {
  if (rating >= 8) {
    return '★★★★★';
  } else if (rating >= 6 && rating < 8) {
    return '★★★★☆';
  } else if (rating >= 4 && rating < 6) {
    return '★★★☆☆';
  } else if (rating >= 2 && rating < 4) {
    return '★★☆☆☆';
  } else {
    return '★☆☆☆☆';
  }
};
