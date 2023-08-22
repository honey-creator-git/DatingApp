import React, { useEffect, useState } from 'react';

function Selecter({ options, onChange, placeholder, value, size, span, customization, textColor, backgroundColor, arrowColor, borderColor, borderWidth, textSize, fontWeight, borderRightNone, borderLeftNone, setRules }) {

    return (
        <div className={`relative rounded-full w-full ${size ? `h-[${size}]` : 'h-[50px]'} ${span ? `col-span-${span}` : ''} ${backgroundColor ? backgroundColor : ''} ${borderWidth} ${borderRightNone == "true" ? 'rounded-r-none' : ''} ${borderLeftNone == "true" ? 'rounded-l-none' : ''}`}>
            <select
                className={`block w-full py-2 leading-tight rounded-full focus:outline-none focus:shadow-outline max-w-[120px] h-[100%] bg-transparent ${textColor} ${borderColor} ${textSize} ${fontWeight} ${borderRightNone == "true" ? 'rounded-r-none' : ''} ${borderLeftNone == "true" ? 'rounded-l-none' : ''}`}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
            >
                {options.map(option => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </select>
            <div style={{ top: '2px' }} className={`${borderWidth} border-[#CFCFCF] border-t-0 border-r-0 border-b-0 pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 bg-transparent ${customization == 'true' ? 'custom-dropdownicon' : ''} ${setRules == 'true' ? 'set-rules-dropdown-icon' : ''}`}>
                <svg
                    className={`w-6 h-6 fill-current text-blue-500 ${arrowColor}`}
                    viewBox="0 0 20 20"
                >
                    <path
                        fillRule="evenodd"
                        d="M10 12l-6-6h12l-6 6z"
                    />
                </svg>
            </div>
        </div>
    );
}

export default Selecter;