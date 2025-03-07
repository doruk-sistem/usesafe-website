import React from 'react';

interface ListItemProps {
  checked?: boolean;
  value?: number;
  children: React.ReactNode;
}

export const ListItem: React.FC<ListItemProps> = ({ checked, value, children }) => {
  if (checked !== undefined) {
    return (
      <li className="tw-pl-2 tw-flex tw-items-start tw-gap-3">
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
        <span>{children}</span>
      </li>
    );
  }

  return (
    <li className="tw-pl-2" value={value}>
      {children}
    </li>
  );
};