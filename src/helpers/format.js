const monthAbrevs = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

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
  const month = monthAbrevs[dateObj.getMonth()];
  const date = dateObj.getMonth();
  const year = dateObj.getFullYear();

  return `${month} ${date} ${year}`;
}

function formatRunTime(mins) {
  const minInt = parseInt(mins);
  if (minInt < 120) {
    return `${minInt} min`;
  }

  const hrs = Math.floor(minInt / 60);
  const remainingMins = minInt % 60;
  if (remainingMins) {
    return `${hrs} hours ${remainingMins} min`;
  }
  return `${hrs} hours`;
}

export { formatDate, formatRunTime, formatSubscribersStr, formatEpisodesStr };
