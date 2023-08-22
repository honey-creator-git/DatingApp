import React from 'react'
import Button from '../../../components/Button';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faShare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function AboutMeAd2() {
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
                </div>
                <div className='absolute custom-width flex flex-col justify-center items-center pt-10 px-10' style={{top: '0px', left: '273px'}}>
                    <div className='w-full text-[32px] font-bold text-white'><span>About me</span></div>
                    <div className="w-full mx-auto flex flex-col justify-center items-center mt-3">
                        <div className="w-full grid grid-cols-3 gap-0 overflow-y-auto">
                            <div className="hover: border-2 hover:border-blue-500"><img className="w-full h-full" src={process.env.PUBLIC_URL + "/images/Gallery1.png"} alt="Gallery Images" /></div>
                            <div className="hover: border-2 hover:border-blue-500"><img className="w-full h-full" src={process.env.PUBLIC_URL + "/images/Gallery2.png"} alt="Gallery Images" /></div>
                            <div className="hover: border-2 hover:border-blue-500"><img className="w-full h-full" src={process.env.PUBLIC_URL + "/images/Gallery3.png"} alt="Gallery Images" /></div>
                            <div className="hover: border-2 hover:border-blue-500"><img className="w-full h-full" src={process.env.PUBLIC_URL + "/images/Gallery4.png"} alt="Gallery Images" /></div>
                            <div className="hover: border-2 hover:border-blue-500"><img className="w-full h-full" src={process.env.PUBLIC_URL + "/images/Gallery5.png"} alt="Gallery Images" /></div>
                            <div className="hover: border-2 hover:border-blue-500"><img className="w-full h-full" src={process.env.PUBLIC_URL + "/images/Gallery6.png"} alt="Gallery Images" /></div>
                            <div className="hover: border-2 hover:border-blue-500"><img className="w-full h-full" src={process.env.PUBLIC_URL + "/images/Gallery7.png"} alt="Gallery Images" /></div>
                            <div className="hover: border-2 hover:border-blue-500"><img className="w-full h-full" src={process.env.PUBLIC_URL + "/images/Gallery8.png"} alt="Gallery Images" /></div>
                            <div className="hover: border-2 hover:border-blue-500"><img className="w-full h-full" src={process.env.PUBLIC_URL + "/images/Gallery9.png"} alt="Gallery Images" /></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}