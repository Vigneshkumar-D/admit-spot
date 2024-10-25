const moment = require('moment-timezone');

// Convert a UTC timestamp to a user's timezone
const convertToTimezone = (timestamp, timezone) => {
  return moment.utc(timestamp).tz(timezone).format();
};

// Get the current timestamp in UTC
const getCurrentUTCTimestamp = () => {
  return moment.utc().format();
};

// Check if a date falls within a given date range
const isDateInRange = (date, startDate, endDate) => {
  const targetDate = moment(date);
  return targetDate.isBetween(moment(startDate), moment(endDate), undefined, '[]');
};

module.exports = {
  convertToTimezone,
  getCurrentUTCTimestamp,
  isDateInRange,
};
