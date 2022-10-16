import clsx from "clsx";
import React from "react";
import DefaultSkeleton from "./DefaultSkeleton";

const GroupButtonsSkeleton: React.FC<{ tabs: any[] }> = ({ tabs }) => {
  return (
    <div className="h-[51px] inline-flex bg-cw-grey-800 rounded-[8px] my-5 animate-pulse">
      {tabs.map((_, i) => {
        return <DefaultSkeleton key={`skeleton-button-${i}`} className={`h-full w-[128px] ${i >= 1 && "bg-cw-grey-800"}`} />;
      })}
    </div>
  );
};

export default GroupButtonsSkeleton;
