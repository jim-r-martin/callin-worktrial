import { useParams } from "react-router-dom";

const extractLink = (slug) => slug.split("-").slice(-1)[0];

export default function useLink() {
  let { slug } = useParams();
  const link = extractLink(slug);
  return link;
}
