const getEpisodeAndSuccess = (data) => {
  if (data && data.readWebEpisode) {
    const { episode, success, errors } = data.readWebEpisode;
    return { episode, success, errors };
  }
  return {};
};

const getShowAndSuccess = (data) => {
  if (data && data.readWebShow) {
    const { show, success, errors } = data.readWebShow;
    return { show, success, errors };
  }
  return {};
};

export { getEpisodeAndSuccess, getShowAndSuccess };
