const getEpisodeAndSuccess = (data) => {
  if (data && data.readWebEpisode) {
    const { episode, success } = data.readWebEpisode;
    return { episode, success };
  }
  return {};
};

const getShowAndSuccess = (data) => {
  if (data && data.readWebShow) {
    const { show, success } = data.readWebShow;
    return { show, success };
  }
  return {};
};

export { getEpisodeAndSuccess, getShowAndSuccess };
