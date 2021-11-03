import useQuery from "./hooks/useQuery";
import useLink from "./hooks/useLink";
import { READ_WEB_SHOW } from "./queries";

export default function Show() {
  const link = useLink();
  const { loading, errors, data } = useQuery(READ_WEB_SHOW, {
    link: "phjmSjCNLM",
  });

  return <div>show</div>;
}
