import { FC, InputHTMLAttributes } from "react";
import clsx from "clsx";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  containerClass?: string;
  inputClass?: string;
  labelText?: string;
}

const Input: FC<InputProps> = ({
  containerClass,
  inputClass,
  labelText,
  placeholder,
  type,
  id,
  name,
  ...props
}) => {
  return (
    <div
      className={clsx(
        "w-full px-4 py-2 flex flex-col border rounded-md mb-4",
        containerClass
      )}
    >
      <label htmlFor={name} className="text-sm font-bold">
        {labelText}
      </label>
      <input
        type="text"
        placeholder={placeholder}
        id={id}
        name={name}
        className={clsx("outline-none", inputClass)}
      />
    </div>
  );
};

export default Input;
