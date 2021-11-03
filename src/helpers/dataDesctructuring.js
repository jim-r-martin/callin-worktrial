const getEpisodeAndSuccess = (data) => {
  if (data && data.readWebEpisode) {
    const { episode, success } = data.readWebEpisode;
    return { episode, success };
  }
  return {};
};

export { getEpisodeAndSuccess };
