import {
  DefaultNodeTypes,
  SerializedBlockNode,
} from "@payloadcms/richtext-lexical";
import React, { Fragment, JSX } from "react";

import {
  IS_BOLD,
  IS_CODE,
  IS_ITALIC,
  IS_STRIKETHROUGH,
  IS_SUBSCRIPT,
  IS_SUPERSCRIPT,
  IS_UNDERLINE,
} from "./nodeFormat";

import {
  Heading,
  HorizontalRule,
  LineBreak,
  Link,
  List,
  ListItem,
  Paragraph,
  Quote,
  Relationship,
  Upload  
} from '@/assets/rich-text/components';

export type NodeTypes =
  | DefaultNodeTypes
  // | SerializedBlockNode<CTABlockProps | MediaBlockProps | BannerBlockProps | CodeBlockProps>
  | SerializedBlockNode;

type Props = {
  nodes: NodeTypes[];
};
interface MediaType {
  url: string;
  alt: string;
  filename?: string;
}

export function serializeLexical({ nodes }: Props): JSX.Element {
  return (
    <Fragment>
      {nodes?.map((node, index): JSX.Element | null => {
        if (node === null) {
          return null;
        }

        if (node.type === "text") {
          let text = <React.Fragment key={index}>{node.text}</React.Fragment>;
          if (node.format & IS_BOLD) {
            text = <strong key={index}>{text}</strong>;
          }
          if (node.format & IS_ITALIC) {
            text = <em key={index}>{text}</em>;
          }
          if (node.format & IS_STRIKETHROUGH) {
            text = (
              <span key={index} style={{ textDecoration: "line-through" }}>
                {text}
              </span>
            );
          }
          if (node.format & IS_UNDERLINE) {
            text = (
              <span key={index} style={{ textDecoration: "underline" }}>
                {text}
              </span>
            );
          }
          if (node.format & IS_CODE) {
            text = <code key={index}>{node.text}</code>;
          }
          if (node.format & IS_SUBSCRIPT) {
            text = <sub key={index}>{text}</sub>;
          }
          if (node.format & IS_SUPERSCRIPT) {
            text = <sup key={index}>{text}</sup>;
          }

          return text;
        }

        // NOTE: Hacky fix for
        // https://github.com/facebook/lexical/blob/d10c4e6e55261b2fdd7d1845aed46151d0f06a8c/packages/lexical-list/src/LexicalListItemNode.ts#L133
        // which does not return checked: false (only true - i.e. there is no prop for false)
        const serializedChildrenFn = (node: NodeTypes): JSX.Element | null => {
          if (node.children === null) {
            return null;
          } else {
            if (node?.type === "list" && node?.listType === "check") {
              for (const item of node.children) {
                if ("checked" in item) {
                  if (!item?.checked) {
                    item.checked = false;
                  }
                }
              }
            }
            return serializeLexical({ nodes: node.children as NodeTypes[] });
          }
        };

        const serializedChildren =
          "children" in node ? serializedChildrenFn(node) : "";

        if (node.type === "block") {
          const block = node.fields;

          const blockType = block?.blockType;

          if (!block || !blockType) {
            return null;
          }

          switch (blockType) {
            // case 'cta':
            //   return <CallToActionBlock key={index} {...block} />
            // case 'mediaBlock':
            //   return (
            //     <MediaBlock
            //       className="col-start-1 col-span-3"
            //       imgClassName="m-0"
            //       key={index}
            //       {...block}
            //       captionClassName="mx-auto max-w-[48rem]"
            //       enableGutter={false}
            //       disableInnerContainer={true}
            //     />
            //   )
            // case 'banner':
            //   return <BannerBlock className="col-start-2 mb-4" key={index} {...block} />
            // case 'code':
            //   return <CodeBlock className="col-start-2" key={index} {...block} />
            default:
              return null;
          }
        } else {
          switch (node.type) {
            case "linebreak": {
              return <LineBreak key={index} />;
            }
          
            case "paragraph": {
              return <Paragraph key={index}>{serializedChildren}</Paragraph>;
            }
          
            case "relationship": {
              const relationTo = node.relationTo;
              const relationValue = node.value;
              if (!relationValue) return null;
          
              return (
                <Relationship 
                  key={index}
                  relationTo={relationTo}
                  value={relationValue}
                />
              );
            }
          
            case "upload": {
              const uploadValue = node.value as unknown as MediaType;
          
              if (node.relationTo === "media" && uploadValue?.url) {
                return (
                  <Upload 
                    key={index}
                    value={uploadValue}
                    alt={uploadValue.alt || node.fields?.alt || "Image"}
                  />
                );
              }
              return null;
            }
          
            case "horizontalrule": {
              return <HorizontalRule key={index} />;
            }
          
            case "heading": {
              const level = parseInt(node.tag.slice(1)) as 1 | 2 | 3 | 4 | 5 | 6;
              return (
                <Heading key={index} level={level}>
                  {serializedChildren}
                </Heading>
              );
            }
          
            case "list": {
              return (
                <List 
                  key={index} 
                  type={node.tag as 'ul' | 'ol'}
                >
                  {serializedChildren}
                </List>
              );
            }
          
            case "listitem": {
              const typedNode = node as any;
              return (
                <ListItem 
                  key={index}
                  checked={typedNode.checked}
                  value={typedNode.value}
                >
                  {serializedChildren}
                </ListItem>
              );
            }
          
            case "quote": {
              return <Quote key={index}>{serializedChildren}</Quote>;
            }
          
            case "link": {
              const fields = node.fields;
            
              return (
                <Link
                  key={index}
                  newTab={Boolean(fields?.newTab)}
                  reference={fields.doc}
                  type={fields.linkType === "internal" ? "reference" : "custom"}
                  url={fields.url}
                >
                  {serializedChildren}
                </Link>
              );
            }
          
            default:
              return null;
          }
        }
      })}
    </Fragment>
  );
}
