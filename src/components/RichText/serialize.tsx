import {
  DefaultNodeTypes,
  SerializedBlockNode,
} from "@payloadcms/richtext-lexical";
import React, { Fragment, JSX } from "react";

import { CMSLink } from "@/components/Link";

import {
  IS_BOLD,
  IS_CODE,
  IS_ITALIC,
  IS_STRIKETHROUGH,
  IS_SUBSCRIPT,
  IS_SUPERSCRIPT,
  IS_UNDERLINE,
} from "./nodeFormat";

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
              return <br className="col-start-2" key={index} />;
            }
            case "paragraph": {
              return (
                <p className="col-start-2" key={index}>
                  {serializedChildren}
                </p>
              );
            }
            case "relationship": {
              const relationTo = node.relationTo;
              const relationValue = node.value;
              if (!relationValue) return null;
              if (relationTo === "solutions") {
                const solution = relationValue as any;
                return (
                  <div
                    className="tw-relationship-container tw-my-6 tw-rounded-lg tw-overflow-hidden tw-border tw-border-gray-200"
                    key={index}
                  >
                    {solution.backgroundImage?.url && (
                      <div className="tw-aspect-video tw-relative tw-overflow-hidden">
                        <img
                          src={solution.backgroundImage.url}
                          alt={solution.backgroundImage.alt || solution.title}
                          className="tw-w-full tw-h-full tw-object-cover"
                        />
                      </div>
                    )}

                    <div className="tw-p-4">
                      <h3 className="tw-text-xl tw-font-bold tw-mb-2">
                        {solution.title}
                      </h3>
                      <a
                        href={`/solutions/${solution.slug}`}
                        className="tw-inline-block tw-px-4 tw-py-2 tw-bg-black tw-text-white tw-rounded tw-font-medium tw-text-sm"
                      >
                        Sayfayı İncele
                      </a>
                    </div>
                  </div>
                );
              }
              return (
                <div
                  className="tw-relationship-container tw-my-4 tw-p-4 tw-bg-gray-50 tw-rounded-lg"
                  key={index}
                >
                  <h4 className="tw-font-semibold">
                    {typeof relationValue === "object" &&
                    "title" in relationValue
                      ? (relationValue as any).title
                      : "İlişkili İçerik"}
                  </h4>
                  <details className="tw-mt-2 tw-text-xs">
                    <summary className="tw-cursor-pointer tw-text-blue-500">
                      Detaylı Bilgi
                    </summary>
                    <pre className="tw-mt-2 tw-bg-gray-100 tw-p-2 tw-rounded tw-overflow-auto tw-max-h-40">
                      {JSON.stringify(relationValue, null, 2)}
                    </pre>
                  </details>
                </div>
              );
            }
            case "upload": {
              const uploadValue = node.value as unknown as MediaType;

              if (node.relationTo === "media" && uploadValue?.url) {
                return (
                  <div className="col-start-2 tw-my-8" key={index}>
                    <figure className="tw-relative tw-w-full">
                      <img
                        src={uploadValue.url}
                        alt={uploadValue.alt || node.fields.alt || "Image"}
                        className="tw-w-full tw-h-auto tw-rounded-lg"
                        loading="lazy"
                      />
                    </figure>
                  </div>
                );
              }
              return null;
            }
            case "horizontalrule": {
              return (
                <hr
                  className="col-start-2 tw-my-8 tw-border-t tw-border-gray-200"
                  key={index}
                />
              );
            }
            case "heading": {
              const Tag = node?.tag;
              const headingClasses = {
                h1: "col-start-2 tw-text-6xl tw-font-bold tw-mb-6 tw-leading-tight",
                h2: "col-start-2 tw-text-5xl tw-font-bold tw-mb-5 tw-leading-tight",
                h3: "col-start-2 tw-text-4xl tw-font-bold tw-mb-4 tw-leading-tight",
                h4: "col-start-2 tw-text-3xl tw-font-semibold tw-mb-4 tw-leading-tight",
                h5: "col-start-2 tw-text-2xl tw-font-semibold tw-mb-3 tw-leading-tight",
                h6: "col-start-2 tw-text-xl tw-font-semibold tw-mb-3 tw-leading-tight",
              };

              return (
                <Tag
                  className={
                    headingClasses[node.tag as keyof typeof headingClasses]
                  }
                  key={index}
                >
                  {serializedChildren}
                </Tag>
              );
            }
            case "list": {
              const listType = node?.tag || "ul";
              if (listType === "ol") {
                return (
                  <ol
                    className="tw-list-decimal tw-pl-8 tw-space-y-2 tw-my-4"
                    key={index}
                  >
                    {serializedChildren}
                  </ol>
                );
              }

              return (
                <ul
                  className="tw-list-disc tw-pl-8 tw-space-y-2 tw-my-4"
                  key={index}
                >
                  {serializedChildren}
                </ul>
              );
            }

            case "listitem": {
              const typedNode = node as any;
              if (typedNode.checked !== undefined) {
                return (
                  <li
                    className="tw-pl-2 tw-flex tw-items-start tw-gap-3"
                    key={index}
                    // role="listitem"
                    //tabIndex={-1}
                    // value={node?.value}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="tw-h-5 tw-w-5 tw-text-primary tw-mt-0.5 tw-flex-shrink-0"
                    >
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                    <span>{serializedChildren}</span>
                  </li>
                );
              }
              return (
                <li className="tw-pl-2" key={index} value={typedNode.value}>
                  {serializedChildren}
                </li>
              );
            }
            case "quote": {
              return (
                <blockquote
                  className="col-start-2 tw-pl-4 tw-border-l-4 tw-border-gray-200 tw-italic tw-my-6"
                  key={index}
                >
                  {serializedChildren}
                </blockquote>
              );
            }
            case "link": {
              const fields = node.fields;

              return (
                <CMSLink
                  key={index}
                  newTab={Boolean(fields?.newTab)}
                  reference={fields.doc as any}
                  type={fields.linkType === "internal" ? "reference" : "custom"}
                  url={fields.url}
                >
                  {serializedChildren}
                </CMSLink>
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
