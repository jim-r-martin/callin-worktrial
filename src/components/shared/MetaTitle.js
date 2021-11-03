import { Helmet } from "react-helmet-async";

export default function MetaTitle({ title }) {
  return (
    <Helmet>
      {title && typeof title === "string" ? <title>{title}</title> : ""}
    </Helmet>
  );
}
