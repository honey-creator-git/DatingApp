import React from 'react'

export default function AdminFooter() {
    return (
        <div className='flex flex-row justify-start items-center w-full h-[40px] mt-3 mb-10'>
            <img className="bottom-img w-auto h-auto" src={process.env.PUBLIC_URL + "/images/BottomGroup.png"} alt="Bottom Logo" />
        </div>
    );
}