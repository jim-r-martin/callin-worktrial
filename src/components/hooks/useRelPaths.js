import { useEffect, useState } from "react";

function useShowPath(episode) {
  const [path, setPath] = useState("");

  useEffect(() => {
    const relPath = episode.show.linkObj.resourceUrl.split(".com")[1];
    setPath(relPath);
  }, [episode, setPath]);

  return path;
}

function useEpisodePath(episode) {
  const [path, setPath] = useState("");

  useEffect(() => {
    const relPath = episode.linkObj.resourceUrl.split(".com")[1];
    setPath(relPath);
  }, [episode, setPath]);

  return path;
}

export { useShowPath, useEpisodePath };
