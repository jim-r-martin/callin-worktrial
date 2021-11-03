import EpisodeItem from "./EpisodeItem";

export default function EpisodesList({ episodes }) {
  return (
    <div className="episodes-list">
      <ul className="view-list">
        {episodes.map((episode) => (
          <li className="view-list-item" key={episode.id}>
            <EpisodeItem episode={episode} />
          </li>
        ))}
      </ul>
    </div>
  );
}
