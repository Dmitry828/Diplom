export const obtTime = (runtime) => {
  const hours = Math.trunc(runtime / 60);
  const minutes = runtime % 60;
  return (
    (hours === 0 ? '' : hours + 'h') + (minutes === 0 ? '' : minutes + 'm')
  );
};
