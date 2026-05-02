import React from 'react';

interface IconProps {
  width?: number | string;
  height?: number | string;
  color?: string;
}

const IconCart: React.FC<IconProps> = ({ 
  width = 20, 
  height = 20, 
  color = "currentColor" 
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 20 20"
      aria-hidden="true"
      focusable="false"
    >
      <g transform="translate(0 20)">
        <path
          d="M0,0H-15.868l1.5-14.249H-1.5Z"
          fill="none"
          stroke={color}
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="1.172"
          transform="translate(17.934 -0.742)"
        />
        <path
          d="M0,0V-3.1A3.039,3.039,0,0,1,3.039-6.143h0A3.039,3.039,0,0,1,6.078-3.1V0"
          fill="none"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="1.172"
          transform="translate(6.961 -13.114)"
        />
      </g>
    </svg>
  );
};

export default IconCart;