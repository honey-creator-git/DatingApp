import React from 'react';

export default function PersonalComments({ userAvatar, userName, duration, content }) {
    return (
        <div className='w-full mx-auto flex flex-col justify-center items-center'>
            <div className='w-full mx-auto flex flex-row justify-start items-center'>
                <div className='w-[36px] h-[36px] mr-2'><img src={process.env.PUBLIC_URL + `/images/${userAvatar}`} alt="Crystal Comment Item" /></div>
                <div className='mr-2'><span className='font-bold text-[14.4px]'>{userName}</span></div>
                <div><span className='font-bold text-[14.4px] opacity-20'>{duration}</span></div>
            </div>
            <div className='w-full mx-auto flex flex-row justify-start items-center mt-2'>
                <span className='font-bold text-[14.4px]'>{content}</span>
            </div>
            <div className='w-full mx-auto flex flex-row justify-start items-center flex-wrap mt-5'>
                <button className='mr-5 mb-3'><span className='font-bold text-[14.4px] opacity-20'>1 like</span></button>
                <button className='mr-5 mb-3'><span className='font-bold text-[14.4px] opacity-20'>Reply</span></button>
                <button className='mr-5 mb-3'><span className='font-bold text-[14.4px] opacity-20'>See Translation</span></button>
            </div>
        </div>
    );
}