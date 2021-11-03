import MetaTitle from "../shared/MetaTitle";

export default function Episode({ data, loading, error }) {
  return (
    <div>
      <MetaTitle
        data={data}
        titlePropTarget={["readWebEpisode", "episode", "title"]}
      />
      Episode
    </div>
  );
}
