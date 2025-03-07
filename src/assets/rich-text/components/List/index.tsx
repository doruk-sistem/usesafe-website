import React from 'react';

interface ListProps {
  type?: 'ul' | 'ol';
  children: React.ReactNode;
}

export const List: React.FC<ListProps> = ({ type = 'ul', children }) => {
  const className = "tw-pl-8 tw-space-y-2 tw-my-4";
  
  if (type === 'ol') {
    return (
      <ol className={`tw-list-decimal ${className}`}>
        {children}
      </ol>
    );
  }

  return (
    <ul className={`tw-list-disc ${className}`}>
      {children}
    </ul>
  );
};