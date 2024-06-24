export const formatTitle = (title) => {
  return title.length > 30 ? title.slice(0, 27) + '..' : title;
};
