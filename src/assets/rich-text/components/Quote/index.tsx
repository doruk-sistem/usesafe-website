import React from 'react';

interface QuoteProps {
  children: React.ReactNode;
}

export const Quote: React.FC<QuoteProps> = ({ children }) => {
  return (
    <blockquote className="col-start-2 tw-pl-4 tw-border-l-4 tw-border-gray-200 tw-italic tw-my-6">
      {children}
    </blockquote>
  );
};