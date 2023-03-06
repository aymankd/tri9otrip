import { useRef, useCallback, InputHTMLAttributes } from "react";

type CheckBoxProps = {
  icon: JSX.Element;
};

export const CheckBox = ({
  icon,
  className,
  ...props
}: CheckBoxProps & InputHTMLAttributes<HTMLInputElement>) => {
  /* ---------------------------------- Refs ---------------------------------- */
  const inputRef = useRef<HTMLInputElement>(null);
  /* -------------------------------- Callbacks ------------------------------- */
  const onCheckboxClick = useCallback(() => {
    inputRef.current?.click();
  }, [inputRef]);
  return (
    <div
      onClick={onCheckboxClick}
      className={`checkbox-label flex items-center justify-between rounded-xl border-2 py-2 px-4 ${className}`}
    >
      {icon}
      <input
        type="checkbox"
        className="form-checkbox absolute h-6 w-6 opacity-0"
        ref={inputRef}
        {...props}
      />
      <div className="flex h-6 w-6 flex-shrink-0 cursor-pointer items-center justify-center rounded-md border-2 border-gray-300 bg-white focus-within:border-success-300">
        <svg
          className="pointer-events-none hidden h-5 w-5 bg-success-300 fill-current"
          version="1.1"
          viewBox="-3 0 25 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g fill="none" fillRule="evenodd">
            <g transform="translate(-9 -11)" fill="#fff" fillRule="nonzero">
              <path d="m25.576 15.414c0.56558 0.55188 0.56558 1.4439 0 1.9961l-9.404 9.176c-0.28213 0.27529-0.65247 0.41385-1.0228 0.41385-0.37034 0-0.74068-0.13855-1.0228-0.41385l-4.7019-4.588c-0.56584-0.55188-0.56584-1.4442 0-1.9961 0.56558-0.55214 1.4798-0.55214 2.0456 0l3.679 3.5899 8.3812-8.1779c0.56558-0.55214 1.4798-0.55214 2.0456 0z" />
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
};
