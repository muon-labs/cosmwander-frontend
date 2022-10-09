import React from "react";
import { IconsCommonProps } from "./IconsInterface";

const ArrowRight: React.FC<IconsCommonProps> = ({ color = "fill-cw-grey-400" }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="6" height="12" fill="none" viewBox="0 0 6 12">
      <path
        className={color}
        d="M5.996 5.892a1.198 1.198 0 00-.254-.639L1.9.43a1.043 1.043 0 00-.732-.425 1.024 1.024 0 00-.794.27A1.21 1.21 0 00.28 1.923L3.529 6 .28 10.077c-.194.23-.294.536-.28.846.02.31.154.6.374.801.22.203.506.299.794.271.288-.027.552-.181.732-.425l3.84-4.823c.189-.237.28-.545.255-.855z"
      ></path>
    </svg>
  );
};

export default ArrowRight;
