import React from 'react';

interface IconProps {
  width?: number | string;
  height?: number | string;
  color?: string;
}

const IconMenu: React.FC<IconProps> = ({ 
  width = 20, 
  height = 20, 
  color = "currentColor" 
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 14 14"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M1 3.5h12a.5.5 0 0 0 0-1H1a.5.5 0 0 0 0 1zm0 4h12a.5.5 0 0 0 0-1H1a.5.5 0 0 0 0 1zm0 4h12a.5.5 0 0 0 0-1H1a.5.5 0 0 0 0 1z"
        fill={color}
      />
    </svg>
  );
};

export default IconMenu;