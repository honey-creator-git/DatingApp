import React from 'react'
import Button from '../../../components/Button';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faShare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ReactStars from "react-rating-stars-component";

export default function ServiceRate() {
    const options1 = ['Crystal']


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
            <div className='w-full text-[24px] text-white font-bold py-10'><span>Service & Rates</span></div>

            <div className='w-full flex flex-col gap-2 lg:gap-4 px-2 py-8'>
                <div className='w-full flex flex-col gap-2 lg:gap-4 overflow-hidden overflow-y-auto px-4 max-h-[calc(100vh/2-50px)]'>
                    <div className='rounded-3xl bg-[#02227EA6] flex flex-col gap-4 p-8'>
                        <h3 className='font-bold text-xl text-white text-left'>Service Description</h3>
                        <p className='text-sm text-left text-white'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                    </div>
                    <div className='rounded-3xl bg-[#02227EA6] flex flex-col gap-4 p-8'>
                        <h3 className='font-bold text-xl text-white text-left'>Service Description</h3>
                        <p className='text-sm text-left text-white'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                    </div>
                    <div className='rounded-3xl bg-[#02227EA6] flex flex-col gap-4 p-8'>
                        <h3 className='font-bold text-xl text-white text-left'>Service Description</h3>
                        <p className='text-sm text-left text-white'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                    </div>
                    <div className='rounded-3xl bg-[#02227EA6] flex flex-col gap-4 p-8'>
                        <h3 className='font-bold text-xl text-white text-left'>Service Description</h3>
                        <p className='text-sm text-left text-white'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                    </div>
                </div>
            </div>        
            <div className='w-full text-[24px] text-white font-bold py-8'><span>Rates: Companionship Rates (Select One)</span></div>
            <div className='w-full flex flex-col gap-2 lg:gap-4 overflow-hidden overflow-y-auto px-4 max-h-[calc(100vh/2-150px)]'>
                <div className='w-full flex flex-rwo justify-between border-b-[1px] border-white text-2xl font-bold py-4 text-white'>
                    <span>1.2hr</span>
                    <span>$150</span>
                </div>  
                <div className='w-full flex flex-rwo justify-between border-b-[1px] border-white text-2xl font-bold py-4 text-white'>
                    <span>1.2hr</span>
                    <span>$150</span>
                </div>  
                <div className='w-full flex flex-rwo justify-between border-b-[1px] border-white text-2xl font-bold py-4 text-white'>
                    <span>1.2hr</span>
                    <span>$150</span>
                </div>  
                <div className='w-full flex flex-rwo justify-between border-b-[1px] border-white text-2xl font-bold py-4 text-white'>
                    <span>1.2hr</span>
                    <span>$150</span>
                </div>  
                <div className='w-full flex flex-rwo justify-between border-b-[1px] border-white text-2xl font-bold py-4 text-white'>
                    <span>1.2hr</span>
                    <span>$150</span>
                </div>  
            </div>
        </div>
    </div>
    </div>
  )
}
