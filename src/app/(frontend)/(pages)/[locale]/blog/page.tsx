"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import React, { useRef, useEffect, useState } from "react";

import { Button } from "@/app/(frontend)/_components/button";
import Footer from "@/app/(frontend)/_components/footer";

interface PayloadBlogDoc {
  id: string;
  title: string;
  featuredImage: {
    url: string;
  };
  createdAt: string;
  content: any;
  excerpt?: string;
  author?: {
    name: string;
  };
  status: "draft" | "published";
}

interface BlogListProps {
  blogs: PayloadBlogDoc[];
  isLoading: boolean;
  locale: string;
}

interface BlogCardProps {
  blog: PayloadBlogDoc;
  locale: string;
}

const BlogBanner = ({ scrollToReferences }: { scrollToReferences: () => void }) => {
  return (
    <section className="tw-relative tw-w-full tw-h-screen tw-flex tw-items-center tw-justify-center tw-overflow-hidden">
      <motion.div
        initial={{ scale: 1.2 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5 }}
        className="tw-absolute tw-inset-0"
      >
        <Image
          src="/images/banner.png"
          alt="Blog Banner"
          fill
          className="tw-object-cover"
          priority
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ duration: 1 }}
        className="tw-absolute tw-inset-0 tw-bg-black"
      />
      <div className="tw-relative tw-z-10 tw-text-white tw-text-center tw-w-full tw-h-full tw-flex tw-flex-col tw-justify-center tw-items-center">
        <motion.h1
          className="tw-text-5xl tw-font-bold"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          Blogs - Business
        </motion.h1>
        <motion.button
          onClick={scrollToReferences}
          className="tw-absolute tw-bottom-16 tw-text-white tw-bg-transparent tw-border-none tw-outline-none tw-p-0 tw-text-4xl"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          aria-label="Scroll Down"
        >
          ⌄
        </motion.button>
      </div>
    </section>
  );
};

const BlogList: React.FC<BlogListProps> = ({ blogs, isLoading, locale }) => {
  if (isLoading) {
    return <div className="tw-text-center tw-py-8">Yükleniyor...</div>;
  }

  if (!blogs || blogs.length === 0) {
    return <div className="tw-text-center tw-py-8">Henüz blog yazısı bulunmuyor.</div>;
  }

  return (
    <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 lg:tw-grid-cols-3 tw-gap-6">
      {blogs.map((blog) => (
        <BlogCard key={blog.id} blog={blog} locale={locale} />
      ))}
    </div>
  );
};

const BlogCard: React.FC<BlogCardProps> = ({ blog, locale }) => {
  return (
    <motion.div
      className="tw-bg-transparent tw-rounded-lg tw-shadow-lg tw-overflow-hidden hover:tw-shadow-xl tw-transition-shadow tw-duration-300"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {blog.featuredImage?.url && (
        <div className="tw-relative tw-h-48 tw-overflow-hidden">
          <Image
            src={blog.featuredImage.url}
            alt={blog.title || "Blog görseli"}
            fill
            className="tw-object-cover"
          />
        </div>
      )}
      <div className="tw-p-6">
        <h3 className="tw-text-xl tw-font-semibold tw-mb-2 tw-text-gray-800">{blog.title || "Başlıksız Blog"}</h3>
        <p className="tw-text-gray-600 tw-mb-4 tw-line-clamp-3">{blog.excerpt || "İçerik yüklenemedi"}</p>
        <div className="tw-flex tw-justify-between tw-items-center">
          <span className="tw-text-sm tw-text-gray-500">
            {blog.createdAt
              ? new Date(blog.createdAt).toLocaleDateString(locale === "tr" ? "tr-TR" : "en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })
              : "Tarih belirtilmemiş"}
          </span>
          <Button variant="default" size="sm">
            <Link href={`/${locale}/blog/${blog.id}`}>
              {locale === "tr" ? "Devamını Oku" : "Read More"}
            </Link>
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default function BlogPage() {
  const [blogs, setBlogs] = useState<PayloadBlogDoc[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const referenceSection = useRef<HTMLDivElement>(null);
  const { locale } = useParams();

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setIsLoading(true);
        const response = await fetch("/api/blogs?where[status][equals]=published&depth=2", {
          headers: {
            "Accept-Language": locale as string,
          },
        });
        if (!response.ok) throw new Error("Blog verileri çekilemedi");
        const data = await response.json();
        setBlogs(data.docs || []);
      } catch (error) {
        console.error("Error fetching blogs:", error);
        setBlogs([]);
      } finally {
        setIsLoading(false);
      }
    };
    fetchBlogs();
  }, [locale]);

  return (
    <div className="tw-w-full tw-min-h-screen">
      <BlogBanner scrollToReferences={() => referenceSection.current?.scrollIntoView({ behavior: "smooth" })} />
      <section ref={referenceSection} className="tw-max-w-7xl tw-mx-auto tw-py-16 tw-px-4">
        <h2 className="tw-text-4xl tw-font-bold tw-text-center tw-mb-12">{locale === "tr" ? "Blog Yazıları" : "Blog Posts"}</h2>
        <BlogList blogs={blogs} isLoading={isLoading} locale={locale as string} />
      </section>
      <Footer />
    </div>
  );
}
