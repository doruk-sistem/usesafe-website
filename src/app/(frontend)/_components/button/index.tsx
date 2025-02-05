import React from "react";
import { VariantProps, cva } from "class-variance-authority";

import { cn } from "@/utils/cn";

const buttonVariants = cva(
  // Base styles
  "primary-font tw-border-solid tw-border-transparent tw-inline-flex tw-items-center tw-justify-center tw-rounded tw-text-sm tw-font-medium tw-transition-colors tw-focus-visible:tw-outline-none tw-focus-visible:tw-ring-1 tw-focus-visible:tw-ring-ring tw-disabled:tw-pointer-events-none tw-disabled:tw-opacity-50",
  {
    variants: {
      variant: {
        default:
          "tw-bg-black tw-text-white hover:tw-opacity-90 hover:tw-bg-black hover:tw-text-white",
        outline:
          "tw-border tw-border-black tw-bg-transparent tw-text-black hover:tw-bg-black hover:tw-text-white",
        text: "tw-bg-transparent tw-border-none tw-text-black hover:tw-bg-black hover:tw-text-white",
        link: "tw-bg-transparent tw-border-none tw-text-black tw-underline hover:tw-text-primary",
        white:
          "tw-bg-white tw-text-black hover:tw-opacity-90 hover:tw-bg-white hover:tw-text-black",
      },
      size: {
        default: "tw-h-12 tw-px-9 tw-text-base",
        sm: "tw-h-10 tw-px-6 tw-text-xs",
        lg: "tw-h-14 tw-px-9 tw-text-lg",
        icon: "tw-h-12 tw-w-12",
      },
      uppercase: {
        true: "tw-uppercase",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      uppercase: false,
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, uppercase, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, uppercase, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };
