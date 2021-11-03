import { Helmet } from "react-helmet";
import useLink from "./hooks/useLink";
import useQuery from "./hooks/useQuery";
import { READ_WEB_EPISODE } from "./queries";

export default function Episode() {
  const link = useLink();
  const { loading, errors, data } = useQuery(READ_WEB_EPISODE, {
    link,
  });

  console.log(data);

  return (
    <div>
      {data &&
        data.readWebEpisode &&
        data.readWebEpisode.episode &&
        data.readWebEpisode.episode.title && (
          <Helmet>
            <title>{data.readWebEpisode.episode.title}</title>
          </Helmet>
        )}
      Episode Link: {link}
    </div>
  );
}
