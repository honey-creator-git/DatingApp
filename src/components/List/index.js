import React, { useState } from 'react'

function ListItem({item, onItemClick, checked}) {
    console.log(checked)
    return (
        <li className='py-3 border-b-2 items-center flex hover:bg-gray-200'  onClick={()=>onItemClick(item)}>
            <div className='px-3'>
                <input className='w-4 h-4' type='checkbox' checked={checked} />
            </div>
            <span>
                <img className='w-8 h-8' src={`${item.image}`} />
            </span>
            <p className='ml-3 text-lg font-medium'>
                {item.lang}
            </p>
        </li>
    )
}


export default function List({items, selectedItem, className, onItemClick}) {
  return (
    <ul className={`${className}`}>
        {items.map((item, idx) => (
            <ListItem key={idx} checked={selectedItem === item} item={item} onItemClick = {onItemClick}/>
        ))}
    </ul>
  )
}
