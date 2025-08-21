"use client";

import React, { Fragment } from "react";

import Section, { type SectionProps } from "@/components/Section";

import { AccordionBlock } from "./accordion-block/Component";
import BackgroundVideoBlock from "./background-video/Component";
import { CertificationIntroBlock } from "./certification-intro-block/Component";
import { ClientsBlock } from "./clients-block/Component";
import { ContactFormBlock } from "./contact-form-block/Component";
import { ContentWithImageBlock } from "./content-with-image-block/Component";
import { CounterBlock } from "./counter-block/Component";
import { IconListBlock } from "./icon-list-block/Component";
import { MediaBlock } from "./media-block/Component";
import { PageTitleBlock } from "./page-title-block/Component";
import { SliderBlock } from "./slider-block/Component";
import TextBlock from "./text-block";
const blockComponents = {
  sliderBlock: SliderBlock,
  mediaBlock: MediaBlock,
  contentWithImageBlock: ContentWithImageBlock,
  accordionBlock: AccordionBlock,
  iconListBlock: IconListBlock,
  clients: ClientsBlock,
  counter: CounterBlock,
  pageTitle: PageTitleBlock,
  backgroundVideo: BackgroundVideoBlock,
  contactForm: ContactFormBlock,
  certificationIntro: CertificationIntroBlock,
  text: TextBlock,
} as const;

type BlockType = keyof typeof blockComponents;

type Block = {
  blockType: string;
  layout?: Record<string, unknown>;
  blockOptions?: Omit<SectionProps, "children">;
  [key: string]: any;
};

interface RenderBlocksProps {
  blocks: Block[];
}

export default function RenderBlocks({ blocks }: RenderBlocksProps) {
  const hasBlocks = blocks && Array.isArray(blocks) && blocks.length > 0;

  if (!hasBlocks) return null;

  return (
    <Fragment>
      {blocks.map((block, index) => {
        const { blockType, blockOptions, layout, ...blockProps } = block;
        const Component = blockComponents[blockType as BlockType];

        if (!Component) {
          return null;
        }

        const componentProps = layout || blockProps;

        if (blockType === "sliderBlock") {
          return (
            <Fragment key={index}>
              {/* @ts-expect-error - Component props are dynamic */}
              <Component {...componentProps} />
            </Fragment>
          );
        }

        return (
          <Section key={index} {...blockOptions}>
            {/* @ts-expect-error - Component props are dynamic */}
            <Component {...componentProps} />
          </Section>
        );
      })}
    </Fragment>
  );
}
