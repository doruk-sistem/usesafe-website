import React, { ComponentProps, Fragment } from "react";

import Section, { type SectionProps } from "@/components/Section";

import { AccordionBlock } from "./accordion-block/Component";
import { MediaBlock } from "./media-block/Component";
import { PricingBlock } from "./pricing-block";
import { SliderBlock } from "./slider-block";
import { ContentWithImageBlock } from "./content-with-image-block/Component";
import { ClientsBlock } from "./clients-block/Component";
import { CounterBlock } from "./counter-block/Component";
import { PageTitleBlock } from "./page-title-block/Component";
import BackgroundVideoBlock from "./background-video/Component";
import { ContactFormBlock } from "./contact-form-block/Component";
import { IconListBlock } from "./icon-list-block/Component";
import { CertificationIntroBlock } from "./certification-intro-block/Component";


const blockComponents = {
  accordion: AccordionBlock,
  media: MediaBlock,
  slider: SliderBlock,
  pricing: PricingBlock,
  contentWithImage: ContentWithImageBlock,
  clients: ClientsBlock,
  counter: CounterBlock,
  pageTitle: PageTitleBlock,
  backgroundVideo: BackgroundVideoBlock,
  contactForm: ContactFormBlock,
  iconList: IconListBlock,
  certificationIntro: CertificationIntroBlock,
};

type BlockType = keyof typeof blockComponents;

// Extract props type for each block type
type BlockTypeProps = {
  [K in BlockType]: {
    blockType: K;
    layout: ComponentProps<(typeof blockComponents)[K]>;
    sectionOptions?: Omit<SectionProps, "children">;
  };
};

// Create a union type for all block types
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
        const { blockType, layout, sectionOptions } = block;

        const Component = blockComponents[blockType];

        return (
          <Section key={index} {...sectionOptions}>
            {/* @ts-expect-error */}
            <Component {...layout} />
          </Section>
        );
      })}
    </Fragment>
  );
}
