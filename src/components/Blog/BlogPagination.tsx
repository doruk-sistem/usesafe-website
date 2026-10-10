"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import { getBlogPaginationItems } from "@/constants/blogPosts";

type BlogPaginationProps = {
  currentPage: number;
  totalPages: number;
};

function blogListHref(page: number): string {
  return page <= 1 ? "/blog" : `/blog?page=${page}`;
}

/** Global theme `a` rules strip button styling from Next.js Link; visuals live on inner spans. */
const linkWrap =
  "!tw-inline-flex !tw-items-center !tw-no-underline hover:!tw-no-underline !tw-text-inherit";

const navControl =
  "tw-inline-flex tw-h-11 tw-shrink-0 tw-items-center tw-justify-center tw-gap-2 tw-rounded-xl tw-border tw-border-gray-200 tw-bg-white tw-px-4 tw-text-sm tw-font-semibold tw-leading-none tw-text-gray-800 tw-shadow-sm tw-transition-all hover:tw-border-[#185a9d] hover:tw-text-[#185a9d] hover:tw-shadow-md";

const navControlDisabled =
  "tw-inline-flex tw-h-11 tw-shrink-0 tw-items-center tw-justify-center tw-gap-2 tw-rounded-xl tw-border tw-border-gray-200 tw-bg-gray-50 tw-px-4 tw-text-sm tw-font-semibold tw-leading-none tw-text-gray-400 tw-shadow-sm tw-cursor-not-allowed";

const pageLink =
  "tw-inline-flex tw-h-11 tw-min-w-11 tw-shrink-0 tw-items-center tw-justify-center tw-rounded-xl tw-border tw-border-gray-200 tw-bg-white tw-px-3 tw-text-sm tw-font-semibold tw-leading-none tw-text-gray-800 tw-shadow-sm tw-transition-all hover:tw-border-[#185a9d] hover:tw-text-[#185a9d] hover:tw-shadow-md";

const pageActive =
  "tw-inline-flex tw-h-11 tw-min-w-11 tw-shrink-0 tw-items-center tw-justify-center tw-rounded-xl tw-bg-gradient-to-r tw-from-[#185a9d] tw-to-[#2a5298] tw-px-3 tw-text-sm tw-font-bold tw-leading-none tw-text-white tw-shadow-md";

const pageEllipsis =
  "tw-inline-flex tw-h-11 tw-min-w-9 tw-shrink-0 tw-items-center tw-justify-center tw-px-1 tw-text-sm tw-font-semibold tw-leading-none tw-text-gray-400 tw-select-none";

export function BlogPagination({
  currentPage,
  totalPages,
}: BlogPaginationProps) {
  const t = useTranslations("blog.pagination");

  if (totalPages <= 1) {
    return null;
  }

  const pageItems = getBlogPaginationItems(currentPage, totalPages);
  const canGoPrev = currentPage > 1;
  const canGoNext = currentPage < totalPages;

  return (
    <div className="tw-mt-12 tw-flex tw-justify-center tw-px-2">
      <nav
        className="blog-pagination tw-inline-flex tw-max-w-full tw-flex-wrap tw-items-center tw-justify-center tw-gap-2 tw-rounded-2xl tw-border tw-border-gray-100 tw-bg-white tw-p-3 tw-shadow-lg"
        aria-label={t("aria_label")}
      >
        {canGoPrev ? (
          <Link
            href={blogListHref(currentPage - 1)}
            scroll={false}
            className={linkWrap}
          >
            <span className={navControl}>
              <FaChevronLeft className="tw-h-3 tw-w-3 tw-shrink-0" aria-hidden />
              <span className="tw-hidden sm:tw-inline">{t("previous")}</span>
            </span>
          </Link>
        ) : (
          <span className={navControlDisabled} aria-disabled="true">
            <FaChevronLeft className="tw-h-3 tw-w-3 tw-shrink-0" aria-hidden />
            <span className="tw-hidden sm:tw-inline">{t("previous")}</span>
          </span>
        )}

        <ul className="tw-m-0 tw-flex tw-list-none tw-flex-wrap tw-items-center tw-justify-center tw-gap-1.5 tw-p-0 tw-px-1">
          {pageItems.map((item, index) => {
            if (item === "ellipsis") {
              return (
                <li key={`ellipsis-${index}`} className="tw-flex tw-items-center">
                  <span className={pageEllipsis} aria-hidden="true">…</span>
                </li>
              );
            }

            const page = item;
            const isActive = page === currentPage;
            return (
              <li key={page} className="tw-flex tw-items-center">
                {isActive ? (
                  <span className={pageActive} aria-current="page">
                    {page}
                  </span>
                ) : (
                  <Link href={blogListHref(page)} scroll={false} className={linkWrap}>
                    <span className={pageLink}>{page}</span>
                  </Link>
                )}
              </li>
            );
          })}
        </ul>

        {canGoNext ? (
          <Link href={blogListHref(currentPage + 1)} scroll={false} className={linkWrap}>
            <span className={navControl}>
              <span className="tw-hidden sm:tw-inline">{t("next")}</span>
              <FaChevronRight className="tw-h-3 tw-w-3 tw-shrink-0" aria-hidden />
            </span>
          </Link>
        ) : (
          <span className={navControlDisabled} aria-disabled="true">
            <span className="tw-hidden sm:tw-inline">{t("next")}</span>
            <FaChevronRight className="tw-h-3 tw-w-3 tw-shrink-0" aria-hidden />
          </span>
        )}
      </nav>
    </div>
  );
}
