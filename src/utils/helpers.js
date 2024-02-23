export const getSeparateDate = (timestamp) => {
  const days = Math.floor(timestamp / (24 * 60 * 60 * 1000));
  const hours = Math.floor((timestamp - days * 24 * 60 * 60 * 1000) / (60 * 60 * 1000));
  const minutes = Math.floor(
    (timestamp - days * 24 * 60 * 60 * 1000 - hours * 60 * 60 * 1000) / (60 * 1000),
  );
  const seconds = Math.floor(
    (timestamp - days * 24 * 60 * 60 * 1000 - hours * 60 * 60 * 1000 - minutes * 60 * 1000) / 1000,
  );

  return { days, hours, minutes, seconds };
};
