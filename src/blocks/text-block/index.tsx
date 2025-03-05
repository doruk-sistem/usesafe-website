import React from "react";
import RichText from "@/components/RichText";
import { TextBlockType } from "./types";

const TextBlock: React.FC<TextBlockType> = ({ content }) => {
  return (
    <div className="py-12">
      <div className="container mx-auto">
        <RichText 
          content={content} 
          enableGutter={false} 
          enableProse={true}
          className="text-lg max-w-3xl mx-auto" 
        />
      </div>
    </div>
  );
};

export default TextBlock;