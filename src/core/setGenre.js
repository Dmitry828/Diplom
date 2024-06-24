export const setGenre = (genres, genreId) => {
  for (let i = 0; i < genres.length; i++) {
    if (genreId.indexOf(genres[i].id) > -1) {
      return genres[i].name;
    }
  }

  return 'Unknown';
};
