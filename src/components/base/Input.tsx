import { memo } from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  Icon?: JSX.Element;
  id: string;
}

export const Input: React.FC<InputProps> = memo(
  ({ id, className, type = "text", Icon, placeholder, ...props }) => {
    return (
      <div className={`relative ${className}`}>
        <input
          {...props}
          type={type}
          id={id}
          className="peer block w-full appearance-none rounded-lg border-2 border-gray-200 px-2.5 pb-2.5 pt-5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 "
          placeholder=" "
        />
        <label
          htmlFor={id}
          className="absolute top-4 left-2.5 z-10 origin-[0] -translate-y-4 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-blue-600 "
        >
          {placeholder}
        </label>
      </div>
    );
  },
  function (prev, next) {
    return prev.value === next.value;
  }
);
