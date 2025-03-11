"use client";

import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

import { BlogCard } from "@/app/(frontend)/_components/blog-card";
import Footer from "@/app/(frontend)/_components/footer";
import { PageTitle } from "@/app/(frontend)/_components/page-title";

interface PayloadBlogDoc {
  id: string;
  title: string;
  featuredImage: {
    url: string;
  };
  createdAt: string;
  content: any;
  excerpt?: string;
  author: {
    id: string;
    name: string;
  };
  status: "draft" | "published";
  publishedDate?: string;
  tags?: Array<{ tag: string }>;
}

interface BlogListProps {
  blogs: PayloadBlogDoc[];
  isLoading: boolean;
  locale: string;
}

const BlogList: React.FC<BlogListProps> = ({ blogs, isLoading, locale }) => {
  if (isLoading) {
    return <div className="tw-text-center tw-py-8">Yükleniyor...</div>;
  }

  if (!blogs || blogs.length === 0) {
    return <div className="tw-text-center tw-py-8">Henüz blog yazısı bulunmuyor.</div>;
  }

  return (
    <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 lg:tw-grid-cols-4 tw-gap-6">
      {blogs.map((blog) => (
        <BlogCard key={blog.id} blog={blog} locale={locale} />
      ))}
    </div>
  );
};

export default function BlogPage() {
  const [blogs, setBlogs] = useState<PayloadBlogDoc[]>([]);
  const [isLoading, setIsLoading] = useState(true);
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
    <div className="tw-w-full tw-min-h-screen tw-bg-gray-50">
      <PageTitle
        title={locale === "tr" ? "Blog Yazıları" : "Blog Posts"}
        backgroundImage="/images/banner1.png"
      />
      <div className="tw-container tw-mx-auto tw-py-16 tw-px-4">
        <BlogList blogs={blogs} isLoading={isLoading} locale={locale as string} />
      </div>
      <Footer />
    </div>
  );
}
