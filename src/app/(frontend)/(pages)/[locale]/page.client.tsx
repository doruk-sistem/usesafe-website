"use client";

import React from "react";

import NewsletterBlock from "@/blocks/newsletter-block";
import RenderBlocks from "@/blocks/RenderBlocks";
import Footer from "@/frontend/_components/footer";
import Header from "@/frontend/_components/header";
import { Config } from "@/payload-types";

interface PageClientProps {
  layout: Config["globals"]["homepage"]["layout"];
  footer?: any;
}

export default function PageClient({ layout, footer }: PageClientProps) {
  return (
    <div>
      <Header />
      <RenderBlocks blocks={layout as any} />
      <NewsletterBlock />
      <Footer footerData={footer} />
    </div>
  );
}
