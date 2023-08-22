import React from 'react'
import Button from '../../../components/Button';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faShare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function AboutMeAd() {
    const onClick = () => {
        console.log("Good!");
    }
    return (
        <div className='flex flex-col justify-center items-start'>
            <div className='flex flex-row justify-start items-center'>
                <span className='text-white text-[24px] font-bold mr-5'>Filter:</span>
                <div className='w-[200px] mr-5'><Button onClick={onClick} text='Feed' size='39px' className='rounded-full border-2 border-white bg-transparent text-[24px] text-white font-bold focus:bg-[#0247FF]' /></div>
                <div className='w-[200px]'><Button onClick={onClick} text='FMTY' size='39px' className='rounded-full border-2 border-white bg-transparent text-[24px] text-white font-bold focus:bg-[#0247FF]' /></div>
            </div>
            <div className='w-full relative border-2 border-white mt-5 h-[1017px] bg-gradient-to-r from-[#0247FF] to-[#D9D9D9] rounded-xl overflow-auto'>
                <div className='w-[273px] flex flex-col justify-center items-center px-4 py-10 border-2 border-white border-l-0 border-t-0 boder-b-0'>
                    <div className=''><img src={process.env.PUBLIC_URL + '/images/EllipseSugar.png'} alt="Admin Sugar Sidebar" /></div>
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
                </div>
                <div className='absolute custom-width flex flex-col justify-center items-center pt-10 px-10' style={{top: '0px', left: '273px'}}>
                    <div className='w-full text-[32px] font-bold text-white'><span>About me</span></div>
                    <div className='w-full text-[14px] font-extrabold text-white pt-10 text-left'>
                        <span>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</span>
                    </div>
                    <div className='w-full flex flex-row justify-between items-center mt-5'>
                        <span className='text-[18px] font-normal text-black'>Gender</span>
                        <span className='text-[18px] font-normal text-black'>Male</span>
                    </div>
                    <div className='w-full border-2 border-t-0 border-r-0 border-l-0 border-[#D9D9D9]'></div><div className='w-full flex flex-row justify-between items-center mt-5'>
                        <span className='text-[18px] font-normal text-black'>Age</span>
                        <span className='text-[18px] font-normal text-black'>30</span>
                    </div>
                    <div className='w-full border-2 border-t-0 border-r-0 border-l-0 border-[#D9D9D9]'></div>
                    <div className='w-full flex flex-row justify-between items-center mt-5'>
                        <span className='text-[18px] font-normal text-black'>Height</span>
                        <span className='text-[18px] font-normal text-black'>6’2”</span>
                    </div>
                    <div className='w-full border-2 border-t-0 border-r-0 border-l-0 border-[#D9D9D9]'></div>
                    <div className='w-full flex flex-row justify-between items-center mt-5'>
                        <span className='text-[18px] font-normal text-black'>Weight</span>
                        <span className='text-[18px] font-normal text-black'>55</span>
                    </div>
                    <div className='mt-5'><img src={process.env.PUBLIC_URL + '/images/AdminAboutMeOwner.png'} alt="Admin About Me User" /></div>
                </div>
            </div>
        </div>
    );
}