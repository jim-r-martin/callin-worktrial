import MetaTitle from "../shared/MetaTitle";

export default function Episode({ episode = {}, error }) {
  return (
    <div>
      <MetaTitle title={episode.title} />
      Episode
    </div>
  );
}
