import clsx from "clsx";
import React, { PropsWithChildren } from "react";

interface Props {
  bg: string;
  border?: string;
  text?: string;
}

const Tag: React.FC<PropsWithChildren<Props>> = ({ children, bg, border, text }) => {
  return <p className={clsx(" py-[2px] px-[8px] rounded-[3px]", bg, border, text ? text : "text-cw-grey-850 font-extrabold")}>{children}</p>;
};

export default Tag;
