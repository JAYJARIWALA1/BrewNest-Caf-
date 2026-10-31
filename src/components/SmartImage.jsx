import { useState } from "react";

// An <img> that shows a coffee-coloured placeholder if the photo fails to load,
// so visitors never see a broken-image icon.
export default function SmartImage({ src, alt, className = "", eager = false }) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return <div className={`${className} img-fallback`} role="img" aria-label={alt} />;
  }

  return (
    <img
      className={className}
      src={src}
      alt={alt}
      loading={eager ? "eager" : "lazy"}
      decoding="async"
      onError={() => setFailed(true)}
    />
  );
}
