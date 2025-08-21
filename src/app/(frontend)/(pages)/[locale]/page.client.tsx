"use client";

import React from "react";

import NewsletterBlock from "@/blocks/newsletter-block";
import RenderBlocks from "@/blocks/RenderBlocks";
import { Config } from "@/payload-types";

interface PageClientProps {
  layout: Config["globals"]["homepage"]["layout"];
}

export default function PageClient({ layout }: PageClientProps) {
  return (
    <div>
      <RenderBlocks blocks={layout as any} />
      <NewsletterBlock />
    </div>
  );
}
