import React from 'react';

interface IconProps {
  width?: number | string;
  height?: number | string;
  color?: string;
}

const IconClose: React.FC<IconProps> = ({ 
  width = 20, 
  height = 15, 
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
        d="M13.834 13.031L7.8 7l6.034-6.031a.568.568 0 0 0-.8-.8L7 6.2.969.166a.568.568 0 0 0-.8.8L6.2 7 .166 13.031a.568.568 0 1 0 .8.8L7 7.8l6.031 6.031a.568.568 0 0 0 .8-.8z"
        fill={color}
      />
    </svg>
  );
};

export default IconClose;