import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

interface BlogCardProps {
  blog: {
    id: string;
    title: string;
    featuredImage: {
      url: string;
    };
    createdAt: string;
    excerpt?: string;
    author: {
      id: string;
      name: string;
    };
    status: "draft" | "published";
    publishedDate?: string;
    tags?: Array<{ tag: string }>;
  };
  locale: string;
}

export const BlogCard: React.FC<BlogCardProps> = ({ blog, locale }) => {
  const displayDate = blog.publishedDate || blog.createdAt;
  const formattedDate = new Date(displayDate).toLocaleDateString(
    locale === "tr" ? "tr-TR" : "en-US",
    { day: "numeric", month: "long", year: "numeric" }
  );

  return (
    <Link href={`/${locale}/blog/${blog.id}`} className="tw-block tw-w-full">
      <motion.div
        className="tw-bg-white tw-overflow-hidden tw-transition-all tw-duration-500 hover:tw-shadow-lg hover:tw-scale-[1.02] tw-cursor-pointer group"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {blog.featuredImage?.url && (
          <div className="tw-relative tw-h-52 tw-overflow-hidden">
            <Image
              src={blog.featuredImage.url}
              alt={blog.title || "Blog görseli"}
              fill
              className="tw-object-cover tw-transition-transform tw-duration-500 group-hover:tw-scale-105"
            />
            {blog.tags && blog.tags[0] && (
              <span className="tw-absolute tw-top-4 tw-right-4 tw-bg-white tw-text-black tw-py-1 tw-px-3 tw-text-[11px] tw-font-medium tw-uppercase">
                {blog.tags[0].tag}
              </span>
            )}
            {blog.status === "draft" && (
              <span className="tw-absolute tw-top-4 tw-left-4 tw-bg-yellow-400 tw-text-black tw-py-1 tw-px-3 tw-text-[11px] tw-font-medium">
                DRAFT
              </span>
            )}
          </div>
        )}
        <div className="tw-p-6">
          <h3 className="tw-text-[22px] tw-font-bold tw-mb-3 tw-text-gray-800 tw-line-clamp-2 group-hover:tw-text-blue-600 tw-transition-colors tw-duration-300">
            {blog.title || "Başlıksız Blog"}
          </h3>
          <p className="tw-text-gray-600 tw-mb-4 tw-line-clamp-2 tw-text-[15px]">
            {blog.excerpt || "Lorem ipsum has been industry standard dummy text ever..."}
          </p>
          <div className="tw-flex tw-items-center tw-justify-between tw-text-sm">
            <div className="tw-flex tw-flex-col tw-gap-1">
              <span className="tw-text-gray-500 tw-text-[13px] tw-uppercase">
                BY {blog.author.name}
              </span>
              <span className="tw-text-gray-400 tw-text-[12px]">{formattedDate}</span>
            </div>
            <div className="tw-flex tw-items-center tw-gap-4">
              {blog.tags && blog.tags.length > 1 && (
                <div className="tw-flex tw-items-center tw-gap-2">
                  {blog.tags.slice(1, 3).map((tag, index) => (
                    <span key={index} className="tw-text-[11px] tw-text-gray-500">
                      #{tag.tag}
                    </span>
                  ))}
                </div>
              )}
              <div className="tw-flex tw-items-center tw-space-x-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="tw-h-4 tw-w-4 tw-text-red-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
                <span className="tw-text-gray-500">65</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </Link>
  );
};