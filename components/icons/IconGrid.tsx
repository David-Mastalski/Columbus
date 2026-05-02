import React from 'react';

interface IconProps {
  width?: number | string;
  height?: number | string;
  color?: string;
}

const IconGrid: React.FC<IconProps> = ({ 
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
      {[
        { x: 0.59, y: 0.59 }, { x: 7.66, y: 0.59 }, { x: 14.73, y: 0.59 },
        { x: 0.59, y: 7.66 }, { x: 7.66, y: 7.66 }, { x: 14.73, y: 7.66 },
        { x: 0.59, y: 14.73 }, { x: 7.66, y: 14.73 }, { x: 14.73, y: 14.73 }
      ].map((pos, index) => (
        <rect
          key={index}
          x={pos.x}
          y={pos.y}
          width="4.69"
          height="4.69"
          stroke={color}
          strokeWidth="1.17"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      ))}
    </svg>
  );
};

export default IconGrid;