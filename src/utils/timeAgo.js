/**
 * @param {number} time
 * @param {string} unit
 * @returns {string}
 */

function stringify(time, unit) {
  return `${time} ${unit}${time !== 1 ? "s" : ""} ago`;
}

/**
 * @param {number} timestamp
 * @returns {string}
 */

export default function timeAgo(timestamp) {
  const ms = Date.now() / 1000 - timestamp;

  if (ms < 3600) {
    return stringify(Math.floor(ms / 60), "minute");
  } else if (ms < 86400) {
    return stringify(Math.floor(ms / 3600), "hour");
  } else {
    return stringify(Math.floor(ms / 86400), "day");
  }
}
