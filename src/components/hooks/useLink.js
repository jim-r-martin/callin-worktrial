import { useParams } from "react-router-dom";

export default function useLink() {
  let { slug } = useParams();
  const link = slug.split("-").slice(-1)[0];
  return { link };
}
