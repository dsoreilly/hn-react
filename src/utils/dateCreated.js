/** @format */

const DATE_FORMAT = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
};

export default (timestamp) => {
  const creationDate = new Date(timestamp * 1000).toLocaleDateString(
    'en-US',
    DATE_FORMAT
  );
  return `created on ${creationDate}`;
};
