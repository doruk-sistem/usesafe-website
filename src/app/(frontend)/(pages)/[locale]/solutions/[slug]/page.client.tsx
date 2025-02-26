"use client";

import Image from "next/image";
import React from "react";

import NewsletterBlock from "@/blocks/newsletter-block";
import { PageTitleBlock } from "@/blocks/page-title-block/Component";
import Footer from "@/frontend/_components/footer";
import Header from "@/frontend/_components/header";
import { Media, Solution } from "@/payload-types";
import { MediaBlock } from "@/blocks/media-block/Component";
import { useParams } from "next/navigation";
import { Button } from "@/app/(frontend)/_components/button";
interface PageClientProps {
  solution: Solution;
}

interface PayloadMedia extends Media {
  url: string;
}

type Block = {
  blockType: "pageTitle" | "contentWithImage" | "backgroundVideo" | "newsletter" | "mediaBlock";
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

  mediaItems?: Array<{
    image: number | Media;
    title?: string;
    description?: string;
    link?: string;
    mediaWidth?: "full" | "auto";
    buttonText?: string;
    buttonLink?: string;
  }>;
  sectionOptions?: {
    className?: string;
    innerContainer?: boolean;
    sectionId?: string;
    description?: string;
    footerContent?: React.ReactNode;
    buttonText?: string;
  };
};

export default function PageClient({ solution }: PageClientProps) {
  const params = useParams();
  if (!solution) {
    return <div>Solution not found</div>;
  }

  const renderBlock = (block: Block) => {
    const sectionClass = block.sectionOptions?.className || "";
    const containerClass = block.sectionOptions?.innerContainer ? "tw-container tw-mx-auto" : "";

    return (
      <div
        id={block.sectionOptions?.sectionId}
        className={`tw-py-20 ${sectionClass}`}
      >
        <div className={containerClass}>
          {(() => {
            switch (block.blockType) {
              case "pageTitle":
                return (
                  <div className="tw--mt-[80px]" style={{ marginBottom: '-1px' }}> 
                    <div className="tw-relative">
                      <PageTitleBlock
                        title={block.title || ""}
                        topTitle={block.topTitle}
                        backgroundImage={(block.backgroundImage as Media)?.url || ""}
                        downSectionId={block.downSectionId}
                      />
                      <style jsx global>{`
                        .page-title-overlay {
                          opacity: 0.3 !important; /* Overlay opacity'sini azaltıyoruz */
                        }
                      `}</style>
                    </div>
                  </div>
                );

                case "mediaBlock":
  const mediaItem = block.mediaItems?.[0];
  const buttonText = block.sectionOptions?.buttonText;
  
  return (
    <div className="tw-container tw-mx-auto">
      <div className="tw-max-w-4xl tw-mx-auto">
        {mediaItem?.title && (
          <h2 className="tw-text-3xl tw-font-bold tw-mb-16 tw-text-center tw-text-black">
            {mediaItem.title}
          </h2>
        )}
        {mediaItem?.description && (
          <p className="tw-text-gray-600 tw-mb-16 tw-text-center">
            {mediaItem.description}
          </p>
        )}
        <MediaBlock 
          media={mediaItem?.image}
          mediaWidth="auto"
          blockType={block.blockType}
        />
        <div className="tw-text-center tw-mt-8">
          <Button
            variant="default"
            size="default"
            onClick={() => window.location.href = mediaItem?.link || '/contact'}
          >
            {buttonText || 'İletişime Geç'}
          </Button>
        </div>
      </div>
    </div>
  );
                case "contentWithImage":
  return (
    <div className="row tw-items-center tw-justify-center tw-space-y-10 tw-space-x-10">
      {block.imagePosition === "left" ? (
        <>
          <div 
            className="col-lg-6 position-relative"
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-offset="200"
          >
            <div className="tw-flex tw-justify-center tw-w-full">
              <div className="tw-overflow-hidden tw-rounded-2xl tw-shadow-xl hover:tw-shadow-2xl tw-transition-all tw-duration-300 tw-w-full">
                <div className="tw-relative tw-w-full tw-pb-[66.67%]"> {/* 3:2 aspect ratio */}
                  <Image
                    src={(block.image?.src as Media)?.url || ""}
                    alt={block.image?.alt || ""}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="tw-absolute tw-inset-0 tw-w-full tw-h-full tw-object-cover tw-transform hover:tw-scale-105 tw-transition-transform tw-duration-700"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
          <div 
            className="col-lg-5 col-md-9 text-center text-lg-start"
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-offset="200"
          >
            {block.title && (
              <h1 className="alt-font fw-600 text-dark-gray ls-minus-1px">
                {block.title}
              </h1>
            )}
            {block.description && <p className="w-95 md-w-100">{block.description}</p>}
            {block.contentFooter && (
              <div className="tw-mt-6">
                {block.contentFooter}
              </div>
            )}
          </div>
        </>
      ) : (
        <>
          <div 
            className="col-lg-5 col-md-9 text-center text-lg-start"
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-offset="200"
          >
            {block.title && (
              <h1 className="alt-font fw-600 text-dark-gray ls-minus-1px">
                {block.title}
              </h1>
            )}
            {block.description && <p className="w-95 md-w-100">{block.description}</p>}
            {block.contentFooter && (
              <div className="tw-mt-6">
                {block.contentFooter}
              </div>
            )}
          </div>
          <div 
            className="col-lg-6 position-relative"
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-offset="200"
          >
            <div className="tw-flex tw-justify-center tw-w-full">
              <div className="tw-overflow-hidden tw-rounded-2xl tw-shadow-xl hover:tw-shadow-2xl tw-transition-all tw-duration-300 tw-w-full">
                <div className="tw-relative tw-w-full tw-pb-[66.67%]"> {/* 3:2 aspect ratio */}
                  <Image
                    src={(block.image?.src as Media)?.url || ""}
                    alt={block.image?.alt || ""}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="tw-absolute tw-inset-0 tw-w-full tw-h-full tw-object-cover tw-transform hover:tw-scale-105 tw-transition-transform tw-duration-700"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
  case "backgroundVideo":
    return (
      <div className="tw-relative tw-w-full tw-h-screen">
        {block.video?.src && (
          <video
            className="tw-absolute tw-inset-0 tw-w-full tw-h-full tw-object-cover"
            autoPlay
            muted
            loop
            playsInline
            poster={(block.video.poster as PayloadMedia)?.url || ""}
          >
            <source src={block.video.src} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}
        <div className="tw-absolute tw-inset-0 tw-bg-black/50">
          <div className="tw-container tw-mx-auto tw-h-full tw-flex tw-items-center tw-justify-center tw-text-center">
            {block.title && (
              <div className="tw-text-white">
                <h3 className="tw-text-4xl md:tw-text-5xl tw-font-bold tw-mb-4">
                  {block.title}
                </h3>
                {block.description && (
                  <p className="tw-text-xl md:tw-text-2xl tw-text-white/80">
                    {block.description}
                  </p>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    );
              case "newsletter":
                return (
                  <div>
                    <NewsletterBlock />
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
