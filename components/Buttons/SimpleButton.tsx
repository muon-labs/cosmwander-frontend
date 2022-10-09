import clsx from "clsx";
import React, { PropsWithChildren } from "react";
import { HTMLMotionProps, motion } from "framer-motion";

type ButtonAttributes = React.ButtonHTMLAttributes<HTMLButtonElement> & HTMLMotionProps<"button">;

interface Props {
  scale?: "md" | "lg";
}

const SimpleButton: React.FC<PropsWithChildren<ButtonAttributes> & Props> = ({ children, className, scale = "md", ...props }) => {
  return (
    <motion.button
      className={clsx(
        "bg-cw-purple-600 hover:bg-purple-500 rounded-[4px] text-grey-100 border border-cw-purple-500 disabled:bg-gray-400 disabled:text-gray-800 disabled:hover:bg-gray-400 transitio-all duration-150 ease-in",
        className,
        scale === "md" && "text-base px-2 py-1",
        scale === "lg" && "text-lg px-8 py-5 "
      )}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default SimpleButton;
