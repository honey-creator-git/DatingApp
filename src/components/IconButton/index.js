import React from 'react'

export default function IconButton({icon, text, className, onClick}) {
  return (
    <button onClick={onClick} className={`text-white font-bold p-4 rounded-full flex items-center justify-center ${className?className:''}`}>
      {icon}
      {text}
    </button>
  )
}
