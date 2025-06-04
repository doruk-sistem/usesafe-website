"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import React from "react";

import {
  LinkedInIcon,
  FacebookIcon,
  InstagramIcon,
  XIcon,
} from "@/assets/icons";
import Logo from "@/frontend/_components/logo";
interface Platform {
  name: "linkedin" | "facebook" | "instagram" | "twitter";
  url: string;
  isActive?: boolean | null;
  order?: number | null;
  id?: string | null;
}
interface CompanyLink {
  text: string;
  url: string;
  isActive?: boolean;
  order?: number;
  id?: string;
}

interface Address {
  country: string;
  street: string;
  city: string;
  maps: string;
  isActive?: boolean | null;
  order?: number | null;
  id?: string | null;
}

interface FooterProps {
  footerData?: {
    content: {
      [locale: string]: {
        copyright: string;
        company: {
          title: string;
          links: CompanyLink[];
        };
        legal: {
          title: string;
          terms: { text: string; link: string };
          privacy: { text: string; link: string };
        };
        social: {
          title: string;
          platforms?: Platform[] | null | undefined;
        };
        newsletter: {
          title: string;
          company: string;
          email: string;
          phone: string;
          addresses?: Address[] | null | undefined;
        };
      };
    };
  };
}

export default function Footer({ footerData }: FooterProps) {
  const params = useParams();
  const locale = params.locale as string;

  if (!footerData?.content || !footerData.content[locale]) {
    return null;
  }
  const content = footerData.content[locale];

  const socialIcons = {
    linkedin: LinkedInIcon,
    facebook: FacebookIcon,
    instagram: InstagramIcon,
    twitter: XIcon,
  } as const;

  return (
    <footer className="tw-bg-white tw-border-t tw-border-gray-10">
      <div className="container tw-py-8">
        <div className="row justify-content-between tw-gap-y-6">
          {/* Logo ve Copyright */}
          <div className="col-12 col-lg-3 order-sm-1">
            <Link
              href={`/${locale}`}
              className="tw-block tw-w-[120px] md:tw-w-[135px] lg:tw-w-[150px] tw-h-[120px] md:tw-h-[135px] lg:tw-h-[150px]"
            >
              <Logo className="!tw-w-[120px] !tw-h-[120px] md:!tw-w-[135px] md:!tw-h-[135px] lg:!tw-w-[150px] lg:!tw-h-[150px]" />
            </Link>
            <p className="tw-text-gray-600 tw-mt-4">{content.copyright}</p>
          </div>

          {/* Company Links */}
          <div className="col-6 col-lg-2 col-sm-4 order-sm-3">
            <h3 className="tw-text-xl tw-font-semibold tw-text-gray-900 tw-mb-6">
              {content.company.title}
            </h3>
            <ul className="tw-space-y-4">
              {content.company.links
                ?.filter((link) => link.isActive)
                .sort((a, b) => (a.order ?? 0) - (b.order ?? 0))
                .map((link) => (
                  <li key={link.id}>
                    <Link
                      href={`/${locale}${link.url}`}
                      className="tw-text-gray-600 hover:tw-text-gray-900 tw-transition-colors"
                    >
                      {link.text}
                    </Link>
                  </li>
                ))}
            </ul>
          </div>

       {/* Legal Links */}
<div className="col-6 col-lg-2 col-sm-4 order-sm-3">
  <h3 className="tw-text-xl tw-font-semibold tw-text-gray-900 tw-mb-6">
    {content.legal.title}
  </h3>
  <ul className="tw-space-y-4">
    <li>
      <Link
        href={`/${locale}${content.legal.terms.link || "#"}`}
        className="tw-text-gray-600 hover:tw-text-gray-900 tw-transition-colors"
      >
        {content.legal.terms.text}
      </Link>
    </li>
    <li>
      <Link
        href={`/${locale}${content.legal.privacy.link || "#"}`}
        className="tw-text-gray-600 hover:tw-text-gray-900 tw-transition-colors"
      >
        {content.legal.privacy.text}
      </Link>
    </li>
  </ul>
</div>

{/* Social Links */}
<div className="col-6 col-lg-2 col-sm-4 order-sm-4">
  <h3 className="tw-text-xl tw-font-semibold tw-text-gray-900 tw-mb-6">
    {content.social.title}
  </h3>
  <ul className="tw-space-y-4">
    {Array.isArray(content.social.platforms) && content.social.platforms.map((platform) => {
      const Icon = socialIcons[platform.name];
      return (
        <li key={platform.id || platform.name}>
          <a
            href={platform.url}
            target="_blank"
            rel="noopener noreferrer"
            className="tw-text-gray-600 hover:tw-text-gray-900 tw-transition-colors tw-flex tw-items-center tw-gap-2"
          >
            {Icon && <Icon className="tw-w-5 tw-h-5" />}
            {platform.name}
          </a>
        </li>
      );
    })}
  </ul>
</div>

          {/* Contact Info */}
          <div className="col-lg-3 col-sm-6 order-sm-5">
            <h3 className="tw-text-xl tw-font-semibold tw-text-gray-900 tw-mb-6">
              {content.newsletter.title}
            </h3>
            <div className="tw-space-y-4 tw-text-gray-600">
              <p>{content.newsletter.company}</p>
              <a
                href={`mailto:${content.newsletter.email}`}
                className="tw-block hover:tw-text-gray-900 tw-transition-colors"
              >
                {content.newsletter.email}
              </a>
              <a
                href={`tel:${content.newsletter.phone}`}
                className="tw-block hover:tw-text-gray-900 tw-transition-colors"
              >
                {content.newsletter.phone}
              </a>

              {content.newsletter.addresses?.map((address) => {
                return (
                  <a
                    key={address.country}
                    href={address.maps}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="tw-block tw-mt-6 hover:tw-text-gray-900 tw-transition-colors"
                  >
                    <p>{address.street}</p>
                    <p className="tw-mt-1">{address.city}</p>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
