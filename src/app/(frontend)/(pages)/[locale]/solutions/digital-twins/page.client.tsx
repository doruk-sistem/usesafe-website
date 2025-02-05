"use client";

import React from "react";
import { BsShieldCheck, BsBoxSeam, BsQrCode } from "react-icons/bs";

import Header from "@/frontend/_components/header";
import Footer from "@/frontend/_components/footer";
import RenderBlocks from "@/blocks/RenderBlocks";

export default function DigitalTwinsPageClient() {
  return (
    <div>
      <Header />
      <RenderBlocks
        blocks={[
          {
            blockType: "pageTitle",
            layout: {
              title: "Digital Twins",
              backgroundImage: "/images/blockchain-16-9-1.webp",
              downSectionId: "discover",
            },
            sectionOptions: {
              className: "tw-p-0",
            },
          },
          {
            blockType: "contentWithImage",
            layout: {
              title: "Discover Digital Twin",
              description:
                "Digital Twins are virtual replicas of physical products that enhance the understanding and interaction with various items across multiple industries. They provide detailed and engaging experiences. Digital Twins ensure compliance and offer robust protection against counterfeiting.",
              image: {
                src: "/images/blockchain-16-9-2.webp",
                alt: "Digital Twin Technology",
                width: 580,
                height: 684,
                imgClassName: "tw-rounded-lg tw-w-full",
              },
              contentFooter: (
                <div className="tw-flex tw-flex-col tw-mt-8 tw-space-y-4">
                  <div className="tw-flex tw-flex-col tw-gap-2">
                    <div>
                      <h3 className="tw-text-left tw-font-medium tw-mb-0 tw-text-2xl tw-text-black">
                        <BsBoxSeam className="tw-w-8 tw-h-8 tw-text-primary tw-mr-4" />
                        Virtual Experience
                      </h3>
                    </div>

                    <p className="tw-text-left tw-text-base tw-text-gray-600">
                      Detailed and immersive virtual experience for customers
                    </p>
                  </div>
                  <div className="tw-flex tw-flex-col tw-gap-2">
                    <div>
                      <h3 className="tw-text-left tw-font-medium tw-mb-0 tw-text-2xl tw-text-black">
                        <BsQrCode className="tw-w-8 tw-h-8 tw-text-primary tw-mr-4" />
                        Traceability
                      </h3>
                    </div>

                    <p className="tw-text-left tw-text-base tw-text-gray-600">
                      Enhanced product authenticity and traceability
                    </p>
                  </div>
                  <div className="tw-flex tw-flex-col tw-gap-2">
                    <div>
                      <h3 className="tw-text-left tw-font-medium tw-mb-0 tw-text-2xl tw-text-black">
                        <BsShieldCheck className="tw-w-8 tw-h-8 tw-text-primary tw-mr-4" />
                        Protection
                      </h3>
                    </div>
                    <p className="tw-text-left tw-text-base tw-text-gray-600">
                      Protection against counterfeiting
                    </p>
                  </div>
                </div>
              ),
            },
            sectionOptions: {
              innerContainer: true,
              sectionId: "discover",
            },
          },
          {
            blockType: "contentWithImage",
            layout: {
              title: "Key Benefits",
              description:
                "Our Digital Twins solution provides comprehensive benefits that enhance your product experience and security:",
              image: {
                src: "/images/digital-twim-1-1-1.webp",
                width: 580,
                height: 684,
                imgClassName: "tw-rounded-lg tw-w-full",
              },
              imagePosition: "right",
              contentFooter: (
                <div className="tw-space-y-4 tw-mt-6">
                  <div className="tw-flex tw-items-center tw-gap-3">
                    <div className="tw-w-8 tw-h-8 tw-rounded-full tw-bg-primary/10 tw-flex tw-items-center tw-justify-center">
                      <BsBoxSeam className="tw-w-6 tw-h-6 tw-text-primary" />
                    </div>
                    <p className="tw-text-gray-700 tw-text-lg tw-mb-0">
                      Detailed and immersive virtual experience for customers
                    </p>
                  </div>
                  <div className="tw-flex tw-items-center tw-gap-3">
                    <div className="tw-w-8 tw-h-8 tw-rounded-full tw-bg-primary/10 tw-flex tw-items-center tw-justify-center">
                      <BsQrCode className="tw-w-6 tw-h-6 tw-text-primary" />
                    </div>
                    <p className="tw-text-gray-700 tw-text-lg tw-mb-0">
                      Enhanced product authenticity and traceability
                    </p>
                  </div>
                  <div className="tw-flex tw-items-center tw-gap-3">
                    <div className="tw-w-8 tw-h-8 tw-rounded-full tw-bg-primary/10 tw-flex tw-items-center tw-justify-center">
                      <BsShieldCheck className="tw-w-6 tw-h-6 tw-text-primary" />
                    </div>
                    <p className="tw-text-gray-700 tw-text-lg tw-mb-0">
                      Protection against counterfeiting
                    </p>
                  </div>
                </div>
              ),
            },
            sectionOptions: {
              innerContainer: true,
              className: "tw-bg-gray-50",
            },
          },
        ]}
      />
      <Footer />
    </div>
  );
}
