'use client';

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import Header from "@/app/(frontend)/_components/header";
import Footer from "@/app/(frontend)/_components/footer";
import { Button } from "@/app/(frontend)/_components/button";
import Link from "next/link";
import Image from "next/image";

interface BlogPost {
  id: string;
  title: string;
  content: {
    root: {
      children: Array<{
        text?: string;
        type?: string;
        children?: any[];
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
}

const RichText = ({ content }: { content: any }) => {
  if (!content?.root?.children) return null;

  return (
    <div className="tw-text-gray-800 tw-prose tw-prose-lg tw-max-w-none">
      {content.root.children.map((node: any, i: number) => {
        const text = node.text || '';
        if (node.type === 'h1') return <h1 key={i} className="tw-text-4xl tw-font-bold tw-mb-6">{text}</h1>;
        if (node.type === 'h2') return <h2 key={i} className="tw-text-3xl tw-font-semibold tw-mb-4">{text}</h2>;
        if (node.type === 'paragraph') {
          return (
            <p key={i} className="tw-leading-relaxed tw-mb-4">
              {node.children?.map((child: any, j: number) => {
                if (child.bold) return <strong key={j}>{child.text}</strong>;
                if (child.italic) return <em key={j}>{child.text}</em>;
                return child.text;
              })}
            </p>
          );
        }
        if (node.type === 'ul') return <ul key={i} className="tw-list-disc tw-ml-5 tw-mb-4">{node.children?.map((item: any, j: number) => <li key={j}>{item.children?.[0]?.text}</li>)}</ul>;
        if (node.type === 'ol') return <ol key={i} className="tw-list-decimal tw-ml-5 tw-mb-4">{node.children?.map((item: any, j: number) => <li key={j}>{item.children?.[0]?.text}</li>)}</ol>;
        return <p key={i}>{text}</p>;
      })}
    </div>
  );
};

export default function BlogDetailPage() {
  const [blog, setBlog] = useState<BlogPost | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const { id, locale } = useParams();

  useEffect(() => {
    const fetchBlogDetail = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(`/api/blogs/${id}?depth=2`, {
          headers: { 'Accept-Language': locale as string },
        });

        if (!response.ok) throw new Error('Blog detayları çekilemedi');

        const data = await response.json();
        setBlog(data);
      } catch (error) {
        console.error('Error fetching blog details:', error);
      } finally {
        setIsLoading(false);
      }
    };

    if (id) fetchBlogDetail();
  }, [id, locale]);

  if (isLoading) {
    return (
      <div className="tw-h-screen tw-flex tw-items-center tw-justify-center">
        <div className="tw-animate-spin tw-rounded-full tw-h-12 tw-w-12 tw-border-t-2 tw-border-b-2 tw-border-gray-900"></div>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="tw-h-screen tw-flex tw-flex-col tw-items-center tw-justify-center">
        <h1 className="tw-text-2xl tw-font-bold tw-mb-4">Blog yazısı bulunamadı</h1>
        <Button variant="default" size="lg">
          <Link href={`/${locale}/blog`}>{locale === 'tr' ? 'Blog Listesine Dön' : 'Back to Blog List'}</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="tw-min-h-screen tw-bg-gray-50">
      <Header />

      {/* Hero Bölümü */}
      <div className="tw-relative tw-h-[60vh] tw-w-full tw-overflow-hidden">
        {blog.featuredImage?.url && (
          <motion.div 
            initial={{ opacity: 0, scale: 1.1 }} 
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ duration: 1 }}
            className="tw-w-full tw-h-full tw-absolute tw-inset-0 tw-bg-cover tw-bg-center"
            style={{ backgroundImage: `url(${blog.featuredImage.url})` }}
          />
        )}
        <div className="tw-absolute tw-inset-0 tw-bg-black tw-bg-opacity-50"></div>
        <div className="tw-absolute tw-inset-0 tw-flex tw-items-center tw-justify-center">
          <motion.div 
            className="tw-text-center tw-text-white tw-px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="tw-text-4xl tw-md:text-5xl tw-font-bold tw-mb-4">{blog.title}</h1>
            <div className="tw-flex tw-items-center tw-justify-center tw-space-x-4 tw-text-gray-300">
              {blog.author?.name && <span>{blog.author.name}</span>}
              <span>•</span>
              <span>{new Date(blog.createdAt).toLocaleDateString(locale === 'tr' ? 'tr-TR' : 'en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* İçerik Bölümü */}
      <motion.div 
        className="tw-max-w-4xl tw-mx-auto tw-px-4 tw-py-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        {blog.excerpt && <div className="tw-text-xl tw-text-gray-600 tw-mb-8 tw-font-serif tw-italic">{blog.excerpt}</div>}
        <RichText content={blog.content} />

        <div className="tw-mt-12 tw-pt-8 tw-border-t tw-border-gray-200">
          <Button variant="default" size="lg">
            <Link href={`/${locale}/blog`} className="tw-flex tw-items-center tw-transition-transform tw-duration-200 hover:tw-translate-x-[-5px]">
              <svg className="tw-w-4 tw-h-4 tw-mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7"/>
              </svg>
              {locale === 'tr' ? 'Blog Listesine Dön' : 'Back to Blog List'}
            </Link>
          </Button>
        </div>
      </motion.div>

      <Footer />
    </div>
  );
}
