import { Helmet } from "react-helmet-async";

export default function DocHeaderTags({ title, description }) {
  return (
    <Helmet>
      {title && typeof title === "string" ? <title>{title}</title> : ""}
      {description && typeof description === "string" ? (
        <meta name="description" content={description} />
      ) : (
        ""
      )}
    </Helmet>
  );
}
