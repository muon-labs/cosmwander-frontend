import React from "react";
import { IconsCommonProps } from "./IconsInterface";

const MinusIcon: React.FC<IconsCommonProps> = ({ color = "fill-cw-grey-400" }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="6" height="3" fill="none" viewBox="0 0 6 3">
      <path
        className={color}
        d="M1.096 2.076a.94.94 0 01-.666-.252.916.916 0 01-.252-.648c0-.264.084-.48.252-.648a.94.94 0 01.666-.252H4.93c.252 0 .462.084.63.252.18.168.27.384.27.648 0 .252-.09.468-.27.648a.855.855 0 01-.63.252H1.096z"
      ></path>
    </svg>
  );
};

export default MinusIcon;
