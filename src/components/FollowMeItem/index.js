import React from 'react';

export default function FollowMeItem({ followMeIcon, email }) {
    return (
        <div className='w-full mx-auto flex items-center justify-center'>
            <button className='w-full mx-auto flex flex-row justify-between items-center h-[63px] rounded-[25px] bg-[#3760CB] px-4 shadow-2xl'>
                <div className='w-[45px] h-[45px]'><img src={process.env.PUBLIC_URL + `/images/${followMeIcon}`} alt="Follow Me Item First" /></div>
                <div><span className='font-bold text-[13.5px] text-white'>{email}</span></div>
                <div><img src={process.env.PUBLIC_URL + "/images/FollowMeEdit.png"} alt="Follow Me Edit Icon" /></div>
            </button>
        </div>
    );
}