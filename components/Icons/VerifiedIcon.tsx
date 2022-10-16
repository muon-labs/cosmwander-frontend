import React from "react";
import { IconsCommonProps } from "./IconsInterface";

const VerifiedIcon: React.FC<IconsCommonProps> = ({ color = "fill-cw-grey-400" }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" fill="none" viewBox="0 0 21 21">
      <circle cx="10.5" cy="10.5" r="10.5" className={color}></circle>
      <path
        fill="#fff"
        d="M15.793 8.33l-6.691 6.69a.338.338 0 01-.479 0L5.14 11.537a.338.338 0 010-.479l1.037-1.037a.339.339 0 01.478 0l2.21 2.21L14.28 6.82a.338.338 0 01.479 0l1.037 1.034a.338.338 0 010 .478l-.003-.003z"
      ></path>
    </svg>
  );
};

export default VerifiedIcon;
