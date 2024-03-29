import React from "react";
import { IconsCommonProps } from "./IconsInterface";

const PlusIcon: React.FC<IconsCommonProps> = ({ color = "fill-cw-grey-400", ...props }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="11" height="10" fill="none" viewBox="0 0 11 10" {...props}>
      <path
        className={color}
        d="M5.504 9.424c-.264 0-.468-.072-.612-.216-.144-.156-.216-.366-.216-.63V5.626H1.778c-.252 0-.45-.066-.594-.198-.144-.144-.216-.342-.216-.594 0-.252.072-.444.216-.576.144-.144.342-.216.594-.216h2.898V1.18c0-.264.072-.468.216-.612.144-.144.354-.216.63-.216.264 0 .462.072.594.216.144.144.216.348.216.612v2.862H9.23c.264 0 .462.072.594.216.144.132.216.324.216.576 0 .252-.072.45-.216.594-.132.132-.33.198-.594.198H6.332v2.952c0 .264-.072.474-.216.63-.132.144-.336.216-.612.216z"
      ></path>
    </svg>
  );
};

export default PlusIcon;
