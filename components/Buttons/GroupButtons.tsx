import React from "react";
import { motion } from "framer-motion";
import clsx from "clsx";
import GroupButtonsSkeleton from "../Skeletons/GroupButtonsSkeleton";

interface Props {
  handlerTab: (key: string) => void;
  selectedTab: string;
  tabs: {
    content: React.ReactElement | string;
    key: string;
  }[];
  color?: string;
  skeleton?: boolean;
}

const GroupButtons: React.FC<Props> = ({ tabs, selectedTab, handlerTab, skeleton }) => {
  if (skeleton) return <GroupButtonsSkeleton tabs={tabs} />;

  const Tabs = tabs.map(({ content, key }) => {
    return (
      <motion.button
        key={key}
        className={clsx(
          "flex-1 p-4 flex justify-center items-center w-full relative transition border duration-150 ease-in-out rounded-[8px]",
          key === selectedTab ? `bg-chain-800 border-chain-400 hover:bg-chain-400 hover:border-chain-200` : "bg-transparent border-transparent"
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
