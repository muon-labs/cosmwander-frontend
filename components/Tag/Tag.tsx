import clsx from "clsx";
import React, { PropsWithChildren } from "react";

interface Props {
  bg: string;
}

const Tag: React.FC<PropsWithChildren<Props>> = ({ children, bg }) => {
  return (
    <p className={clsx("text-cw-grey-850 py-[4px] px-[6px] rounded-lg", bg)}>
      {children}
    </p>
  );
};

export default Tag;
