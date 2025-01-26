"use client";

import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

import Header from "@/frontend/_components/header";
import Footer from "@/frontend/_components/footer";
import ButtonSwitchAnimation from "@/frontend/_components/button-switch-animation";

import RenderBlocks from "@/blocks/RenderBlocks";

export default function QRCodeAntiCounterfeitingPageClient() {
  return (
    <div>
      <Header />
      <RenderBlocks
        blocks={[
          {
            blockType: "pageTitle",
            layout: {
              title: "QR Code Anti-Counterfeiting",
              backgroundImage: "/images/mobil-product.webp",
            },
            sectionOptions: {
              className: "tw-p-0",
            },
          },
          {
            blockType: "contentWithImage",
            layout: {
              title:
                "The anti-counterfeit software solution for instant detection of fakes",
              description:
                "Anti counterfeit software that works with your existing process – no serialization needed.",
              image: {
                src: "/images/AC-Packaging_Top-right-hero-2x.webp",
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
                "Reveal counterfeit activity across products and markets in real-time",
              description:
                "Scantrust software let’s you know which of your products are being counterfeited, and where customers are buying those counterfeits – online and off. Intelligence gathered can be delivered to sales teams, marketing, and even law enforcement.",
              image: {
                src: "/images/Visual-2C.webp",
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
                "A solution that scales to millions of products without new equipment or process changes.",
              description:
                "More scalable and useful than holograms, NFC, and other physical solutions. No new labels needed or costly printing, packaging process changes. Serialization with digital printing not required.",
              image: {
                src: "/images/secure-qr-exxon.webp",
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
            blockType: "contactForm",
            layout: {
              variant: "variant-1",
            },
            sectionOptions: {
              className: "tw-bg-gray-100",
              innerContainer: true,
              sectionId: "request-demo",
            },
          },
        ]}
      />
      <Footer />
    </div>
  );
}
