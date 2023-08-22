import React from 'react'

export default function TextArea({bgColor, value, rows, className, fontSize}) {

  return (
    <div className={`bg-[${bgColor}] ${className}`}>
        <textarea className={`w-full border-0 hover:border-0 focus-within:bottom-0 focus:outline-none focus-visible:border-0 resize-none bg-[${bgColor}] text-[${fontSize}]`} rows={rows?rows:10}>
            {value}
        </textarea>
    </div>
  )
}
