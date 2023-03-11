import { memo } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button: React.FC<ButtonProps> = ({
  className,
  children,
  ...props
}) => {
  return (
    <button
      {...props}
      type="button"
      className={`gap-3 rounded-full px-2 py-1 ${className}`}
    >
      {children}
    </button>
  );
};
