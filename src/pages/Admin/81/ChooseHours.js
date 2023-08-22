import React from 'react'
import Button from '../../../components/Button';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faShare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function ChooseHours() {
  return (
    <div className='flex flex-col justify-center items-start'>
    <div className='flex flex-row justify-start items-center'>
        <span className='text-white text-[24px] font-bold mr-5'>Filter:</span>
        <div className='w-[200px] mr-5'><Button text='Feed' size='39px' className='rounded-full border-2 border-white bg-transparent text-[24px] text-white font-bold focus:bg-[#0247FF]' /></div>
        <div className='w-[200px]'><Button text='FMTY' size='39px' className='rounded-full border-2 border-white bg-transparent text-[24px] text-white font-bold focus:bg-[#0247FF]' /></div>
    </div>
    <div className='w-full relative border-2 border-white mt-5 h-[1017px] bg-gradient-to-tl from-[#E4E3E300] to-[#E4E3E3] rounded-xl overflow-auto'>
        <div className='w-[273px] flex flex-col justify-center items-center px-4 py-10 border-2 border-white border-l-0 border-t-0 boder-b-0 bg-[#115CB97E]'>
            <div className=''><img src={process.env.PUBLIC_URL + '/images/AdminAboutMe2.png'} alt="Admin Hot Rod Sidebar" /></div>
            <div className='text-[32px] font-bold text-white text-center mt-5'><span className=''>Sugar</span></div>
            <div className='text-[12px] font-medium text-white text-center'><span className=''>VAIRIFY ID 7DHF584</span></div>
            <div className='flex flex-row justify-center items-center'><FontAwesomeIcon icon={faStar} color={'#FFC020'} /><FontAwesomeIcon className='ml-2' icon={faStar} color={'#FFC020'} /><FontAwesomeIcon className='ml-2' icon={faStar} color={'#FFC020'} /><FontAwesomeIcon className='ml-2' icon={faStar} color={'#FFC020'} /><FontAwesomeIcon className='ml-2' icon={faStar} color={'#FFC020'} /><span className='ml-4 text-[16px] font-bold text-white'>4.7</span></div>
            <div className='flex flex-row justify-center items-center'><div><button><FontAwesomeIcon className='mr-1' icon={faHeart} color={'white'} /><span className='text-[10px] font-bold text-white'>Follow</span></button></div><div className='ml-5'><button><FontAwesomeIcon className='mr-1' icon={faShare} color={'white'} /><span className='text-[10px] font-bold text-white'>Follow</span></button></div></div>
            <div className='w-full mt-10'><button className='w-full flex flex-row justify-start items-center bg-gradient-to-b from-[#02227E] to-[#0247FF] h-[54px] border-2 border-[#CCCCCC] rounded-3xl px-4 focus:from-[#0247FF]'><img className='mr-3' src={process.env.PUBLIC_URL + '/images/AboutMeAd.png'} alt="About Me" /><span className='text-[20px] font-bold text-white'>About Me</span></button></div>
            <div className='w-full mt-5'><button className='w-full flex flex-row justify-start items-center bg-gradient-to-b from-[#02227E] to-[#0247FF] h-[54px] border-2 border-[#CCCCCC] rounded-3xl px-4 focus:from-[#0247FF]'><img className='mr-3' src={process.env.PUBLIC_URL + '/images/GalleryAd.png'} alt="About Me" /><span className='text-[20px] font-bold text-white'>Gallery</span></button></div>
            <div className='w-full mt-5'><button className='w-full flex flex-row justify-start items-center bg-gradient-to-b from-[#02227E] to-[#0247FF] h-[54px] border-2 border-[#CCCCCC] rounded-3xl px-4 focus:from-[#0247FF]'><img className='mr-3' src={process.env.PUBLIC_URL + '/images/TrurevAd.png'} alt="About Me" /><span className='text-[20px] font-bold text-white'>TRUREVUⓒ</span></button></div>
            <div className='w-full mt-5'><button className='w-full flex flex-row justify-start items-center bg-gradient-to-b from-[#02227E] to-[#0247FF] h-[54px] border-2 border-[#CCCCCC] rounded-3xl px-4 focus:from-[#0247FF]'><img className='mr-3' src={process.env.PUBLIC_URL + '/images/VairipayAd.png'} alt="About Me" /><span className='text-[20px] font-bold text-white'>VAIRIPAY</span></button></div>
            <div className='w-full mt-5'><button className='w-full flex flex-row justify-start items-center bg-gradient-to-b from-[#02227E] to-[#0247FF] h-[54px] border-2 border-[#CCCCCC] rounded-3xl px-4 focus:from-[#0247FF]'><img className='mr-3' src={process.env.PUBLIC_URL + '/images/FollowMeAd.png'} alt="About Me" /><span className='text-[20px] font-bold text-white'>Follow Me</span></button></div>
            <div className='w-full mt-5'><button className='w-full flex flex-row justify-start items-center bg-gradient-to-b from-[#02227E] to-[#0247FF] h-[54px] border-2 border-[#CCCCCC] rounded-3xl px-4 focus:from-[#0247FF]'><img className='mr-3' src={process.env.PUBLIC_URL + '/images/ServicesAd.png'} alt="About Me" /><span className='text-[19px] font-bold text-white'>Services & Rates</span></button></div>
            <div className='w-full mt-5'><button className='w-full flex flex-row justify-start items-center bg-gradient-to-b from-[#02227E] to-[#0247FF] h-[54px] border-2 border-[#CCCCCC] rounded-3xl px-4 focus:from-[#0247FF]'><img className='mr-3' src={process.env.PUBLIC_URL + '/images/AboutMeAd.png'} alt="About Me" /><span className='text-[20px] font-bold text-white'>STAFF</span></button></div>
            <div className='w-full mt-5'><button className='w-full flex flex-row justify-start items-center bg-gradient-to-b from-[#02227E] to-[#0247FF] h-[54px] border-2 border-[#CCCCCC] rounded-3xl px-4 focus:from-[#0247FF]'><img className='mr-3' src={process.env.PUBLIC_URL + '/images/CalendarAd.png'} alt="About Me" /><span className='text-[20px] font-bold text-white'>Hours/Contact</span></button></div>
            <div className='w-full mx-auto flex flex-col justify-center items-center mt-10 mb-5'><button><img src={process.env.PUBLIC_URL + '/images/ChatAd.png'} alt="Admin Chat" /></button></div>
            <Button text={'Request Appointment'} className={'from-[#05B7FD] to-[#05B7FD] text-[20px]'} />
        </div>
        <div className='absolute custom-width flex flex-col justify-between items-center pt-10 px-10' style={{top: '0px', left: '273px'}}>
            <div className='w-full text-[40px] font-medium py-20'><span>HOURS</span></div>
            <div className="w-full mx-auto flex flex-col justify-around items-center mt-10 gap-8">
                <div className='grid grid-cols-2 items-center font-bold text-3xl gap-10'>
                    <span>Monday</span>
                    <span>8am-11pm</span>
                </div>
                <div className='grid grid-cols-2 items-center font-bold text-3xl gap-10'>
                    <span>Tuesday</span>
                    <span>8am-11pm</span>
                </div>
                <div className='grid grid-cols-2 items-center font-bold text-3xl gap-10'>
                    <span>Wednesday</span>
                    <span>8am-11pm</span>
                </div>
                <div className='grid grid-cols-2 items-center font-bold text-3xl gap-10'>
                    <span>Thursday </span>
                    <span>8am-11pm</span>
                </div>
                <div className='grid grid-cols-2 items-center font-bold text-3xl gap-10'>
                    <span>Friday </span>
                    <span>8am-11pm</span>
                </div>
                <div className='grid grid-cols-2 items-center font-bold text-3xl gap-10'>
                    <span>Saturday </span>
                    <span>8am-11pm</span>
                </div>
                <div className='grid grid-cols-2 items-center font-bold text-3xl gap-10'>
                    <span>Sunday </span>
                    <span>8am-11pm</span>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}
