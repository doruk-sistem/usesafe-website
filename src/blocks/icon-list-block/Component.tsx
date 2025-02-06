"use client";

import React from 'react';
import { GiWorld, GiWaterRecycling, GiConversation } from "react-icons/gi";
import { CiDiscount1 } from "react-icons/ci";
import { LuFootprints } from "react-icons/lu";
import { IoQrCodeOutline } from "react-icons/io5";

interface IconListBlockProps {
  items: {
    icon: string;
    description: string;
  }[];
}

const iconMap = {
  'world': GiWorld,
  'discount': CiDiscount1,
  'recycle': GiWaterRecycling,
  'footprints': LuFootprints,
  'qrcode': IoQrCodeOutline,
  'communication': GiConversation
};

export function IconListBlock({ items }: IconListBlockProps) {
  return (
    <section className="tw-py-20">
      <div className="tw-container tw-mx-auto">
        <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-3 tw-gap-12">
          {items.map((item, index) => {
            const Icon = iconMap[item.icon as keyof typeof iconMap] || GiWorld;
            
            return (
              <div 
                key={index} 
                className="tw-group tw-flex tw-flex-col tw-items-center tw-text-center hover:tw-transform hover:tw-translate-y-[-5px] tw-transition-all tw-duration-300"
              >
                <div className="tw-mb-8 tw-p-6 tw-rounded-full tw-bg-primary/5 tw-transition-all tw-duration-300 group-hover:tw-bg-primary/10">
                  <Icon className="tw-w-16 tw-h-16 tw-text-primary" />
                </div>
                <p className="tw-text-gray-600 tw-leading-relaxed tw-max-w-sm">
                  {item.description}
                </p>
              </div>
            )}
          )}
        </div>
      </div>
    </section>
  );
}