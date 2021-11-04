import { useState } from "react";

export default function ImageFadeIn({ classes = "", alt = "", ...imgProps }) {
  const [hasLoaded, setHasLoaded] = useState(false);
  const baseClasses = "img-fade-in " + classes;
  return (
    <img
      alt={alt}
      onLoad={() => setHasLoaded(true)}
      className={hasLoaded ? `${baseClasses} loaded` : baseClasses}
      {...imgProps}
    />
  );
}
