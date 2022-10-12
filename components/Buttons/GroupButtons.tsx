import React from "react";
import { motion } from "framer-motion";
import clsx from "clsx";
import { useClient } from "../../providers/ClientProvider";
import { Chain } from "../../interfaces/chains";

interface Props {
  handlerTab: (key: string) => void;
  selectedTab: string;
  tabs: {
    content: React.ReactElement | string;
    key: string;
  }[];
  color?: Chain;
}

const GroupButtons: React.FC<Props> = ({ tabs, selectedTab, handlerTab, color }) => {
  const { chain } = useClient();
  const colorChain = color ? color : chain;
  const Tabs = tabs.map(({ content, key }) => {
    return (
      <motion.button
        key={key}
        className={clsx(
          "flex-1 p-4 flex justify-center items-center w-full relative transition border duration-150 ease-in-out rounded-[8px]",
          key === selectedTab
            ? `bg-chain-${colorChain}-800 border-chain-${colorChain}-400 hover:bg-chain-${colorChain}-400 hover:border-chain-${colorChain}-200`
            : "bg-transparent border-transparent"
        )}
        onClick={() => handlerTab(key)}
      >
        {content}
      </motion.button>
    );
  });
  return (
    <div className="inline-flex border-cw-grey-700 border bg-cw-grey-800 rounded-[8px]" role="group">
      {Tabs}
    </div>
  );
};

export default GroupButtons;
