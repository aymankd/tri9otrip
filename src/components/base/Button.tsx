import { memo } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button: React.FC<ButtonProps> = memo(
  ({ className, children, ...props }) => {
    return (
      <button
        {...props}
        type="button"
        className={`w-2/5 gap-3 rounded-full px-2 py-1 ${className}`}
      >
        {children}
      </button>
    );
  },
  function (prev, next) {
    return true;
  }
);
