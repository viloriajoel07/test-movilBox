import { ButtonHTMLAttributes, FC } from "react";
import clsx from "clsx";
import { Icon } from "@iconify/react";

interface buttonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "fill" | "outline" | "default";
  icon?: string;
  buttonClass?: string;
  event?: () => void;
  iconClass?: string;
}

const Button: FC<buttonProps> = ({
  variant = "default",
  icon,
  buttonClass,
  children,
  event,
  type,
  iconClass,
  ...props
}) => {
  const buttonStyle = {
    fill: "bg-green-400 px-4 py-2 text-white rounded-lg",
    outline: "border-2 border-gray-400 px-4 py-2 text-gray-400 rounded-lg",
    default: "px-4 py-2",
  }[variant];

  return (
    <button
      className={clsx("flex items-center gap-x-2", buttonStyle, buttonClass)}
      type={type}
      onClick={event}
    >
      {icon && <Icon icon={icon} className={clsx("w-6 h-6", iconClass)} />}
      {children}
    </button>
  );
};

export default Button;
