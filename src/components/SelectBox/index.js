import React, { useEffect, useState } from 'react';

function SelectBox({ className1, className2, options, onChange, placeholder, value, size, span, customization, textColor, backgroundColor, arrowColor, borderColor, borderWidth, textSize, fontWeight, borderRightNone, borderLeftNone, setRules, borderNone, shadowNone, pl, pr, px, iconColor, rounded, textAlign}) {
  
  // ${size?`h-[${size}]`:'h-[50px]'}

  return (
    <div className={`relative ${rounded ? rounded : 'rounded-full'} w-full ${span?`col-span-${span}`:''} ${backgroundColor?backgroundColor:''} ${borderWidth} ${borderRightNone=="true"?'rounded-r-none':''} ${borderLeftNone=="true"?'rounded-l-none':''}`}>
      <select
        style={{whiteSpace: 'pre-wrap'}}
        className={
          `block w-full ${pl ? pl : ''} ${px? `${px}` : 'px-4'} py-2 ${pr? `${pr}` : 'pr-8'} ${size} ${shadowNone? `shadow-none` : `shadow`} ${borderNone? `border-none` : 'border'} leading-tight rounded-full focus:outline-none focus:shadow-outline h-[100%] bg-transparent ${textColor} ${borderColor} ${textSize} ${fontWeight} ${borderRightNone=="true"?'rounded-r-none':''} ${borderLeftNone=="true"?'rounded-l-none':''} ${className1} focus:outline-none focus:ring-0 ${textAlign ? textAlign : 'text-center'}`}
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
      <div style={{top: '2px'}} className={`${borderWidth} border-[#CFCFCF] border-t-0 border-r-0 border-b-0 pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 bg-transparent ${customization=='true' ? 'custom-dropdownicon': ''} ${setRules=='true' ? 'set-rules-dropdown-icon':''} ${className2}`}>
        <svg
          className={`w-8 h-8 fill-current text-blue-500 ${arrowColor} ${iconColor}`}
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

export default SelectBox;