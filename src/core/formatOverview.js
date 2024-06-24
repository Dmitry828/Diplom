export const formatOverview = (overview) => {
  if (window.innerWidth < 400) {
    console.log(overview.length);
    return overview.length < 160 ? overview : overview.slice(0, 157) + '...';
  }

  return overview.length < 450 ? overview : overview.slice(0, 447) + '...';
};
