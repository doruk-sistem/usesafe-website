import React from "react";

interface CounterProps {
  value: number;
  suffix?: string;
  description: string;
}

export default function Counter({ value, suffix, description }: CounterProps) {
  return (
    <div className="counter-style-04">
      <div>
        <h2
          className="vertical-counter d-inline-flex ls-minus-2px alt-font text-base-color fw-600 mb-0"
          data-to={String(value)}
          data-text={suffix}
        />
        <p className="alt-font fs-20 text-dark-gray">{description}</p>
      </div>
    </div>
  );
}
