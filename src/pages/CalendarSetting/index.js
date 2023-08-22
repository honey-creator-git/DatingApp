import React from 'react'
import IconButton from '../../components/IconButton'
import Button from '../../components/Button'

export default function  CalendarSetting() {
  return (
    <div className='main-container px-0'>
        <div>
            <h2 className='text-[27px] font-bold'>    
                Calendar
            </h2>
        </div>
        <div className='mx-4'>
        <div className='rounded-full bg-[#02227E] h-[50px] items-center justify-center w-full'>
            <div className='w-[50px] h-[50px] border-4 border-[#0C8A02] rounded-full bg-gradient-to-t from-[#8387E0] to-[#0A44A0] relative left-0'>
            </div>
            <h2 className='text-white text-[24px] font-bold relative -top-11'>
            Available Now
            </h2>
        </div>
        </div>
        <div className='w-full bg-[#0247FF7F] h-[76px] mt-3 flex justify-center items-center'>
            <h4 className='text-black text-[27px] font-bold mr-6'>Duration</h4>
            <div className='flex gap-2'>
            <div>
                <h6 className='font-bold text-[10px]'>Hr</h6>
                <div className='bg-[#0247FF] w-8 h-8 rounded-md flex justify-center items-center'>
                    <h6 className='text-white text-[12px]'>00</h6>
                </div>
            </div>
            <div>
                <h6 className='font-bold text-[10px]'>Min</h6>
                <div className='bg-[#0247FF] w-8 h-8 rounded-md flex justify-center items-center'>
                    <h6 className='text-white text-[12px]'>00</h6>
                </div>
            </div>
            </div>
            <div className='mx-2 flex gap-2'>
                <IconButton icon={<><img className='w-full h-full' src={`${process.env.PUBLIC_URL}/images/VectorUp.png`} alt=''/></>} className={'w-[65px] h-[55px] bg-white rounded-md'} />
                <IconButton icon={<><img className='w-full h-full' src={`${process.env.PUBLIC_URL}/images/VectorDown.png`} alt=''/></>} className={'w-[65px] h-[55px] bg-white rounded-md'} />
            </div>
        </div>
        <div className='mt-3 px-6 flex flex-col gap-4'>
            <div className='bg-[#3760CB] h-[70px] border-[3px] border-[#040C50] rounded-2xl flex justify-center items-center'>
                <h2 className='text-[26px] font-bold text-white' style={{lineHeight: 1}}>View/Edit<br/>Calendar</h2>
            </div>
            <div className='bg-[#3760CB] h-[70px] border-[3px] border-[#040C50] rounded-2xl flex justify-center items-center'>
                <h2 className='text-[26px] font-bold text-white' style={{lineHeight: 1}}>View/Edit<br/>Schedules</h2>
            </div>
            <div className='bg-[#3760CB] h-[70px] border-[3px] border-[#040C50] rounded-2xl flex justify-center items-center'>
                <h2 className='text-[26px] font-bold text-white' style={{lineHeight: 1}}>View/Edit<br/>Rules</h2>
            </div>
            <div className='bg-[#3760CB] h-[70px] border-[3px] border-[#040C50] rounded-2xl flex justify-center items-center'>
                <h2 className='text-[26px] font-bold text-white' style={{lineHeight: 1}}>Sync Calendar</h2>
            </div>
        </div>
        <div className='flex mt-4 px-6'>
            <Button text={'Skip>>'} className={'text-[#01195C] text-[24px] font-bold bg-transparent shadow-none hover:bg-transparent'} />
            <Button text={'Submit>>'} className={'text-[#01195C] text-[24px] font-bold'} />
        </div>
    </div>
  )
}
