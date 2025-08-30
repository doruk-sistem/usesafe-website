import { motion } from "framer-motion";
import { ReactNode } from "react";

interface AnimatedCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  className?: string;
}

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 100,
    scale: 0.8,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 1.8,
      ease: [0.25, 0.46, 0.45, 0.94], // Smooth easing
    },
  },
};

const iconVariants = {
  hidden: {
    scale: 0.4,
    opacity: 0,
    rotate: -20,
  },
  visible: {
    scale: 1,
    opacity: 1,
    rotate: 0,
    transition: {
      duration: 1.4,
      ease: "easeOut",
      delay: 0.8,
    },
  },
};

export default function AnimatedCard({ icon, title, description, className = "" }: AnimatedCardProps) {
  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      className={`tw-bg-white tw-rounded-2xl tw-p-8 tw-shadow-lg tw-border tw-border-blue-100 hover:tw-shadow-xl tw-transition-all tw-duration-300 ${className}`}
    >
      <motion.div
        variants={iconVariants}
        initial="hidden"
        animate="visible"
        className="tw-bg-blue-100 tw-w-16 tw-h-16 tw-rounded-xl tw-flex tw-items-center tw-justify-center tw-mb-6"
      >
        {icon}
      </motion.div>
      <h3 className="tw-text-xl tw-font-semibold tw-text-gray-900 tw-mb-4">
        {title}
      </h3>
      <p className="tw-text-gray-700 tw-leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
}
