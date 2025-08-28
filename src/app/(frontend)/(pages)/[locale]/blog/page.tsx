"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import React from "react";

export default function BlogPage() {
  const { locale } = useParams();

  return (
    <div className="tw-bg-gray-50">
      {/* Hero Banner Section */}
      <div className="tw-relative tw-h-[500px] md:tw-h-[600px] tw-overflow-hidden">
        <Image
          src="/images/banner.png"
          alt="Blog Banner"
          fill
          className="tw-object-cover tw-filter tw-brightness-60"
          priority
        />
        {/* Gradient overlay for better text readability */}
        <div className="tw-absolute tw-inset-0 tw-bg-gradient-to-r tw-from-black/60 tw-via-black/40 tw-to-black/60"></div>

        {/* Animated background elements */}
        <div className="tw-absolute tw-inset-0 tw-overflow-hidden">
          <div className="tw-absolute tw-top-1/4 tw-left-1/4 tw-w-64 tw-h-64 tw-rounded-full tw-bg-blue-500/20 tw-blur-3xl tw-animate-pulse"></div>
          <div className="tw-absolute tw-bottom-1/3 tw-right-1/3 tw-w-96 tw-h-96 tw-rounded-full tw-bg-purple-500/20 tw-blur-3xl tw-animate-pulse tw-animation-delay-1000"></div>
        </div>

        <div className="tw-absolute tw-inset-0 tw-flex tw-items-center tw-justify-center">
          <div className="tw-text-center tw-text-white tw-z-10">
            <h1 className="tw-text-4xl md:tw-text-6xl lg:tw-text-7xl tw-font-bold tw-mb-6 tw-leading-tight">
              {locale === "tr" ? "Blog Yazıları" : "Blog"}
            </h1>
            <div className="tw-mt-16 tw-flex tw-flex-col tw-items-center tw-animate-pulse">
              <div className="tw-text-white/80 tw-text-lg tw-mb-6 tw-uppercase tw-tracking-wider tw-font-semibold">
                {locale === "tr" ? "Aşağı Kaydır" : "Scroll Down"}
              </div>
              <div className="tw-w-12 tw-h-20 tw-border-3 tw-border-white/60 tw-rounded-full tw-flex tw-justify-center tw-relative">
                <div className="tw-w-2 tw-h-6 tw-bg-white/90 tw-rounded-full tw-mt-4 tw-animate-bounce"></div>
              </div>
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
                <article className="tw-group tw-bg-white tw-rounded-2xl tw-shadow-lg tw-overflow-hidden hover:tw-shadow-2xl tw-transition-all tw-duration-500 tw-w-full tw-max-w-lg tw-transform hover:tw-scale-105">
                  <div className="tw-relative tw-h-64 tw-overflow-hidden">
                    <Image
                      src="/images/blockchain-16-9-1.webp"
                      alt="Turkey's New E-Commerce Product Safety Regulation"
                      fill
                      className="tw-object-cover tw-transition-transform tw-duration-500 group-hover:tw-scale-110"
                    />
                    {/* Category Badge */}
                    <div className="tw-absolute tw-top-4 tw-left-4">
                      <span className="tw-inline-flex tw-items-center tw-px-3 tw-py-1 tw-rounded-full tw-bg-blue-500/90 tw-backdrop-blur-sm tw-text-white tw-text-xs tw-font-semibold tw-uppercase tw-tracking-wide">
                        {locale === "tr" ? "Regülasyon" : "Regulation"}
                      </span>
                    </div>
                  </div>

                  <div className="tw-p-8">
                    <div className="tw-flex tw-items-center tw-mb-4 tw-text-sm tw-text-gray-500">
                      <span>March 8, 2025</span>
                    </div>

                    <Link href={`/${locale}/blog/turkey-ecommerce-regulation`}>
                      <h3 className="tw-text-2xl tw-font-bold tw-mb-4 tw-text-gray-900 tw-leading-tight group-hover:tw-text-blue-600 tw-transition-colors tw-duration-300 tw-cursor-pointer">
                        {locale === "tr"
                          ? "Türkiye'nin Yeni E-Ticaret Ürün Güvenliği Regülasyonu: Uluslararası Üreticiler İçin Rehber"
                          : "Turkey's New E-Commerce Product Safety Regulation: A Guide for International Manufacturers"
                        }
                      </h3>
                    </Link>

                    <p className="tw-text-gray-600 tw-mb-6 tw-line-clamp-3 tw-leading-relaxed tw-text-base">
                      {locale === "tr"
                        ? "Türkiye'de e-ticaret ürün güvenliği konusunda yeni regülasyonlar yürürlüğe girdi. Bu rehber, uluslararası üreticilerin bu regülasyonlara uyum sağlaması için gerekli adımları açıklıyor."
                        : "New regulations on e-commerce product safety have come into effect in Turkey. This guide explains the necessary steps for international manufacturers to comply with these regulations."
                      }
                    </p>

                    <Link href={`/${locale}/blog/turkey-ecommerce-regulation`} className="tw-inline-flex tw-items-center tw-text-blue-600 hover:tw-text-blue-700 tw-font-semibold tw-transition-colors tw-duration-300 group-hover:tw-translate-x-1">
                      {locale === "tr" ? "Devamını Oku" : "Read More"}
                      <svg className="tw-w-4 tw-h-4 tw-ml-2 tw-transition-transform tw-duration-300 group-hover:tw-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </article>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
