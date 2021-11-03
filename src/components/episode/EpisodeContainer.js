import useLink from "../hooks/useLink";
import useQuery from "../hooks/useQuery";
import { READ_WEB_EPISODE } from "../queries";
import Episode from "./Episode";

export default function EpisodeContainer() {
  const link = useLink();
  const { loading, errors, data } = useQuery(READ_WEB_EPISODE, {
    link: "JdmHjXDBIZ",
  });

  return <Episode loading={loading} errors={errors} data={data} />;
}
