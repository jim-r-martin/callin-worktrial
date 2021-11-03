import { useMemo } from "react";
import { Link } from "react-router-dom";
import MetaTitle from "../shared/MetaTitle";
import CategoriesList from "../shared/CategoriesList";
import UsersList from "../shared/UsersList";
import { formatDate, formatRunTime } from "../../helpers/format";

export default function Episode({ episode = {}, errors }) {
  const showLinkPath = useMemo(() => {
    const path = episode.show.linkObj.resourceUrl.split(".com")[1];
    return path;
  }, [episode]);

  return (
    <div>
      <MetaTitle title={episode.title} />
      <div className="header">
        <span className="callin-red">
          <b>Callin</b>
        </span>{" "}
        <span>Episode Preview</span>
      </div>
      <hr className="divider" />
      <div className="view-content-container">
        <div className="content-col content-left-col">
          <div className="view-section-container">
            <div className="view-section image-container">
              <img
                className="profile-photo"
                src={episode.show.photo}
                alt={`${episode.show.title}`}
              />
            </div>
            <div className="view-section meta-text steel-text elips-overflow">
              {`${formatDate(episode.publishedAt)}  •  ${formatRunTime(
                episode.runtime
              )}`}
            </div>
          </div>
        </div>
        <div className="content-col content-right-col">
          <div className="view-section-container">
            <div className="view-section episode-title">
              <span className="title">{episode.title}</span>
            </div>
            <div className="view-section">
              <Link to={showLinkPath}>
                <div className="elips-overflow callin-red body-text undline-hvr">
                  {episode.show.title}
                </div>
              </Link>
            </div>
            <div className="view-section">
              <CategoriesList categorizations={episode.show.categorizations} />
            </div>
          </div>
          <hr className="divider" />
          <div className="view-section-container">
            <div className="view-section">
              <b>Hosts</b>
            </div>
            <div className="view-section">
              <UsersList users={episode.speakers} />
            </div>
          </div>
          <hr className="divider" />
          <div className="view-section-container description">
            <div className="view-section">{episode.description}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
