"use client";

import Link from "next/link";
import React, { ReactNode } from "react";
import { BsArrowRight } from "react-icons/bs";

type Source = { label: string; href: string };

interface BlogArticleProps {
  category: string;
  title: string;
  subtitle: string;
  date: string;
  readingTime: string;
  children: ReactNode;
  sources?: Source[];
  cta?: { title: string; text: string; href: string; button: string };
}

/** Shared layout for long-form blog posts. */
export default function BlogArticle({ category, title, subtitle, date, readingTime, children, sources, cta }: BlogArticleProps) {
  return (
    <article className="tw-bg-gray-50">
      <header className="tw-relative tw-overflow-hidden tw-bg-gradient-to-br tw-from-[#1e3c72] tw-via-[#2a5298] tw-to-[#6dd5ed] tw-px-4 tw-py-24 md:tw-py-32 tw-text-white">
        <div className="tw-mx-auto tw-max-w-4xl tw-text-center">
          <span className="tw-mb-6 tw-inline-block tw-rounded-full tw-border tw-border-white/30 tw-bg-white/20 tw-px-4 tw-py-1 tw-text-xs tw-font-semibold tw-uppercase tw-tracking-wider">
            {category}
          </span>
          <h1 className="tw-mb-6 tw-text-3xl sm:tw-text-4xl md:tw-text-5xl tw-font-bold tw-leading-tight !tw-text-white">{title}</h1>
          <p className="tw-mx-auto tw-max-w-3xl tw-text-lg md:tw-text-xl tw-text-white/90">{subtitle}</p>
          <p className="tw-mt-8 tw-text-sm tw-text-white/80">
            {date} · {readingTime}
          </p>
        </div>
      </header>

      <div className="tw-mx-auto tw-max-w-3xl tw-px-4 tw-py-12 md:tw-py-16">
        <div className="blog-article-body tw-rounded-2xl tw-bg-white tw-p-6 sm:tw-p-10 md:tw-p-12 tw-shadow-lg tw-text-gray-700 tw-text-base md:tw-text-lg tw-leading-relaxed [&_h2]:tw-mt-10 [&_h2]:tw-mb-4 [&_h2]:tw-text-2xl md:[&_h2]:tw-text-3xl [&_h2]:tw-font-bold [&_h2]:tw-text-gray-900 [&_h3]:tw-mt-8 [&_h3]:tw-mb-3 [&_h3]:tw-text-xl [&_h3]:tw-font-semibold [&_h3]:tw-text-gray-900 [&_p]:tw-mb-5 [&_ul]:tw-mb-6 [&_ul]:tw-pl-6 [&_ul>li]:!tw-list-disc [&_ol]:tw-mb-6 [&_ol]:tw-pl-6 [&_ol>li]:!tw-list-decimal [&_li]:tw-mb-2 [&_a]:tw-text-primary [&_a]:tw-underline [&_code]:tw-rounded [&_code]:tw-bg-gray-100 [&_code]:tw-px-1.5 [&_code]:tw-py-0.5 [&_code]:tw-text-sm [&_code]:tw-break-all">
          {children}
        </div>

        {cta && (
          <div className="tw-mt-10 tw-rounded-2xl tw-bg-gradient-to-r tw-from-[#185a9d] tw-to-[#43cea2] tw-p-8 md:tw-p-10 tw-text-white">
            <h2 className="tw-mb-3 tw-text-2xl tw-font-bold !tw-text-white">{cta.title}</h2>
            <p className="tw-mb-6 tw-text-white/90">{cta.text}</p>
            <Link
              href={cta.href}
              className="tw-inline-flex tw-items-center tw-gap-2 tw-rounded-lg tw-bg-white tw-px-6 tw-py-3 tw-font-semibold !tw-text-primary tw-shadow"
            >
              {cta.button} <BsArrowRight aria-hidden />
            </Link>
          </div>
        )}

        {sources && sources.length > 0 && (
          <div className="tw-mt-10 tw-rounded-2xl tw-border tw-border-gray-200 tw-bg-white tw-p-6 sm:tw-p-8">
            <h2 className="tw-mb-4 tw-text-lg tw-font-semibold tw-text-gray-900">Sources</h2>
            <ul className="tw-space-y-2 tw-text-sm">
              {sources.map((s) => (
                <li key={s.href}>
                  <a href={s.href} target="_blank" rel="noopener noreferrer" className="tw-text-primary tw-underline tw-break-words">
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
            <p className="tw-mt-4 tw-text-xs tw-text-gray-500">
              This article is for general information and does not constitute legal advice.
            </p>
          </div>
        )}
      </div>
    </article>
  );
}
