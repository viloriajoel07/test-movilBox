import { FC, InputHTMLAttributes } from "react";
import clsx from "clsx";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  containerClass?: string;
  inputClass?: string;
  labelText?: string;
  changeEvent?: any;
}

const Input: FC<InputProps> = ({
  containerClass,
  inputClass,
  labelText,
  placeholder,
  type = "text",
  changeEvent,
  value,
  disabled,
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
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={changeEvent}
        id={id}
        name={name}
        disabled={disabled && disabled}
        className={clsx("outline-none", inputClass)}
      />
    </div>
  );
};

export default Input;
