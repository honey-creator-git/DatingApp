import React from 'react';

export default function PaymentTypeAdd({value, onChange, options, name, placeholder, type}) {
    return (
        <div className="w-full flex flex-row justify-start items-start h-[50px] border-gray-400 border-2 custom-border-radius">
            <div className="relative custom-select-border-2"><button className="w-full h-full rounded-2xl"><span className="text-[16px] font-medium">Add</span></button></div>
            <div className="flex flex-col justify-center items-center custom-input-border">
                <input
                    className="w-full h-full text-[20px] text-black custom-input"
                    name={name}
                    placeholder={placeholder}
                    type={type}
                />
            </div>
        </div>
    );
}