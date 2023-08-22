import React from 'react'

export default function HeaderAdmin({ onClick }) {
    return (
        <div className='admin-header'>
            <div className="flex flex-row justify-start items-start pt-10 pl-5">
                <div className="burger-admin">
                    <button onClick={onClick} className='w-[20px] h-[20px]'><img className='w-full' src={ process.env.PUBLIC_URL + "/images/Burger.png" } alt="Burger Image" /></button>
                </div>
                <div className='flex flex-col justify-center items-center ml-5'>
                    <div className='text-[28px] font-bold text-white'>Following</div>
                    <div className='flex flex-row justify-center items-center flex-wrap mt-5'>
                        <div className='mr-5'><img src={process.env.PUBLIC_URL + '/images/AdminFollowing1.png'} /></div>
                        <div className='mr-5'><img src={process.env.PUBLIC_URL + '/images/AdminFollowing2.png'} /></div>
                        <div className='mr-5'><img src={process.env.PUBLIC_URL + '/images/AdminFollowing3.png'} /></div>
                        <div className='mr-5'><img src={process.env.PUBLIC_URL + '/images/AdminFollowing4.png'} /></div>
                        <div className='mr-5'><img src={process.env.PUBLIC_URL + '/images/AdminFollowing5.png'} /></div>
                        <div className='mr-5'><img src={process.env.PUBLIC_URL + '/images/AdminFollowing4.png'} /></div>
                        <div className='mr-5'><img src={process.env.PUBLIC_URL + '/images/AdminFollowing6.png'} /></div>
                    </div>
                </div>
            </div>
        </div>
    )
}