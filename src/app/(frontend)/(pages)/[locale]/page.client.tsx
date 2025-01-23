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
              innerContainer: true,
              className:
                "tw-bg-gradient-to-b tw-from-gray-200 tw-to-white tw-py-5",
            },
          },
          {
            blockType: "clients",
            layout: {
              clients: clients,
              type: "slick",
            },
            sectionOptions: {
              innerContainer: true,
              className: "tw-py-4",
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
