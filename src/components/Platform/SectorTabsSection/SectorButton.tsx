"use client";

import type { SectorButtonProps } from "./types";

const SectorButton: React.FC<SectorButtonProps> = ({ label, isActive, onClick }) => {
  return (
    <button
      className={`tw-w-44 tw-h-14 tw-px-3 tw-py-2 tw-bg-gradient-to-br tw-from-[#43cea2] tw-to-[#185a9d] tw-rounded-full tw-border-0 tw-transition-all tw-duration-300 tw-ease-out tw-text-xs md:tw-text-sm tw-text-center tw-whitespace-normal tw-leading-tight tw-flex tw-items-center tw-justify-center tw-transform focus-visible:tw-outline-none focus-visible:tw-ring-2 focus-visible:tw-ring-green-600 focus-visible:tw-ring-offset-2 focus-visible:tw-ring-offset-white dark:focus-visible:tw-ring-offset-gray-900
        ${isActive
          ? "tw-font-bold tw-text-white tw-shadow-lg tw-scale-105 tw-ring-2 tw-ring-green-400 tw-ring-opacity-50"
          : "tw-font-medium tw-text-slate-700 hover:tw-text-white hover:tw-shadow-lg hover:tw-scale-105 hover:tw-ring-2 hover:tw-ring-green-400 hover:tw-ring-opacity-30 dark:tw-text-gray-300 dark:hover:tw-text-white"
        }`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default SectorButton;
