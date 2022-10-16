import clsx from "clsx";
import React from "react";

interface Props extends React.HTMLProps<HTMLDivElement> {
  bg?: string;
}

const DefaultSkeleton: React.FC<Props> = ({ bg, className, ...props }) => {
  return (
    <div
      className={clsx(
        `animate-pulse`,
        className,
        { "bg-cw-grey-700": !className?.includes("bg-") },
        { "h-full": !className?.includes("h-") },
        { "w-full": !className?.includes("w-") },
        { "rounded-[8px]": !className?.includes("rounded-") }
      )}
      {...props}
    />
  );
};

export default DefaultSkeleton;
