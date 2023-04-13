import React from "react";

const UploadIcon: React.FC<React.SVGAttributes<HTMLOrSVGElement>> = ({ ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M16 16L12 12 8 16"></path>
      <path d="M12 12L12 21"></path>
      <path d="M20.39 18.39A5 5 0 0018 9h-1.26A8 8 0 103 16.3"></path>
      <path d="M16 16L12 12 8 16"></path>
    </svg>
  );
};

export default UploadIcon;
