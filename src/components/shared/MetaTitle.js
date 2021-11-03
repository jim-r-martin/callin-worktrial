import { Helmet } from "react-helmet";

export default function MetaTitle({ title }) {
  console.log(title);
  return (
    <Helmet>
      {/* {title && typeof title === "string" ? <title>{title}</title> : ""} */}
    </Helmet>
  );
}
