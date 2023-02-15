import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { memo, useCallback, createRef, useState, useMemo } from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  Icon?: JSX.Element;
  id: string;
}

export const Input: React.FC<InputProps> = memo(
  ({ id, className, type = "text", Icon, placeholder, ...props }) => {
    return (
      <div className={`relative ${className}`}>
        <input
          type={type}
          id={id}
          className="peer block w-full appearance-none rounded-lg border-2 border-gray-200 bg-gray-50 px-2.5 pb-2.5 pt-5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 "
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
    return true;
  }
);

// export const Input: React.FC<InputProps> = memo(
//   ({ className, inputClassName, Icon, type = "text", ...props }) => {
//     const inputRef = createRef<HTMLInputElement>();
//     const [inputType, setInputType] = useState(type);
//     const showpassword = useCallback(() => {
//       setInputType((prev) => (prev === "text" ? "password" : "text"));
//     }, [setInputType]);
//     const eyeIcon = useMemo(
//       () => (inputType === "text" ? faEyeSlash : faEye),
//       [inputType]
//     );

//     return (
//       <div className={`flex gap-3 ${className} border-b-2 px-2 py-1 `}>
//         {Icon ? Icon : null}
//         <input
//           {...props}
//           className={`h-full w-full ${inputClassName} outline-0`}
//           type={inputType}
//           id="lname"
//           name="lname"
//           ref={inputRef}
//         />
//         {type === "password" ? (
//           <FontAwesomeIcon
//             icon={eyeIcon}
//             color={"grey"}
//             onClick={showpassword}
//           />
//         ) : null}
//       </div>
//     );
//   },
//   function (prev, next) {
//     return true;
//   }
// );
