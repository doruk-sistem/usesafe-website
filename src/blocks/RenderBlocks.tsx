"use client";

import React, { ComponentProps, Fragment } from "react";

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

type BlockTypeProps = {
  [K in BlockType]: {
    blockType: K;
    layout: ComponentProps<(typeof blockComponents)[K]>;
    blockOptions?: Omit<SectionProps, "children">;
  };
};

type Block = BlockTypeProps[BlockType];

interface RenderBlocksProps {
  blocks: Block[];
}

export default function RenderBlocks({ blocks }: RenderBlocksProps) {
  const hasBlocks = blocks && Array.isArray(blocks) && blocks.length > 0;

  if (!hasBlocks) return null;

  return (
    <Fragment>
      {blocks.map((block, index) => {
        const { blockType, blockOptions } = block;
        const Component = blockComponents[blockType];

        if (!Component) {
          return null;
        }

        if (blockType === "sliderBlock" || blockType === "pageTitle") {
          return (
            <Fragment key={index}>
              {/* @ts-expect-error - Type safety is handled by BlockTypeProps */}
              <Component {...block.layout} />
            </Fragment>
          );
        }

        return (
          <Section key={index} {...blockOptions}>
            {/* @ts-expect-error - Type safety is handled by BlockTypeProps */}
            <Component {...block.layout} />
          </Section>
        );
      })}
    </Fragment>
  );
}
