import React from 'react';

function Button({ id, text, onClick, className, size, bgColor, itemsStart}) {
  return (
    <button
      id={id}
      className={`bg-gradient-to-b font-bold w-full rounded-2xl text-center shadow-2xl ${className?className:''} ${size?`h-[${size}]`:'h-[50px] hover:bg-blue-700'} ${bgColor?`bg-${bgColor}`:'bg-[#05B7FD]'} ${itemsStart=='true' ? 'items-start' : 'items-center'} `}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default Button;