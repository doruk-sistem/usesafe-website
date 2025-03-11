"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { Button } from "@/app/(frontend)/_components/button";
import Footer from "@/app/(frontend)/_components/footer";
import { PageTitle } from "@/app/(frontend)/_components/page-title";
import RichText from "@/components/RichText";

interface BlogPost {
  id: string;
  title: string;
  content: {
    root: {
      children: Array<{
        text?: string;
        type?: string;
        children?: object[];
      }>;
    };
  };
  featuredImage: {
    url: string;
  };
  author?: {
    name: string;
  };
  createdAt: string;
  excerpt?: string;
  tags?: Array<{ tag: string }>;
}

export default function BlogDetailPage() {
  const [blog, setBlog] = useState<BlogPost | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const params = useParams() as { id: string; locale: string };
  const { id, locale } = params;

  useEffect(() => {
    const fetchBlogDetail = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(`/api/blogs/${id}?depth=2`, {
          headers: { "Accept-Language": locale },
        });

        if (!response.ok) throw new Error("Blog detayları çekilemedi");

        const data = await response.json();
        setBlog(data);
      } catch (error) {
        console.error("Error fetching blog details:", error);
      } finally {
        setIsLoading(false);
      }
    };

    if (id) fetchBlogDetail();
  }, [id, locale]);

  if (isLoading) {
    return (
      <div className="tw-min-h-screen tw-flex tw-items-center tw-justify-center tw-bg-gray-50">
        <div className="tw-animate-spin tw-rounded-full tw-h-16 tw-w-16 tw-border-4 tw-border-primary/20 tw-border-t-primary"></div>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="tw-min-h-screen tw-flex tw-flex-col tw-items-center tw-justify-center tw-bg-gray-50">
        <h1 className="tw-text-3xl tw-font-bold tw-mb-6 tw-text-gray-800">
          {locale === "tr" ? "Blog yazısı bulunamadı" : "Blog post not found"}
        </h1>
        <Button variant="default" size="lg">
          <Link href={`/${locale}/blog`} className="tw-flex tw-items-center tw-gap-2">
            <svg className="tw-w-5 tw-h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            {locale === "tr" ? "Blog Listesine Dön" : "Back to Blog List"}
          </Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="tw-min-h-screen tw-bg-gray-50">
      <PageTitle
        title={blog.title}
        backgroundImage={blog.featuredImage?.url || "/images/banner1.png"}
      />

      <div className="tw-container tw-mx-auto tw-px-4 lg:tw-px-8 tw-py-16">
        <motion.div
          className="tw-max-w-4xl tw-mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Meta Information */}
          <div className="tw-bg-white tw-rounded-xl tw-shadow-md tw-p-8 tw-mb-12">
            <div className="tw-flex tw-items-center tw-justify-between tw-flex-wrap tw-gap-6">
              <div className="tw-flex tw-items-center tw-space-x-8">
                {blog.author?.name && (
                  <div className="tw-flex tw-flex-col">
                    <span className="tw-text-sm tw-font-medium tw-text-gray-500 tw-uppercase">
                      {locale === "tr" ? "YAZAR" : "AUTHOR"}
                    </span>
                    <span className="tw-font-semibold tw-text-gray-800 tw-mt-1">
                      {blog.author.name}
                    </span>
                  </div>
                )}
                <div className="tw-h-14 tw-w-px tw-bg-gray-200" />
                <div className="tw-flex tw-flex-col">
                  <span className="tw-text-sm tw-font-medium tw-text-gray-500 tw-uppercase">
                    {locale === "tr" ? "TARİH" : "DATE"}
                  </span>
                  <span className="tw-font-semibold tw-text-gray-800 tw-mt-1">
                    {new Date(blog.createdAt).toLocaleDateString(
                      locale === "tr" ? "tr-TR" : "en-US",
                      { year: "numeric", month: "long", day: "numeric" }
                    )}
                  </span>
                </div>
              </div>
              {blog.tags && blog.tags.length > 0 && (
                <div className="tw-flex tw-flex-wrap tw-gap-2">
                  {blog.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="tw-px-3 tw-py-1 tw-bg-gray-100 tw-text-gray-700 tw-rounded-full tw-text-sm"
                    >
                      #{tag.tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Content Area */}
          <div className="tw-bg-white tw-rounded-xl tw-shadow-md tw-p-8">
            {blog.excerpt && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="tw-text-xl tw-leading-relaxed tw-text-gray-600 tw-mb-8 tw-font-serif tw-italic tw-border-l-4 tw-border-gray-200 tw-pl-6"
              >
                {blog.excerpt}
              </motion.div>
            )}

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="tw-prose tw-prose-lg tw-max-w-none
                tw-prose-headings:tw-text-gray-800 tw-prose-headings:tw-font-bold
                tw-prose-p:tw-text-gray-600 tw-prose-p:tw-leading-relaxed
                tw-prose-a:tw-text-blue-600 tw-prose-a:tw-no-underline hover:tw-prose-a:tw-text-blue-700
                tw-prose-img:tw-rounded-xl tw-prose-img:tw-shadow-lg
                tw-prose-strong:tw-text-gray-800
                tw-prose-blockquote:tw-border-l-4 tw-prose-blockquote:tw-border-gray-200
                tw-prose-blockquote:tw-pl-6 tw-prose-blockquote:tw-italic
                tw-prose-code:tw-text-gray-800 tw-prose-code:tw-bg-gray-100 tw-prose-code:tw-rounded"
            >
              <RichText content={blog.content} />
            </motion.div>
          </div>

          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="tw-mt-8"
          >
            <Button variant="default" size="lg" className="tw-shadow-sm hover:tw-shadow-md">
              <Link href={`/${locale}/blog`} className="tw-flex tw-items-center tw-gap-2">
                <svg
                  className="tw-w-5 tw-h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                {locale === "tr" ? "Blog Listesine Dön" : "Back to Blog List"}
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>

      <Footer />
    </div>
  );
}
