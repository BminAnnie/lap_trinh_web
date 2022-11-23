import React from 'react';

const ButtonWrapper = ({ children, className = '' }) => {
  return (
    <div
      className={`rounded-[57px] inline-block px-[28px] pt-[10px] pb-[10px] ${className}`}
    >
      {children}
    </div>
  );
};

export default ButtonWrapper;
