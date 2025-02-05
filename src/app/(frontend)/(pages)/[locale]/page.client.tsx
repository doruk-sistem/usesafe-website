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

export default function PageClient() {
  return (
    <div>
      <Header />
      <div>deneme</div>
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
                "Usesafe is backed by Doruksistem, a trusted consultancy firm. The project ensures that products on online shopping platforms like are safe and compliant with regulations. Usesafe stands out by rigorously verifying product quality and safety. The core values are trust, transparency, and consumer protection. This site offers detailed information about the Usesafe certification process and its benefits for both consumers and sellers.",
              image: {
                src: "/images/safe_sopping_doruksistem_usesafe_3.webp",
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
              title: "Join the community of trusted brands",
              description:
                "Join the community of trusted brands and gain consumer confidence by certifying your products with UseSafe. Usesafe certification ensures that your products meet the highest safety and regulatory standards, giving your customers peace of mind.",
              image: {
                src: "/images/safe_sopping_doruksistem_usesafe.webp",
                alt: "Demo Finance 01",
                width: 580,
                height: 684,
                imgClassName: "tw-rounded-lg",
              },
              imagePosition: "right",
              contentFooter: (
                <div>
                  <div className="tw-flex tw-items-center tw-gap-10">
                    <Counter
                      value={2}
                      suffix="M"
                      description="Certified Products"
                    />
                    <Counter
                      value={3}
                      suffix="K"
                      description="Certified Partner"
                    />
                  </div>
                  <ButtonSwitchAnimation
                    size="lg"
                    uppercase
                    icon={<HiArrowNarrowRight />}
                  >
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
              alt: "Demo Finance 01",
              imgClassName: "tw-w-full tw-object-contain",
              className: "tw-w-full tw-flex tw-justify-center",
              width: 1000,
              height: 1000,
            },
            sectionOptions: {
              innerContainer: true,
              title: "Digital Product Passport",
              description:
                "Digital Product Passports for textiles are live today with global fashion brands. Our DPPs meet traceability requirements for France’s Anti-Waste Law (AGEC) and help brands be prepared for imminent Digital Product Passport rules for textiles.",
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
                {
                  description: "Employees",
                  value: 25,
                },
                {
                  description: "Core Teams",
                  value: 5,
                },
                {
                  description: "Expected Partners Worldwide",
                  value: 1500,
                },
                {
                  description: "Expected Certified Products",
                  value: 15,
                },
              ],
            },
            sectionOptions: {
              title: "New innovative steps forward",
              innerContainer: true,
            },
          },
          {
            blockType: "accordion",
            layout: {
              title:
                "A Different Approach, Using a New Method of Trusted Shopping",
              description:
                "Usesafe certification ensures that your products meet the highest safety, quality, and regulatory standards, building trust with consumers and enhancing your brand's reputation.",
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
