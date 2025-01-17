import React from "react";
import Image from "next/image";

import Section from "../../section";

interface MediaBlockProps {
  title?: string;
  description?: string;
  imageSrc: string;
  header?: React.ReactNode;
  footer?: React.ReactNode;
}

export default function MediaBlock({
  title,
  description,
  imageSrc,
  header,
  footer,
}: MediaBlockProps) {
  return (
    <Section
      title={title}
      description={description}
      className="tw-bg-gradient-to-b tw-from-gray-100 tw-to-transparent"
      footer={footer}
    >
      {header}
      <div className="tw-flex tw-justify-center tw-items-center tw-py-0">
        <Image src={imageSrc} alt={""} width={1500} height={1000} />
      </div>
    </Section>
  );
}
