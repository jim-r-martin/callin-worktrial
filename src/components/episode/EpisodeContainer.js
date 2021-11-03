import { useMemo } from "react";
import useLink from "../hooks/useLink";
import useQuery from "../hooks/useQuery";
import { READ_WEB_EPISODE } from "../queries";
import Episode from "./Episode";
import PageNotFound from "../page/PageNotFound";
import { getEpisodeAndSuccess } from "../../helpers/dataDesctructuring";

export default function EpisodeContainer() {
  const link = useLink();
  const { loading, errors, data } = useQuery(READ_WEB_EPISODE, {
    link,
  });

  const { episode, success } = useMemo(
    () => getEpisodeAndSuccess(data),
    [data]
  );

  if (loading) {
    return <div>loading</div>;
  }

  if (!episode && success) {
    return <PageNotFound />;
  }

  return <Episode errors={errors} episode={episode} />;
}
