import React from "react";
import { IconsCommonProps } from "./IconsInterface";

const ArrowIcon: React.FC<IconsCommonProps> = ({ color = "fill-cw-grey-300", className }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="9" fill="none" viewBox="0 0 16 9" className={className}>
      <path
        className={color}
        d="M8.144 8.994c.315-.032.613-.167.851-.381l6.432-5.762c.325-.272.53-.669.567-1.098a1.659 1.659 0 00-.362-1.19 1.503 1.503 0 00-1.069-.558 1.502 1.502 0 00-1.127.417L8 5.293 2.564.422a1.517 1.517 0 00-1.128-.42C1.023.031.637.232.368.562a1.66 1.66 0 00-.362 1.191 1.6 1.6 0 00.567 1.098l6.432 5.762a1.5 1.5 0 001.139.38z"
      ></path>
    </svg>
  );
};

export default ArrowIcon;
