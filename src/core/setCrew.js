export const setCrew = (crew) => {
  const result = [];

  for (const key of crew) {
    if (
      key.job === 'Story' ||
      key.job === 'Characters' ||
      key.job === 'Director' ||
      key.job === 'Novel' ||
      key.job === 'Writer' ||
      key.job === 'Screenplay'
    ) {
      const human = {
        name: key.name,
        job: [key.job],
      };

      result.push(human);
    }
  }

  for (let i = 0; i < result.length; i++) {
    if (result[i + 1] !== undefined && result[i].name === result[i + 1].name) {
      result[i].job = [...result[i].job, ...result[i + 1].job];
      result[i + 1].delete = true;
    }
  }

  return result
    .filter((el) => !el.delete)
    .map((el) => {
      el.job.sort();

      return el;
    });
};
