"use client";

import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

import { Button } from "@/frontend/_components/button";
import Header from "@/frontend/_components/header";
import Footer from "@/frontend/_components/footer";
import ButtonSwitchAnimation from "@/frontend/_components/button-switch-animation";

import RenderBlocks from "@/blocks/RenderBlocks";

import { clients } from "@/constants/clients";

export default function DigitalProductPasswordPageClient() {
  return (
    <div>
      <Header />
      <RenderBlocks
        blocks={[
          {
            blockType: "pageTitle",
            layout: {
              title: "Digital Product Passport",
              backgroundImage: "/images/product-security.webp",
            },
            sectionOptions: {
              className: "tw-p-0",
            },
          },
          {
            blockType: "clients",
            layout: {
              clients: clients,
              type: "slick",
            },
            sectionOptions: {
              description: "Trusted by Leading Brands Worldwide",
              footerContent: (
                <div className="tw-flex tw-justify-center tw-items-center tw-py-0">
                  <Button variant="outline" className="tw-rounded-full">
                    View All Clients
                    <HiArrowNarrowRight className="tw-ml-2" />
                  </Button>
                </div>
              ),
            },
          },
          {
            blockType: "backgroundVideo",
            layout: {
              title:
                "Digital product passport solutions to comply with EU regulations",
              description:
                "Work with an experienced Digital Product Passport solution provider and proven digital labeling tools.",
              video: {
                src: "/videos/product-security-network.mp4",
                poster: "/images/product-security.webp",
              },
            },
            sectionOptions: {
              className: "tw-p-0",
            },
          },
          {
            blockType: "contentWithImage",
            layout: {
              title:
                "Work with an experienced DPP solution provider trusted by global brands",
              description:
                "Scantrust has already deployed DPP solutions for global brands across textiles, batteries, food & beverage, and more. We combine a decade’s worth of QR code technology development and in-market compliance and standards expertise to make your Digital Product Passport project successful.",
              image: {
                src: "/images/remy-testimonial-u-label.webp",
                alt: "Demo Finance 01",
                width: 580,
                height: 684,
                imgClassName: "tw-rounded-lg",
              },
              contentFooter: (
                <ButtonSwitchAnimation
                  size="lg"
                  uppercase
                  icon={<HiArrowNarrowRight />}
                >
                  See select case studies
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
              title:
                "Know and prepare for the latest developments in DPP standards and regulations",
              description:
                "Scantrust is leading a lighthouse pilot in CIRPASS2, a European Commission-funded consortium piloting Digital Product Passports across textiles, electrical and electronic equipment, tyres, and construction materials. We ensure our clients have access to the latest guidance and are building for the rapidly evolving DPP standards.",
              image: {
                src: "/images/cirpass-logo.webp",
                width: 580,
                height: 684,
                imgClassName: "tw-rounded-lg",
              },
              imagePosition: "right",
            },
            sectionOptions: {
              innerContainer: true,
            },
          },
          {
            blockType: "contentWithImage",
            layout: {
              title:
                "Build with the best all-around QR management solution for products",
              description:
                "Our DPP solutions are built on top of proven enterprise-ready tools for QR code generation, URL management, and landing page and dynamic content management.",
              image: {
                src: "/images/visual-2a_forjitter-3.webp",
                alt: "Demo Finance 01",
                width: 580,
                height: 684,
                imgClassName: "tw-rounded-lg",
              },
              contentFooter: (
                <ButtonSwitchAnimation
                  size="lg"
                  uppercase
                  icon={<HiArrowNarrowRight />}
                >
                  See digital labeling solutions
                </ButtonSwitchAnimation>
              ),
            },
            sectionOptions: {
              innerContainer: true,
            },
          },
          {
            blockType: "pricing",
            layout: undefined,
            sectionOptions: {
              innerContainer: true,
              sectionId: "pricing",
            },
          },
        ]}
      />
      <Footer />
    </div>
  );
}
