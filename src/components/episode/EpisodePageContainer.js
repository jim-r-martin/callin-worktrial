import { useMemo } from "react";
import useLink from "../hooks/useLink";
import useQuery from "../hooks/useQuery";
import { READ_WEB_EPISODE } from "../../gql/queries";
import EpisodePage from "./EpisodePage";
import SkeletonPage from "../shared/SkeletonPage";
import ErrorPage from "../error/ErrorPage";
import PageNotFound from "../page-not-found/PageNotFound";
import { getEpisodeAndSuccess } from "../../helpers/dataDesctructuring";

export default function EpisodePageContainer() {
  const link = useLink();
  const { loading, errors, data } = useQuery(READ_WEB_EPISODE, {
    link,
  });

  const {
    episode,
    success,
    errors: gqlErrors,
  } = useMemo(() => getEpisodeAndSuccess(data), [data]);

  if (loading) {
    return <SkeletonPage headerText="Episode Preview" />;
  }

  if (!episode && success) {
    return <PageNotFound />;
  }

  if (errors || gqlErrors) {
    return <ErrorPage />;
  }

  return <EpisodePage errors={errors} episode={episode} />;
}
