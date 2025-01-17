"use client";

import React from "react";
import { useTranslations } from "next-intl";

import { Button } from "@/frontend/_components/button";
import Header from "@/frontend/_components/header";
import ClientsBlock from "@/frontend/_components/blocks/clients-block";
import ContentWithImageBlock from "@/frontend/_components/blocks/content-with-image-block";
import AccordionBlock from "@/frontend/_components/blocks/accordion-block";
import SliderBlock from "@/frontend/_components/blocks/slider-block";
import Footer from "@/frontend/_components/footer";
import PricingBlock from "@/frontend/_components/blocks/pricing-block";

export default function PageClient() {
  const t = useTranslations();

  return (
    <div>
      <Header />
      <SliderBlock />
      <ClientsBlock
        title={t("common.valuable_customers")}
        clients={[
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
        ]}
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
      <AccordionBlock />
      <PricingBlock />
      <Footer />
    </div>
  );
}
