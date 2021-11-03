import { Helmet } from "react-helmet";

export default function MetaTitle({
  data = {},
  titlePropTarget = [],
  defaultTitle = "Callin",
}) {
  let target = data;
  // reverse order so we can use pop (instead of unshift) to incrementally get title value from data
  const revTitlePropTarget = titlePropTarget.slice().reverse();
  if (data) {
    // debugger;
  }
  while (target && revTitlePropTarget.length) {
    const key = revTitlePropTarget.pop();
    target = target[key];
  }

  return (
    <Helmet>
      <title>{typeof target === "string" ? target : defaultTitle}</title>
    </Helmet>
  );
}
