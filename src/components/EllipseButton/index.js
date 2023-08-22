import React from 'react'

export default function EllipseButton({active, className, text, onClick, p, size, fontSize}) {
  return (
    <span className={
        `flex border-gray-400 ${className?className:''} justify-center rounded-full 
        ${active?' bg-blue-300 border-0':'bg-transparent border-2'}
        `} style={{width: `${size?size:30}px`, height: `${size?size:30}px`, padding:`${p?p:6}px`}}>
      <div onClick={onClick} className={`w-full h-full flex ${active ? 'bg-blue-700 text-white' : 'bg-gray-400 text-gray-700'} rounded-full items-center justify-center text-center`}>
        <p className={`${active? 'text-gray-200':'text-gray-700'}`} style={{fontSize: fontSize?fontSize: 36}}>{text}</p>
      </div>
    </span>
  )
}
