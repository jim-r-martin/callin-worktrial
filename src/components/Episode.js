import useLink from "./hooks/useLink";

export default function Episode() {
  const { link } = useLink();

  return <div>Episode Link: {link}</div>;
}
