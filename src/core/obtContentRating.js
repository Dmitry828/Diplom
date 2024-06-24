export const obtContentRating = (rating, country) => {
  const filterRating =
    rating && country && rating.filter((el) => el.iso_3166_1 === country);

  if (filterRating && filterRating.length && filterRating[0].rating) {
    return filterRating && filterRating.length > 0 && filterRating[0].rating;
  }

  return (
    filterRating &&
    filterRating.length > 0 &&
    filterRating[0].release_dates[0].certification
  );
};
