import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { formatDate, formatRunTime } from "../../helpers/format";

function Episode({ episode }) {
  const [hovered, setHovered] = useState(false);
  const linkPath = useMemo(() => {
    const path = episode.linkObj.resourceUrl.split(".com")[1];
    return path;
  }, [episode]);

  const epTitleClass = useMemo(() => {
    const baseClasses = "elips-overflow body-text-bold";
    if (hovered) {
      return `${baseClasses} callin-red`;
    }
    return `${baseClasses} dark-text`;
  }, [hovered]);

  return (
    <div>
      <hr className="divider" />
      <Link to={linkPath}>
        <div
          className="episode-item-container"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <div className={epTitleClass}>{episode.title}</div>
          <div className="body-text steel-text elips-overflow">
            {episode.description}
          </div>
          <div className="meta-text steel-text elips-overflow">
            {`${formatDate(episode.publishedAt)}  •  ${formatRunTime(
              episode.runtime
            )}`}
          </div>
        </div>
      </Link>
    </div>
  );
}

export default function EpisodesList({ episodes }) {
  return (
    <div className="episodes-list">
      <ul className="view-list">
        {episodes.map((episode) => (
          <li className="view-list-item" key={episode.id}>
            <Episode episode={episode} />
          </li>
        ))}
      </ul>
    </div>
  );
}
