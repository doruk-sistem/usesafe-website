import React from "react";

interface MediaType {
  url: string;
  alt?: string;
}

interface MediaProps {
  value: MediaType;
  alt?: string;
}

export const Upload: React.FC<MediaProps> = ({ value, alt }) => {
  if (!value?.url) return null;

  return (
    <div className="col-start-2 tw-my-8">
      <figure className="tw-relative tw-w-full">
        <img
          src={value.url}
          alt={value.alt || alt || "Image"}
          className="tw-w-full tw-h-auto tw-rounded-lg"
          loading="lazy"
        />
      </figure>
    </div>
  );
};

export default Upload;
