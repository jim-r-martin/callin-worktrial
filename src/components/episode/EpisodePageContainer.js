import { useMemo } from "react";
import useLink from "../hooks/useLink";
import useQuery from "../hooks/useQuery";
import { READ_WEB_EPISODE } from "../../gql/queries";
import EpisodePage from "./EpisodePage";
import PageNotFound from "../page/PageNotFound";
import { getEpisodeAndSuccess } from "../../helpers/dataDesctructuring";

export default function EpisodePageContainer() {
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

  return <EpisodePage errors={errors} episode={episode} />;
}
