import clsx from "clsx";
import React, { PropsWithChildren } from "react";

interface Props {
  bg: string;
  border?: string;
  text?: string;
}

const Tag: React.FC<PropsWithChildren<Props>> = ({ children, bg, border, text }) => {
  return <p className={clsx(" py-[4px] px-[6px] rounded-lg", bg, border, text ? text : "text-cw-grey-850")}>{children}</p>;
};

export default Tag;
