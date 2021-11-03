import MetaTitle from "../shared/MetaTitle";
import EpisodesList from "./EpisodesList";
import CategoriesList from "../shared/CategoriesList";
import UsersList from "../shared/UsersList";
import { formatSubscribersStr, formatEpisodesStr } from "../../helpers/format";

export default function Show({ show = {}, errors }) {
  return (
    <div>
      <MetaTitle title={show.title} />
      <div className="header">
        <span className="callin-red">
          <b>Callin</b>
        </span>{" "}
        <span>Show Preview</span>
      </div>
      <hr className="divider" />
      <div className="view-content-container">
        <div className="content-col content-left-col">
          <div className="view-section-container">
            <div className="view-section image-container">
              <img
                className="profile-photo"
                src={show.photo}
                alt={`${show.title}`}
              />
            </div>
            <div className="view-section counts">
              {`${formatSubscribersStr(
                show.subscribesCount
              )}  •  ${formatEpisodesStr(show.episodes.length)}`}
            </div>
          </div>
          <hr className="divider" />
          <div className="view-section-container description">
            <div className="view-section">{show.description}</div>
          </div>
        </div>
        <div className="content-col content-right-col">
          <div className="view-section-container">
            <div className="view-section">
              <span className="title">{show.title}</span>
            </div>
            <div className="view-section">
              <CategoriesList categorizations={show.categorizations} />
            </div>
          </div>
          <hr className="divider" />
          <div className="view-section-container">
            <div className="view-section">
              <b>Hosts</b>
            </div>
            <div className="view-section">
              <UsersList users={show.hosts} />
            </div>
          </div>
          <EpisodesList episodes={show.episodes} />
        </div>
      </div>
    </div>
  );
}
