import React, { useState } from 'react';

export default function InputText2({type, name, value, placeholder, className, onChange, icon_, icon}) {
    return (
        <div className={`flex items-center rounded-full border-2 border-gray-200 hover:border-gray-800 h-[50px] text-[20px] ${className}`}>
                {icon_}                   
            <input
                type={type}
                className="appearance-none bg-transparent flex-1 border-none w-full text-gray-500 mr-3 ml-2 py-1 px-2 leading-tight focus:outline-none"
                placeholder={placeholder}
                name={name}
                value={value}
                onChange={onChange}
            />
            <div className='mr-3'>
                {icon}                   
            </div>
        </div>
    );
}