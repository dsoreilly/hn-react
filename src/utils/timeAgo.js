/** @format */

const getLabel = (time, unit) => {
    return `${time} ${unit}${time !== 1 ? 's' : ''} ago`;
};

export default (timestamp) => {
    const ms = Date.now() / 1000 - timestamp;
    if (ms < 3600) return getLabel(Math.floor(ms / 60), 'minute');
    else if (ms < 86400) return getLabel(Math.floor(ms / 3600), 'hour');
    else return getLabel(Math.floor(ms / 86400), 'day');
};
