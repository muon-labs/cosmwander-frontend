import clsx from "clsx";
import React, { PropsWithChildren } from "react";
import { HTMLMotionProps, motion } from "framer-motion";
import { useClient } from "../../providers/ClientProvider";
import { Chain } from "../../interfaces/chains";

type ButtonAttributes = React.ButtonHTMLAttributes<HTMLButtonElement> & HTMLMotionProps<"button">;

interface Props {
  scale?: "md" | "lg";
  color?: Chain;
}

const SimpleButton: React.FC<PropsWithChildren<ButtonAttributes> & Props> = ({ children, className, scale = "md", color, ...props }) => {
  const { chain } = useClient();
  const colorChain = color ? color : chain;
  return (
    <motion.button
      className={clsx(
        `bg-chain-${colorChain}-800 border-chain-${colorChain}-400 hover:bg-chain-${colorChain}-400 hover:border-chain-${colorChain}-200 rounded-[4px] text-grey-100 border  disabled:bg-gray-400 disabled:text-gray-800 disabled:hover:bg-gray-400 transitio-all duration-150 ease-in`,
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
