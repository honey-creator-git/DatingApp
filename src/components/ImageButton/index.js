import React from 'react';

function ImageButton({ src, alt, onClick, className, text }) {
  return (
    <button
      className={`bg-transparent border-none p-0 m-0 focus:outline-none ${className?className:''}`}
      onClick={onClick}
    >
      <img src={src} alt={alt} className="h-10 w-10" />
      {text}
    </button>
  );
}

export default ImageButton;