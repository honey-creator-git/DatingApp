import React from 'react'
import ReactStars from "react-rating-stars-component";
import Button from '../../components/Button';

function MarketPlace__() {
  return (
    <div className='main-container'>
        <div className='-top-14 relative w-full'>
            <div className='flex flex-col w-full'>
                <div className='w-full mx-auto flex flex-row items-center justify-center'>
                    <div className='w-full flex flex-col justify-start items-center mt-14'>
                        <h3 className='text-lg' style={{lineHeight: 0.5}}><strong>VAI</strong>RIFY ID </h3>
                        <h4 className='text-sm'>897UY56</h4>
                    </div>
                    <div className='relative w-full'>
                        <img src={process.env.PUBLIC_URL + '/images/AdminFollowing1.png'} alt="Vairipay Add Logo" width={120} height={120} className='mx-auto' />
                        <div style={{right: '10px', bottom: '15px'}} className='absolute'><img src={process.env.PUBLIC_URL + '/images/HotRodIcon2.png'} alt="Hot Rod Icon Second" /></div>
                    </div>
                    <div className='w-full flex flex-col justify-start items-center mt-14'>
                        <h3 className='text-lg' style={{lineHeight: 0.5}}><strong>TRU</strong>REVUⓒ </h3>
                        <div className='flex items-center gap-1'>
                            <ReactStars count={5} value={4.7} size={16} classNames={'leading-none'}/>
                            <p>4.7</p>
                        </div>
                    </div>
                </div>
                <div className="w-full mx-auto">
                    <h2 className='text-xl font-bold'>Hot Rod</h2>
                </div>
                <div className=''>
                    <h3 className='text-[27px] font-bold mt-[14px]'>Market Place</h3>
                </div>
                <div className='mt-[8px]'>
                    <Button size={'4'} className={'h-[45px] mt-6 from-blue-900 to-blue-700 font-medium text-white text-[20px]'} text={'Search/Invitations'} />
                    <Button size={'4'} className={'h-[45px] mt-6 from-blue-900 to-blue-600 font-medium text-white text-[20px]'} text={'Upcoming Appointments'} />
                    <Button size={'4'} className={'h-[45px] mt-6 from-blue-900 to-blue-600 font-medium text-white text-[20px]'} text={'Pending Request'} />
                    <Button size={'4'} className={'h-[45px] mt-6 from-blue-900 to-blue-600 font-medium text-white text-[20px]'} text={'Appointments History'} />
                    <Button size={'4'} className={'h-[45px] mt-6 from-blue-900 to-blue-600 font-medium text-white text-[20px]'} text={'Active Invitations'} />
                </div>
            </div>
        </div>
    </div>
  )
}

export default MarketPlace__