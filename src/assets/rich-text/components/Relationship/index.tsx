import React from "react";

interface SolutionType {
  title: string;
  slug: string;
  backgroundImage?: {
    url: string;
    alt?: string;
  };
}

interface RelationshipProps {
  relationTo: string;
  value: any;
}

export const Relationship: React.FC<RelationshipProps> = ({ relationTo, value }) => {
  if (!value) return null;

  if (relationTo === "solutions") {
    const solution = value as SolutionType;
    return (
      <div className="tw-relationship-container tw-my-6 tw-rounded-lg tw-overflow-hidden tw-border tw-border-gray-200">
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
            View Details
            </a>
        </div>
      </div>
    );
  }

  return (
    <div className="tw-relationship-container tw-my-4 tw-p-4 tw-bg-gray-50 tw-rounded-lg">
      <h4 className="tw-font-semibold">
        {typeof value === "object" && "title" in value
          ? (value as any).title
          : "İlişkili İçerik"}
      </h4>
      <details className="tw-mt-2 tw-text-xs">
        <summary className="tw-cursor-pointer tw-text-blue-500">
        More Info
        </summary>
        <pre className="tw-mt-2 tw-bg-gray-100 tw-p-2 tw-rounded tw-overflow-auto tw-max-h-40">
          {JSON.stringify(value, null, 2)}
        </pre>
      </details>
    </div>
  );
};
