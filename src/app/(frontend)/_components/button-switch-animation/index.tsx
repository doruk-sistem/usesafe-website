import { cn } from "@/utils/cn";

import { Button, ButtonProps } from "../button";

interface ButtonSwitchAnimationProps extends ButtonProps {
  children: React.ReactNode;
  className?: string;
  icon?: React.ReactNode;
}

export default function ButtonSwitchAnimation({
  children,
  className,
  icon,
  ...props
}: ButtonSwitchAnimationProps) {
  return (
    <Button
      {...props}
      className={cn(
        "btn btn-large btn-box-shadow btn-hover-animation-switch !tw-transition-all",
        className,
      )}
    >
      <span>
        <span className="btn-text">{children}</span>
        <span className="btn-icon">{icon}</span>
        <span className="btn-icon">{icon}</span>
      </span>
    </Button>
  );
}
