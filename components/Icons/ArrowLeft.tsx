import React from "react";
import { IconsCommonProps } from "./IconsInterface";

const ArrowRight: React.FC<IconsCommonProps> = ({ color = "cw-grey-400" }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="6" height="12" fill="none" viewBox="0 0 6 12">
      <path
        className={color}
        d="M.004 6.108c.022.237.111.46.254.639L4.1 11.57c.182.244.446.398.732.425.288.028.574-.068.794-.27a1.21 1.21 0 00.094-1.647L2.471 6 5.72 1.923c.194-.23.294-.536.28-.846-.02-.31-.154-.6-.374-.801a1.024 1.024 0 00-.794-.271A1.034 1.034 0 004.1.43L.26 5.253c-.189.237-.28.545-.255.855z"
      ></path>
    </svg>
  );
};

export default ArrowRight;
