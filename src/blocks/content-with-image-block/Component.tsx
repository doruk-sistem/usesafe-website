"use client";

import React from "react";
import { Media } from "@/components/Media";

interface ContentWithImageBlockProps {
  title: string;  // Payload'dan gelen veri zaten doğru locale'de olacak
  description: string;
  contentFooter?: React.ReactNode;
  image: any;
  order?: number | string;
}

export function ContentWithImageBlock({
  title,
  description,
  contentFooter,
  image,
  order,
}: ContentWithImageBlockProps) {
  // Debug için order değerini kontrol edelim
  console.log('DEBUG - Received props:', {
    title,
    order,
    type: typeof order
  });

  // order değerini number'a çevirelim (eğer string ise)
  const numericOrder = Number(order);
  
  // Mantığı basitleştirelim
  const isLeft = numericOrder % 2 !== 0;

  console.log('DEBUG - Layout calculation:', {
    numericOrder,
    isLeft,
    position: isLeft ? 'LEFT' : 'RIGHT'
  });

  // Layout'u direkt olarak oluşturalım
  const layout = isLeft ? (
    // TEK sayılar için (1,3,5...) - Sol Layout
    <>
      <div className="col-lg-6 position-relative">
        <div className="tw-flex tw-justify-center tw-w-full">
          <Media {...image} />
        </div>
      </div>
      <div className="col-lg-5 col-md-9 text-center text-lg-start">
        {title && <h1 className="alt-font fw-600 text-dark-gray ls-minus-1px">{title}</h1>}
        {description && <p className="w-95 md-w-100">{description}</p>}
        {contentFooter}
      </div>
    </>
  ) : (
    // ÇİFT sayılar için (2,4,6...) - Sağ Layout
    <>
      <div className="col-lg-5 col-md-9 text-center text-lg-start">
        {title && <h1 className="alt-font fw-600 text-dark-gray ls-minus-1px">{title}</h1>}
        {description && <p className="w-95 md-w-100">{description}</p>}
        {contentFooter}
      </div>
      <div className="col-lg-6 position-relative">
        <div className="tw-flex tw-justify-center tw-w-full">
          <Media {...image} />
        </div>
      </div>
    </>
  );

  return (
    <div className="row tw-items-center tw-justify-center tw-space-y-10 tw-space-x-10">
      {layout}
    </div>
  );
}