"use client";

import React from "react";

import Footer from "@/app/(frontend)/_components/footer";
import Header from "@/app/(frontend)/_components/header";

import RenderBlocks from "@/blocks/RenderBlocks";

export default function ContactPageClient() {
  return (
    <div>
      <Header />
      <RenderBlocks
        blocks={[
          {
            blockType: "pageTitle",
            layout: {
              title: "Contact Us",
              backgroundImage: "/images/contact-1.webp",
            },
            sectionOptions: {
              className: "tw-py-0",
            },
          },
          {
            blockType: "contactForm",
            layout: {
              variant: "variant-2",
            },
            sectionOptions: {
              innerContainer: true,
              className: "tw-bg-gradient-to-b tw-from-gray-100 tw-to-white",
            },
          },
        ]}
      />
      <Footer />
    </div>
  );
}
