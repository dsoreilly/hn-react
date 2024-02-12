/**
 * @type {Intl.DateTimeFormatOptions}
 */

const DATETIME_FORMAT = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};

/**
 * @param {number} timestamp
 * @returns {string}
 */

export default function dateCreated(timestamp) {
  const creationDate = new Date(timestamp * 1000).toLocaleDateString(
    "en-US",
    DATETIME_FORMAT,
  );
  return `created on ${creationDate}`;
}
