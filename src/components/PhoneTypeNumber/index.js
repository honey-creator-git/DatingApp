import React from 'react';
import SelectBox from '../SelectBox';
import InputText from '../InputText';

export default function PhoneTypeNumber({value, onChange, options, name, placeholder, type}) {
    return (
        <div className="w-full flex flex-row justify-start items-start h-[50px] border-gray-400 custom-border-width custom-border-radius">
            <div className="relative custom-select-border">
                <select
                    className="block appearance-none w-full rounded-full border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 shadow leading-tight focus:outline-none focus:shadow-outline custom-select"
                    value={value}
                    onChange={onChange}
                >
                    {options.map(option => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                    ))}
                </select>
                <div className="absolute h-[50px] right-0 flex items-center px-4 pointer-events-none t-custom-0">
                    <svg
                    className="w-4 h-4 fill-current text-blue-500"
                    viewBox="0 0 20 20"
                    >
                    <path
                        fillRule="evenodd"
                        d="M10 12l-6-6h12l-6 6z"
                    />
                    </svg>
                </div>
            </div>
            <div className="custom-input-border">
                <input
                    className="w-full text-[20px] h-[50px] text-black custom-input"
                    name={name}
                    placeholder={placeholder}
                    type={type}
                />
            </div>
        </div>
    );
}