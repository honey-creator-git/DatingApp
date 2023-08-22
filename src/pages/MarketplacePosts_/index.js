import React from 'react'
import ReactStars from "react-rating-stars-component";
import Button from '../../components/Button';

export default function MarketplacePosts_() {
  return (
    <div className='main-container pt-6 px-0'>
        <div className='bg-[#040B476f] w-full py-2'>
            <h3 className='text-[#040C50] text-[24px] font-bold'>Marketplace Posts</h3>
        </div>
        <div className='mt-9 px-3 justify-center flex flex-col items-center'>
          <div className='flex flex-col w-60'>
            <img src={`${process.env.PUBLIC_URL}/images/girl0.png`} alt='' width={240} />
            <div className='bg-[#CCC] p-3 rounded-b-xl'>
                <h5 className='leading-4 text-[16px] font-medium'>
                Massage special today from 12 to 5pm<br/>last day in town 
                </h5>
            </div>
          </div>
          <div>
            <h3 className='text-[24px] font-bold'>Review</h3>
          </div>
          <div className='w-full flex flex-col items-center'>
            <div className='grid grid-cols-2 w-72'>
                <div className='text-start'>
                <h5 className='text-[16px] font-bold'>Date:</h5>
                </div>
                <h5 className='text-[16px] font-medium'>March 3 - 5</h5>
            </div>
            <div className='grid grid-cols-2 w-72'>
                <div className='text-start'>
                <h5 className='text-[16px] font-bold'>Time :</h5>
                </div>
                <h5 className='text-[16px] font-medium'>12pm-11pm </h5>
            </div>
            <div className='grid grid-cols-2 w-72'>
                <div className='text-start'>
                <h5 className='text-[16px] font-bold'>Location:</h5>
                </div>
                <h5 className='text-[16px] font-medium'>U.S.A.  Houston,TX</h5>
            </div>
            <div className='grid grid-cols-2 w-72'>
                <div className='text-start'>
                <h5 className='text-[16px] font-bold'>Frequency</h5>
                </div>
                <h5 className='text-[16px] font-medium'>3 hour Intervals</h5>
            </div>
          </div>
          <div>
            <h3 className='text-[#026EFF] text-[30px] font-bold'>Total GRT Tokens</h3>
            <h3 className='text-[#026EFF] text-[30px] font-bold'>20</h3>
          </div>
          <div>
            <Button text={'Authorize'} className={'w-60 text-[#02227E] h-[44px]'} />
          </div>
        </div>
    </div>
  )
}
