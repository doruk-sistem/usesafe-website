import { Button, ButtonProps } from "../button";
import { cn } from "@/utils/cn";

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
        className
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
