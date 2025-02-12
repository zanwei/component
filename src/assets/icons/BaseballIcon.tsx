import React from 'react';

interface BaseballIconProps {
  className?: string;
  width?: number;
  height?: number;
  style?: React.CSSProperties;
  'aria-hidden'?: boolean | string;
}

export const BaseballIcon: React.FC<BaseballIconProps> = ({ 
  className, 
  width = 24, 
  height = 24,
  style,
  ...props 
}) => {
  return (
    <svg 
      viewBox="0 0 24 24" 
      className={className}
      width={width}
      height={height}
      style={{ fill: 'currentColor', ...style }}
      {...props}
    >
      {/* 这里放 baseball.svg 的路径数据 */}
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
    </svg>
  );
}; 