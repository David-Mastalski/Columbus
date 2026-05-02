import React from 'react';

interface IconProps {
  width?: number | string;
  height?: number | string;
  color?: string;
}

const IconSearch: React.FC<IconProps> = ({ 
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
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <circle
        cx="8.02"
        cy="8.02"
        r="7.44"
        stroke={color}
        strokeWidth="1.15"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <line
        x1="13.28"
        y1="13.28"
        x2="19"
        y2="19"
        stroke={color}
        strokeWidth="1.15"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default IconSearch;