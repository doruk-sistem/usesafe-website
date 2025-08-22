"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import React from "react";

import { Button } from "@/app/(frontend)/_components/button";

export default function BlogPage() {
  const { locale } = useParams();

  return (
    <div className="tw-bg-gray-50">
      {/* Banner Section */}
      <div className="tw-relative tw-h-[600px] tw-md:h-[700px] tw-overflow-hidden">
        <Image
          src="/images/banner.png"
          alt="Blog Banner"
          fill
          className="tw-object-cover tw-filter tw-brightness-75"
          priority
        />
        {/* Dark overlay for better text readability */}
        <div className="tw-absolute tw-inset-0 tw-bg-opacity-30"></div>
        <div className="tw-absolute tw-inset-0 tw-flex tw-items-center tw-justify-center">
          <div className="tw-text-center tw-text-white">
            <h1 className="tw-text-5xl tw-md:text-6xl tw-font-bold tw-mb-12">
              {locale === "tr" ? "Blog Yazıları" : "Blogs - Business"}
            </h1>
            <div className="tw-text-4xl">
              ⌄
            </div>
          </div>
        </div>
      </div>

      <div className="tw-py-16">
        <div className="tw-container">
          <div className="tw-max-w-7xl tw-mx-auto">
            <div className="tw-bg-gray-50 tw-p-8">
              <h2 className="tw-text-4xl tw-font-bold tw-text-center tw-mb-12 tw-text-gray-900">
                {locale === "tr" ? "Blog Yazıları" : "Blog Posts"}
              </h2>

              {/* Blog Posts Grid */}
              <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 lg:tw-grid-cols-3 tw-gap-6 tw-justify-items-center">

                {/* Blog Post 1 */}
                <div className="tw-bg-white tw-rounded-lg tw-shadow-lg tw-overflow-hidden hover:tw-shadow-xl tw-transition-shadow tw-duration-300 tw-max-w-md">
                  <div className="tw-relative tw-h-48 tw-overflow-hidden">
                    <Image
                      src="/images/blockchain-16-9-1.webp"
                      alt="Turkey&apos;s New E-Commerce Product Safety Regulation"
                      fill
                      className="tw-object-cover"
                    />
                  </div>
                  <div className="tw-p-6">
                    <h3 className="tw-text-xl tw-font-semibold tw-mb-2 tw-text-gray-800">
                      Turkey&apos;s New E-Commerce Product Safety Regulation: A Guide for International Manufacturers
                    </h3>
                    <p className="tw-text-gray-600 tw-mb-4 tw-line-clamp-3">
                      New regulations on e-commerce product safety have come into effect in Turkey. This guide explains the necessary steps for international manufacturers to comply with these regulations.
                    </p>
                    <div className="tw-flex tw-justify-between tw-items-center">
                      <span className="tw-text-sm tw-text-gray-500">
                        March 8, 2025
                      </span>
                      <Link href={`/${locale}/blog/turkey-ecommerce-regulation`}>
                        <Button variant="default" size="sm">
                          Read More
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
