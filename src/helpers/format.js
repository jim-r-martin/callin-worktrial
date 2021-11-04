import { MONTH_ABREV_LIST } from "./constants";

function formatSubscribersStr(subscribersCount) {
  if (!subscribersCount) {
    return "No subscribers yet";
  } else if (subscribersCount === 1) {
    return "1 subscriber";
  }

  return `${subscribersCount} subscribers`;
}

function formatEpisodesStr(episodeCount) {
  if (!episodeCount) {
    return "No episodes published yet";
  } else if (episodeCount === 1) {
    return "1 episode";
  }

  return `${episodeCount} episodes`;
}

function formatDate(seconds) {
  const dateObj = new Date(seconds * 1000);
  const month = MONTH_ABREV_LIST[dateObj.getMonth()];
  const date = dateObj.getMonth();
  const year = dateObj.getFullYear();

  return `${month} ${date} ${year}`;
}

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
