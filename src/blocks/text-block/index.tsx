import React from "react";

import RichText from "@/components/RichText";

import { TextBlockType } from "./types";

const TextBlock: React.FC<TextBlockType> = ({ content }) => {
  return (
    <div className="tw-py-12">
      <div className="tw-container">
        <div className="tw-max-w-4xl tw-mx-auto">
          <RichText content={content} />
        </div>
      </div>
    </div>
  );
};

export default TextBlock;
