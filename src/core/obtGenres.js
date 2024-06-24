export const obtGenres = (genres) => {
  const result = [];
  if (genres) {
    for (const genre of genres) {
      result.push(genre.name);
    }
  }

  return result.join(', ');
};
