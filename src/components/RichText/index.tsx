import React from "react";

import { cn } from "@/utils/cn";

import { serializeLexical } from "./serialize";

type Props = {
  className?: string
  content: Record<string, unknown>
  enableGutter?: boolean
  enableProse?: boolean
}

const RichText: React.FC<Props> = ({
  className,
  content,
  enableGutter = true,
  enableProse = true,
}) => {
  if (!content) {
    return null;
  }

  return (
    <div
      className={cn(
        {
          "container ": enableGutter,
          "max-w-none": !enableGutter,
          "mx-auto prose dark:prose-invert ": enableProse,
        },
        className,
      )}
    >
      {content &&
        !Array.isArray(content) &&
        typeof content === "object" &&
        "root" in content &&
        (content.root as any)?.children &&
        serializeLexical({ nodes: (content.root as any).children })}
    </div>
  );
};

export default RichText;
