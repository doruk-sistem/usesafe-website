"use client";

import React from "react";

import { PageTitle } from "@/app/(frontend)/_components/page-title";
import NewsletterBlock from "@/blocks/newsletter-block";
import RenderBlocks from "@/blocks/RenderBlocks";
import Footer from "@/frontend/_components/footer";
import { Media, Solution } from "@/payload-types";

interface SolutionProps {
  solution: Solution;
}

export default function PageClient({ solution }: SolutionProps) {
  return (
    <div>
      {/* <div className="tw-min-h-screen">
        {solution.layout?.map((block, index) => (
          <React.Fragment key={index}>
            {renderBlock(block as Block)}
          </React.Fragment>
        ))}
      </div> */}
      <PageTitle
        title={solution.title || ""}
        backgroundImage={
          (solution.backgroundImage as Media)?.url || ""
        }
      />
      <RenderBlocks blocks={solution.layout as any} />

      <NewsletterBlock />
      <Footer />
    </div>
  );
}
