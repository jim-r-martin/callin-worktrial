import useQuery from "../hooks/useQuery";
import useLink from "../hooks/useLink";
import { READ_WEB_SHOW } from "../../gql/queries";
import ShowPage from "./ShowPage";
import SkeletonPage from "../shared/SkeletonPage";
import ErrorPage from "../error/ErrorPage";
import PageNotFound from "../page-not-found/PageNotFound";
import { getShowAndSuccess } from "../../helpers/dataDesctructuring";
import { useMemo } from "react";

export default function ShowPageContainer() {
  const link = useLink();
  const { loading, errors, data } = useQuery(READ_WEB_SHOW, {
    link,
  });

  const {
    show,
    success,
    errors: gqlErrors,
  } = useMemo(() => getShowAndSuccess(data), [data]);

  if (loading) {
    return <SkeletonPage headerText="Show Preview" />;
  }

  if (!show && success) {
    return <PageNotFound />;
  }

  if (errors || gqlErrors) {
    return <ErrorPage />;
  }

  return <ShowPage errors={errors} show={show} />;
}
