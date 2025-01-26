"use client";

import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

import { Button } from "@/frontend/_components/button";
import Header from "@/frontend/_components/header";
import Footer from "@/frontend/_components/footer";
import ButtonSwitchAnimation from "@/frontend/_components/button-switch-animation";
import RenderBlocks from "@/blocks/RenderBlocks";

export default function AboutDppPageClient() {
  return (
    <div>
      <Header />
      <RenderBlocks
        blocks={[
          {
            blockType: "contentWithImage",
            layout: {
              title: "Digital Product Passport (DPP)",
              description:
                "The Digital Product Passport is an innovative system designed to increase transparency along the value chain of products. It will become mandatory for almost all products sold in the EU from 2024, providing comprehensive information on the origin, materials, environmental impact and disposal recommendations.",
              image: {
                src: "/images/product-security-1-1.webp",
                alt: "Digital Product Passport",
                width: 580,
                height: 684,
                imgClassName: "tw-w-full tw-rounded-lg",
              },
              contentFooter: (
                <ButtonSwitchAnimation
                  size="lg"
                  uppercase
                  icon={<HiArrowNarrowRight />}
                >
                  More Information
                </ButtonSwitchAnimation>
              ),
            },
            sectionOptions: {
              innerContainer: true,
            },
          },
          {
            blockType: "contentWithImage",
            layout: {
              title: "The Core Components of DPP",
              description:
                "The DPP system includes unique product identifiers, compliance documents, and information about hazardous materials. User manuals, safety instructions, and product disposal guides are also important components of the system. These data improve supply chain management and regulatory compliance.",
              image: {
                src: "/images/touch-id-1-1.webp",
                alt: "DPP Components",
                width: 580,
                height: 684,
                imgClassName: "tw-w-full tw-rounded-lg",
              },
              imagePosition: "right",
            },
            sectionOptions: {
              innerContainer: true,
            },
          },
          {
            blockType: "counter",
            layout: {
              items: [
                {
                  description: "Material Efficiency",
                  value: 40,
                  suffix: "%",
                },
                {
                  description: "Waste Reduction",
                  value: 35,
                  suffix: "%",
                },
                {
                  description: "Carbon Footprint Reduction",
                  value: 25,
                  suffix: "%",
                },
              ],
            },
            sectionOptions: {
              title: "Benefits of DPP",
              innerContainer: true,
            },
          },
          {
            blockType: "media",
            layout: {
              src: "/images/shop-success-2-1.webp",
              alt: "DPP Implementation",
              imgClassName: "tw-object-contain tw-rounded-lg",
              className: "tw-w-full tw-flex tw-justify-center",
              width: 1000,
              height: 1000,
            },
            sectionOptions: {
              innerContainer: true,
              title: "How is DPP Implemented?",
              description:
                "The DPP system provides secure and transparent data sharing using blockchain technology and smart contracts. Easy access to product information is provided through QR codes or RFID tags.",
              footerContent: (
                <div className="tw-flex tw-justify-center tw-items-center">
                  <Button>Free Consultation</Button>
                </div>
              ),
              className: "tw-bg-gradient-to-b tw-from-gray-100 tw-to-white",
            },
          },
        ]}
      />
      <Footer />
    </div>
  );
}
