import { MONTH_ABREV_LIST } from "./constants";

/**
 * Returns grammatically corrent subscribers count info string
 *
 * @param {number} subscribersCount Amount of show subscribers
 * @return {string} subscribers count info string
 */
function formatSubscribersStr(subscribersCount) {
  if (!subscribersCount) {
    return "No subscribers yet";
  }

  if (subscribersCount === 1) {
    return "1 subscriber";
  }

  return `${subscribersCount} subscribers`;
}

/**
 * Returns grammatically correct episode count info string
 *
 * @param {number} episodeCount Amount of show episodes
 * @return {string} episode count info string
 */
function formatEpisodesStr(episodeCount) {
  if (!episodeCount) {
    return "No episodes published yet";
  }

  if (episodeCount === 1) {
    return "1 episode";
  }

  return `${episodeCount} episodes`;
}

/**
 * Convert seconds into formatted date string (ex. Oct 9 2021)
 *
 * @param {number} seconds unix timestamp
 * @return {string} date string - format: [MMM d y]
 */
function formatDate(seconds) {
  const dateObj = new Date(seconds * 1000);
  const month = MONTH_ABREV_LIST[dateObj.getMonth()];
  const date = dateObj.getMonth();
  const year = dateObj.getFullYear();

  return `${month} ${date} ${year}`;
}

/**
 * Returns runtime seconds represented as formatted hours and mins string
 * note: if runtime is less than 2 hours only display in temrs of minutes
 *
 * @param {number} seconds runtime seconds
 * @return {string} hours and mins string
 */
function formatRunTime(seconds) {
  const secondsInt = parseInt(seconds);
  const totalMins = Math.floor(secondsInt / 60);
  const hours = Math.floor(totalMins / 60);
  const mins = totalMins % 60;

  let runTimeString = "";

  if (hours > 1) {
    runTimeString += `${hours} hours`;
    if (mins > 0) {
      runTimeString += mins > 1 ? ` ${mins} mins` : " 1 min";
    }
    return runTimeString;
  }

  runTimeString = totalMins > 1 ? `${totalMins} mins` : "1 min";
  return runTimeString;
}

export { formatDate, formatRunTime, formatSubscribersStr, formatEpisodesStr };
