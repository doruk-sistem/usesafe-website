"use client";

import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

import { Button } from "@/frontend/_components/button";
import Header from "@/frontend/_components/header";
import ClientsBlock from "@/frontend/_components/blocks/clients-block";
import ContentWithImageBlock from "@/frontend/_components/blocks/content-with-image-block";
import AccordionBlock from "@/frontend/_components/blocks/accordion-block";
import SliderBlock from "@/frontend/_components/blocks/slider-block";
import Footer from "@/frontend/_components/footer";
import PricingBlock from "@/frontend/_components/blocks/pricing-block";
import MediaBlock from "@/frontend/_components/blocks/media-block";

const clients = [
  {
    name: "Client 1",
    imageSrc: "/crafto/images/logo-logitech.svg",
  },
  {
    name: "Client 2",
    imageSrc: "/crafto/images/logo-amazon.svg",
  },
  {
    name: "Client 3",
    imageSrc: "/crafto/images/logo-jquery.svg",
  },
  {
    name: "Client 4",
    imageSrc: "/crafto/images/logo-slack.svg",
  },
  {
    name: "Client 5",
    imageSrc: "/crafto/images/logo-pingdom.svg",
  },
  {
    name: "Client 6",
    imageSrc: "/crafto/images/logo-monday.svg",
  },
  {
    name: "Client 7",
    imageSrc: "/crafto/images/logo-google.svg",
  },
  {
    name: "Client 8",
    imageSrc: "/crafto/images/logo-paypal.svg",
  },
  {
    name: "Client 9",
    imageSrc: "/crafto/images/logo-logitech.svg",
  },
  {
    name: "Client 10",
    imageSrc: "/crafto/images/logo-amazon.svg",
  },
  {
    name: "Client 11",
    imageSrc: "/crafto/images/logo-jquery.svg",
  },
  {
    name: "Client 12",
    imageSrc: "/crafto/images/logo-slack.svg",
  },
  {
    name: "Client 13",
    imageSrc: "/crafto/images/logo-pingdom.svg",
  },
  {
    name: "Client 14",
    imageSrc: "/crafto/images/logo-monday.svg",
  },
  {
    name: "Client 15",
    imageSrc: "/crafto/images/logo-google.svg",
  },
  {
    name: "Client 16",
    imageSrc: "/crafto/images/logo-paypal.svg",
  },
];

export default function PageClient() {
  return (
    <div>
      <Header />
      <SliderBlock />
      <ClientsBlock
        type="slick"
        clients={clients}
        footer={
          <div className="tw-flex tw-justify-center tw-items-center tw-py-0">
            <Button variant="outline" className="tw-rounded-full">
              Tüm Müşterileri İncele
              <HiArrowNarrowRight className="tw-ml-2" />
            </Button>
          </div>
        }
      />
      <ContentWithImageBlock
        title="Work with a DPP solution provider trusted by global textile brands"
        description="Scantrust Digital Product Passports for textiles are live today with global fashion brands. Our DPPs meet traceability requirements for France’s Anti-Waste Law (AGEC) and help brands be prepared for imminent Digital Product Passport rules for textiles. We combine a decade’s worth of QR code technology development and in-market compliance and standards expertise to make your Digital Product Passport project successful."
        buttonsComponent={
          <Button size="lg" uppercase>
            Bize Katıl
          </Button>
        }
        image={{
          src: "/crafto/images/demo-finance-01.jpg",
          alt: "Demo Finance 01",
          width: 580,
          height: 684,
        }}
      />
      <ContentWithImageBlock
        title="Work with a DPP solution provider trusted by global textile brands"
        description="Scantrust Digital Product Passports for textiles are live today with global fashion brands. Our DPPs meet traceability requirements for France’s Anti-Waste Law (AGEC) and help brands be prepared for imminent Digital Product Passport rules for textiles. We combine a decade’s worth of QR code technology development and in-market compliance and standards expertise to make your Digital Product Passport project successful."
        buttonsComponent={
          <Button size="lg" uppercase>
            Bize Katıl
          </Button>
        }
        image={{
          src: "/crafto/images/demo-finance-01.jpg",
          alt: "Demo Finance 01",
          width: 580,
          height: 684,
        }}
        imagePosition="right"
      />
      <MediaBlock
        title="Digital Product Passport"
        description="Digital Product Passports for textiles are live today with global fashion brands. Our DPPs meet traceability requirements for France’s Anti-Waste Law (AGEC) and help brands be prepared for imminent Digital Product Passport rules for textiles."
        imageSrc="/crafto/images/app-demo.webp"
        footer={
          <div className="tw-flex tw-justify-center tw-items-center">
            <Button>30 Gün Ücretsiz Deneyin</Button>
          </div>
        }
      />
      <AccordionBlock />
      <PricingBlock />
      <Footer />
    </div>
  );
}
