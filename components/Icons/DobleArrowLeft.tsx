import React from "react";
import { IconsCommonProps } from "./IconsInterface";

const DobleArrowRight: React.FC<IconsCommonProps> = ({ color = "fill-cw-grey-400" }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="11" height="12" fill="none" viewBox="0 0 11 12">
      <path
        className={color}
        d="M5.004 6.108c.022.237.111.46.254.639L9.1 11.57c.182.244.446.398.732.425.288.028.574-.068.794-.27a1.21 1.21 0 00.094-1.647L7.471 6l3.248-4.077c.194-.23.295-.536.28-.846-.02-.31-.154-.6-.374-.801a1.024 1.024 0 00-.794-.271A1.034 1.034 0 009.1.43L5.26 5.253c-.189.237-.28.545-.255.855z"
      ></path>
      <rect width="2" height="12" x="2" y="12" className={color} rx="1" transform="rotate(-180 2 12)"></rect>
    </svg>
  );
};

export default DobleArrowRight;
