import useQuery from "../hooks/useQuery";
import useLink from "../hooks/useLink";
import { READ_WEB_SHOW } from "../../gql/queries";
import Show from "./Show";
import PageNotFound from "../page/PageNotFound";
import { getShowAndSuccess } from "../../helpers/dataDesctructuring";
import { useMemo } from "react";

export default function ShowContainer() {
  const link = useLink();
  const { loading, errors, data } = useQuery(READ_WEB_SHOW, {
    link,
  });

  const { show, success } = useMemo(() => getShowAndSuccess(data), [data]);

  if (loading) {
    return <div>loading</div>;
  }

  if (!show && success) {
    return <PageNotFound />;
  }

  return <Show errors={errors} show={show} />;
}
