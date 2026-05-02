import React from "react";

interface IconProps {
  width?: number | string;
  height?: number | string;
  color?: string;
}

const IconUser: React.FC<IconProps> = ({
  width = 20,
  height = 20,
  color = "currentColor",
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 20 20"
      fill={color}
      aria-hidden="true"
      focusable="false"
    >
      <path d="M10,0a5.273,5.273,0,1,0,5.273,5.273A5.279,5.279,0,0,0,10,0Zm0,9.375a4.1,4.1,0,1,1,4.1-4.1A4.106,4.106,0,0,1,10,9.375Z" />
      <path d="M16.561,13.992a7.518,7.518,0,0,0-5.389-2.273H8.828a7.518,7.518,0,0,0-5.389,2.273,7.685,7.685,0,0,0-2.228,5.422A.586.586,0,0,0,1.8,20H18.2a.586.586,0,0,0,.586-.586A7.685,7.685,0,0,0,16.561,13.992ZM2.409,18.828a6.485,6.485,0,0,1,6.42-5.937h2.344a6.485,6.485,0,0,1,6.42,5.938Z" />
    </svg>
  );
};

export default IconUser;
