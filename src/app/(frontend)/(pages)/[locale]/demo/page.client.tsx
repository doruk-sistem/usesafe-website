"use client";

import Image from "next/image";
import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

import ButtonSwitchAnimation from "@/app/(frontend)/_components/button-switch-animation";
import Footer from "@/app/(frontend)/_components/footer";
import Header from "@/app/(frontend)/_components/header";

const products = [
  {
    title: "Digital Product Password",
    description: "Protect your products with unique encryption",
    href: "/solutions/digital-product-password#request-demo",
    image: "/images/product-security.webp",
  },
  {
    title: "QR Code Anti-Counterfeiting",
    description: "Anti-counterfeiting solution with QR code",
    href: "/solutions/qr-code-anti-counterfeiting#request-demo",
    image: "/images/mobil-product.webp",
  },
  {
    title: "Use Safe Certification",
    description: "Secure certification system",
    href: "/solutions/use-safe-certification#request-demo",
    image: "/images/products-1.webp",
  },
];

export default function DemoPageClient() {
  return (
    <div className="tw-min-h-screen tw-flex tw-flex-col">
      <Header />
      <main className="tw-flex-1 tw-container tw-mx-auto tw-px-4 tw-py-12">
        <h1 className="tw-text-3xl tw-font-bold tw-text-black tw-text-center tw-mb-12">
          Product Demos
        </h1>
        <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 lg:tw-grid-cols-3 tw-gap-8">
          {products.map((product, index) => (
            <a
              key={index}
              href={product.href}
              className="tw-block tw-group tw-h-full"
            >
              <div className="tw-bg-white tw-rounded-lg tw-shadow-lg tw-transition-all tw-duration-300 tw-border tw-border-gray-200 hover:tw-shadow-xl hover:tw-scale-[1.01] tw-overflow-hidden tw-h-full tw-flex tw-flex-col">
                <div className="tw-relative tw-w-full tw-h-48">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="tw-object-cover"
                  />
                </div>
                <div className="tw-p-6 tw-flex tw-flex-col tw-flex-1">
                  <h2 className="tw-text-xl tw-font-semibold tw-mb-3 tw-text-gray-800 group-hover:tw-text-primary">
                    {product.title}
                  </h2>
                  <p className="tw-text-gray-600 tw-flex-1">
                    {product.description}
                  </p>
                  <div className="tw-mt-4">
                    <ButtonSwitchAnimation icon={<HiArrowNarrowRight />}>
                      Request Demo
                    </ButtonSwitchAnimation>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
