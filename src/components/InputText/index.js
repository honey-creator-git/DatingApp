import React from 'react';

export default function InputText({ name, placeholder, type, className, size, bgColor, border, onClick }) {
    return (
        <input
            className={`w-full text-[12px] border-2 border-[${border ? border : `#3760CB`}] rounded-2xl py-2 px-4 ${className ? className : ''} ${size ? `h-[${size}]` : 'h-[50px]'} ${bgColor ? `bg-${bgColor}` : 'bg-transparent'} `}
            name={name}
            placeholder={placeholder}
            type={type}
            onChange={onClick}
        />
    );
}