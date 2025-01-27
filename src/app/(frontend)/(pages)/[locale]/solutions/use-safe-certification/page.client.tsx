"use client";

import React from "react";

import Header from "@/frontend/_components/header";
import Footer from "@/frontend/_components/footer";

import RenderBlocks from "@/blocks/RenderBlocks";

export default function UseSafeCertificationPageClient() {
  return (
    <div>
      <Header />
      <RenderBlocks
        blocks={[
          {
            blockType: "pageTitle",
            layout: {
              title: "Use Safe Certification",
              backgroundImage: "/images/products-1.webp",
            },
            sectionOptions: {
              className: "tw-p-0",
            },
          },
          {
            blockType: "contentWithImage",
            layout: {
              title: "The New Symbol of Trust in E-commerce: UseSafe",
              description:
                "UseSafe is your assurance of safety and quality in online shopping. Our certification guarantees that products meet stringent safety standards, providing peace of mind for consumers. From household items to electronics, each UseSafe-marked product has been rigorously tested and verified. Trust in our symbol means trust in the best. Enhance your shopping experience with UseSafe, the new benchmark for reliable and safe e-commerce. Choose products with the UseSafe logo for unparalleled confidence and quality.",
              image: {
                src: "/images/use-safe-products-2.webp",
                alt: "Demo Finance 01",
                width: 580,
                height: 684,
                imgClassName: "tw-rounded-lg",
              },
            },
            sectionOptions: {
              innerContainer: true,
            },
          },
          {
            blockType: "contentWithImage",
            layout: {
              title: "Confidence in Every Purchase",
              description:
                "With UseSafe, every purchase you make is backed by our rigorous safety and quality standards. Our certification process ensures that all products bearing the UseSafe logo meet the highest benchmarks for safety and reliability. Shop with peace of mind, knowing that every item has been thoroughly tested and approved. Whether it's electronics, household items, or personal care products, trust UseSafe to deliver the confidence and assurance you deserve in every purchase.",
              image: {
                src: "/images/use-safe-products-3.webp",
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
              title: "Seamless User Experience",
              description:
                "Discover the ultimate in user-friendly shopping with UseSafe logo products. Our platform ensures a smooth and effortless experience, making it easy to find and purchase items that meet the highest safety standards. Every product featuring the UseSafe logo has undergone rigorous testing and certification, providing you with unparalleled peace of mind. Enjoy a streamlined shopping journey, from browsing to checkout, knowing you are choosing safe and reliable products. Elevate your e-commerce experience with the confidence that comes from UseSafe.",
              image: {
                src: "/images/use-safe-products-4.webp",
                alt: "Demo Finance 01",
                width: 580,
                height: 684,
                imgClassName: "tw-rounded-lg",
              },
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
              sectionId: "request-demo",
            },
          },
        ]}
      />
      <Footer />
    </div>
  );
}
