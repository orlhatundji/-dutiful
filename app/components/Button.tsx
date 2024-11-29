import React from "react";
import { twMerge } from "tailwind-merge";

type ButtonProps = {
  title: string;
  className?: string;
  children?: React.ReactNode;
};
const Button: React.FC<ButtonProps> = ({
  title = "Button",
  className,
  children,
}) => {
  return (
    <button
      className={twMerge(
        "bg-transparent hover:bg-primary hover:border-white hover:text-white text-primary text-sm font-circular-std-medium", 
        "hover:text-white py-2 px-4 border-[0.125rem] border-primary hover:border-transparent rounded-md",
        className,
      )}
    >
      {children ? children : title}
    </button>
  );
};

export default Button;
