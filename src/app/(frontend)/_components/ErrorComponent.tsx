import React from "react";

type ErrorComponentProps = {
  message: string;
};

const ErrorComponent: React.FC<ErrorComponentProps> = ({ message }) => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-red-100 text-red-800 p-4">
      <p>{message}</p>
    </div>
  );
};

export default ErrorComponent;
