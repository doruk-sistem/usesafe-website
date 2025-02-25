"use client";

import Image from "next/image";
import React from "react";

import NewsletterBlock from "@/blocks/newsletter-block";
import { PageTitleBlock } from "@/blocks/page-title-block/Component";
import { PricingBlock } from "@/blocks/pricing-block";
import Footer from "@/frontend/_components/footer";
import Header from "@/frontend/_components/header";
import { Media, Solution } from "@/payload-types";

interface PageClientProps {
  solution: Solution;
}

interface PayloadMedia extends Media {
  url: string;
}

type Block = {
  blockType: "pageTitle" | "contentWithImage" | "backgroundVideo" | "newsletter" | "pricing" | "clients";
  title?: string;
  topTitle?: string;
  backgroundImage?: string | Media;
  downSectionId?: string;
  image?: {
    src?: number | Media;
    alt?: string;
    width?: number;
    height?: number;
    imgClassName?: string;
  };
  imagePosition?: "left" | "right";
  description?: string;
  contentFooter?: React.ReactNode;
  video?: {
    src?: string;
    poster?: number | Media;
  };
  clients?: Array<{
    name: string;
    logo: string;
  }>;
  sectionOptions?: {
    className?: string;
    innerContainer?: boolean;
    sectionId?: string;
    description?: string;
    footerContent?: React.ReactNode;
  };
};

export default function PageClient({ solution }: PageClientProps) {
  if (!solution) {
    return <div>Solution not found</div>;
  }

  const renderBlock = (block: Block) => {
    const sectionClass = block.sectionOptions?.className || "";
    const containerClass = block.sectionOptions?.innerContainer ? "tw-container tw-mx-auto" : "";

    return (
      <div
        id={block.sectionOptions?.sectionId}
        className={`tw-py-16 ${sectionClass}`}
      >
        <div className={containerClass}>
          {(() => {
            switch (block.blockType) {
              case "pageTitle":
                return (
                  <PageTitleBlock
                    title={block.title || ""}
                    topTitle={block.topTitle}
                    backgroundImage={(block.backgroundImage as PayloadMedia)?.url}
                    downSectionId={block.downSectionId}
                  />
                );

              case "contentWithImage":
                return (
                  <div className={`tw-flex tw-flex-col md:tw-flex-row tw-gap-8 tw-items-center ${
                    block.imagePosition === "right" ? "md:tw-flex-row-reverse" : ""
                  }`}>
                    {block.image?.src && (
                      <div className="tw-w-full md:tw-w-1/2">
                        <Image
                          src={(block.image.src as PayloadMedia)?.url || ""}
                          alt={block.image.alt || ""}
                          width={block.image.width || 800}
                          height={block.image.height || 600}
                          className={`tw-rounded-lg tw-shadow-lg tw-w-full ${
                            block.image.imgClassName || ""
                          }`}
                        />
                      </div>
                    )}
                    <div className="tw-w-full md:tw-w-1/2">
                      <h3 className="tw-text-2xl tw-font-semibold tw-mb-4">
                        {block.title}
                      </h3>
                      <p className="tw-text-gray-600">
                        {block.description}
                      </p>
                      {block.contentFooter && (
                        <div className="tw-mt-6">
                          {block.contentFooter}
                        </div>
                      )}
                    </div>
                  </div>
                );

              case "backgroundVideo":
                return (
                  <div className="tw-relative tw-rounded-xl tw-overflow-hidden tw-shadow-lg">
                    {block.video?.src && (
                      <video
                        className="tw-w-full"
                        controls
                        poster={(block.video.poster as PayloadMedia)?.url || ""}
                        playsInline
                      >
                        <source src={block.video.src} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    )}
                    {block.title && (
                      <div className="tw-mt-4">
                        <h3 className="tw-text-2xl tw-font-semibold tw-mb-2">
                          {block.title}
                        </h3>
                        {block.description && (
                          <p className="tw-text-gray-600">
                            {block.description}
                          </p>
                        )}
                      </div>
                    )}
                  </div>
                );

              case "newsletter":
                return (
                  <div className="tw-bg-gray-50 tw-p-8 tw-rounded-xl tw-shadow-md">
                    <NewsletterBlock />
                  </div>
                );

              case "pricing":
                return (
                  <div id={block.sectionOptions?.sectionId}>
                    <PricingBlock />
                  </div>
                );

              case "clients":
                return (
                  <div className="tw-text-center">
                    {block.sectionOptions?.description && (
                      <p className="tw-text-gray-600 tw-mb-8">
                        {block.sectionOptions.description}
                      </p>
                    )}
                    <div className="tw-grid tw-grid-cols-2 md:tw-grid-cols-4 lg:tw-grid-cols-6 tw-gap-8">
                      {block.clients?.map((client, idx) => (
                        <div key={idx} className="tw-flex tw-items-center tw-justify-center">
                          <Image
                            src={client.logo}
                            alt={client.name}
                            width={200}
                            height={100}
                            className="tw-max-h-12 tw-w-auto"
                          />
                        </div>
                      ))}
                    </div>
                    {block.sectionOptions?.footerContent}
                  </div>
                );

              default:
                return null;
            }
          })()}
        </div>
      </div>
    );
  };

  return (
    <div>
      <Header />
      <div className="tw-min-h-screen">
        {solution.layout?.map((block, index) => (
          <React.Fragment key={index}>
            {renderBlock(block as Block)}
          </React.Fragment>
        ))}
      </div>
      <Footer />
    </div>
  );
}
