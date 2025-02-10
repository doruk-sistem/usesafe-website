"use client";

import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

import { clients } from "@/constants/clients";


import { Button } from "@/frontend/_components/button";
import Header from "@/frontend/_components/header";
import Footer from "@/frontend/_components/footer";
import ButtonSwitchAnimation from "@/frontend/_components/button-switch-animation";

import RenderBlocks from "@/blocks/RenderBlocks";
import Counter from "../../_components/counter";
import { ClientsBlock } from "@/blocks/clients-block/Component";
import Referance from "@/frontend/_components/Referance/Referance";

export default function PageClient() {
  return (
    <div>
      <Header />
      

      <RenderBlocks
        blocks={[
          {
            blockType: "slider",
            layout: undefined,
            sectionOptions: {
              footerContent: (
                <ClientsBlock
                  clients={clients}
                  type="slick"
                  gradientColor="transparent"
                />
              ),
              innerContainer: true,
              className:
                "tw-py-5 tw-bg-[url('/images/background-16-9-1.png')] tw-bg-cover tw-bg-center",
            },
          },
          {
            blockType: "contentWithImage",
            layout: {
              title: "We’re Here to Revolutionize the World of SAFE Products",
              description:
                "Usesafe is backed by Doruksistem, a trusted consultancy firm. Usesafe ensures product safety and compliance with regulations.",
              image: {
                src: "/images/safe_sopping_doruksistem_usesafe_3.webp",
                alt: "Safe Shopping",
                width: 800,
                height: 500,
                imgClassName: "tw-rounded-lg",
              },
              contentFooter: (
                <ButtonSwitchAnimation size="lg" uppercase icon={<HiArrowNarrowRight />}>
                  Join Us
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
              title: "Join the Community of Trusted Brands",
              description:
                "Join the community and gain consumer confidence with UseSafe certification, ensuring your products meet the highest safety standards.",
              image: {
                src: "/images/safe_sopping_doruksistem_usesafe.webp",
                alt: "Trusted Brands",
                width: 1200,
                height: 800,
                imgClassName: "tw-rounded-lg",
              },
              imagePosition: "right",
              contentFooter: (
                <div className="tw-flex tw-items-center tw-gap-10">
                  <Counter value={2} suffix="M" description="Certified Products" />
                  <Counter value={3} suffix="K" description="Certified Partners" />
                  <ButtonSwitchAnimation size="lg" uppercase icon={<HiArrowNarrowRight />}>
                    Learn More
                  </ButtonSwitchAnimation>
                </div>
              ),
            },
            sectionOptions: {
              innerContainer: true,
            },
          },
          {
            blockType: "media",
            layout: {
              src: "/crafto/images/app-demo.webp",
              alt: "Digital Product Passport",
              width: 1400,
              height: 900,
              imgClassName: "tw-w-full tw-object-contain",
              className: "tw-w-full tw-flex tw-justify-center",
            },
            sectionOptions: {
              innerContainer: true,
              title: "Digital Product Passport",
              description:
                "Our DPPs meet traceability requirements for France’s Anti-Waste Law (AGEC) and help brands comply with new regulations.",
              footerContent: (
                <div className="tw-flex tw-justify-center tw-items-center">
                  <Button>Try Free for 30 Days</Button>
                </div>
              ),
              className: "tw-bg-gradient-to-b tw-from-gray-100 tw-to-white",
            },
          },
          {
            blockType: "counter",
            layout: {
              items: [
                { description: "Employees", value: 25 },
                { description: "Core Teams", value: 5 },
                { description: "Expected Partners Worldwide", value: 1500 },
                { description: "Expected Certified Products", value: 15 },
              ],
            },
            sectionOptions: {
              title: "New Innovative Steps Forward",
              innerContainer: true,
            },
          },
          {
            blockType: "accordion",
            layout: {
              title: "A Different Approach to Trusted Shopping",
              description:
                "Usesafe certification ensures that your products meet the highest safety and quality standards, building trust with consumers.",
            },
            sectionOptions: {
              title: "Why Usesafe?",
              innerContainer: true,
            },
          },
        ]}
      />
      <Footer />
    </div>
  );
}
