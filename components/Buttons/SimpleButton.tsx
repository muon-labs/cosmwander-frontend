import clsx from "clsx";
import React, { PropsWithChildren } from "react";
import { HTMLMotionProps, motion } from "framer-motion";
import { useTheme } from "../../providers/ThemeProvider";
import { Chain } from "../../interfaces/chains";

type ButtonAttributes = React.ButtonHTMLAttributes<HTMLButtonElement> & HTMLMotionProps<"button">;

interface Props {
  scale?: "md" | "lg";
  color?: Chain;
}

const SimpleButton: React.FC<PropsWithChildren<ButtonAttributes> & Props> = ({ children, className, scale, color, ...props }) => {
  const { chainColor } = useTheme();
  const pageColor = color ? color : chainColor;
  return (
    <motion.button
      className={clsx(
        `bg-chain-${pageColor}-800 border-chain-${pageColor}-400 hover:bg-chain-${pageColor}-400 hover:border-chain-${pageColor}-200 rounded-[4px] text-grey-100 border  disabled:bg-gray-400 disabled:border-gray-400 disabled:text-gray-800 disabled:hover:bg-gray-400 transitio-all duration-150 ease-in disabled:cursor-not-allowed`,
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
