import React from 'react'
import TextArea from '../../components/TextArea'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

export default function Aboutme() {
  return (
    <div className="main-container flex flex-col justify-between">
        <div className='w-full'>
            <div className='w-full mx-auto flex flex-row justify-between items-start mt-2'>
                <div className='flex flex-col items-center justify-center'>
                    <div><span className='text-[18px] text-[#040C50] font-extrabold'>VAI<span className='text-[18px] text-[#040C50] font-semibold'>RIFY ID</span></span></div>
                    <div><span className='text-[15px] text-[#040C50] font-bold'>658H39</span></div>
                </div>
                <div className='w-[120px] relative'>
                    <div style={{left: '10px', bottom: '65px'}} className='absolute w-full h-full'><img src={process.env.PUBLIC_URL + '/images/Ellipse 154.png'} alt="Hot Rod" /></div>
                    <div style={{right: '0px', top: '25px'}} className='absolute'><img src={process.env.PUBLIC_URL + '/images/HotRodIcon2.png'} alt="Hot Rod Icon Second" /></div>
                </div>
                <div>
                    <div><span className='text-[18px] text-[#040C50] font-bold'>TRU<span className='text-[18px] text-[#040C50] font-semibold'>REVUⓒ</span></span></div>
                    <div className='flex flex-row justify-center items-center'><FontAwesomeIcon icon={faStar} color="#E1AB3F" className='text-[10px] margin-right-5' /><FontAwesomeIcon icon={faStar} color="#E1AB3F" className='text-[10px] margin-right-5' /><FontAwesomeIcon icon={faStar} color="#E1AB3F" className='text-[10px] margin-right-5' /><FontAwesomeIcon icon={faStar} color="#E1AB3F" className='text-[10px] margin-right-5' /><FontAwesomeIcon icon={faStar} color="#E1AB3F" className='text-[10px] margin-right-5' /><span className='text-[15px] text-[#040C50] font-bold'>5.0</span></div>
                </div>
            </div>
            <div className='w-full mx-auto flex flex-col justify-center items-center mt-2'>
                <span className='font-bold text-[24px]'>Hot Rod</span>
            </div>
            <div className='w-full mx-auto flex flex-col justify-center items-center mt-9'>
                <span className='font-bold text-[24px]'>About Me</span>
            </div>
            <div className='flex justify-center gap-2 pt-4 mx-auto'>
                <TextArea fontSize={'10px'} bgColor={'#D9D9D9'} className='w-full px-1 py-1 text-[10px] bg-[rgba(217,217,217,0.15)]' rows={6} value={'"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."'}></TextArea>
            </div>
            <div className="w-full mt-6 flex-1 text-black">
                <div className='w-full mt-16'>
                    <h2 className='text-xl text-left font-bold'>My details</h2>
                </div>
                <div className="text-lg w-full flex flex-row justify-between items-center mx-auto py-4">
                    <div className="text-lg"><span>Gender</span></div>
                    <div className="text-lg"><span>Male</span></div>
                </div>
                <div className="w-full text-lg flex flex-col justify-center items-center mx-auto border-b-2"></div>
                <div className="text-lg w-full flex flex-row justify-between items-center mx-auto py-4">
                    <div className="text-lg"><span>Age</span></div>
                    <div className="text-lg"><span>30</span></div>
                </div>
                <div className="w-full text-lg flex flex-col justify-center items-center mx-auto border-b-2"></div>
                <div className="text-lg w-full flex flex-row justify-between items-center mx-auto py-4">
                    <div className="text-lg"><span>Height</span></div>
                    <div className="text-lg"><span>6’2”</span></div>
                </div>
                <div className="w-full text-lg flex flex-col justify-center items-center mx-auto border-b-2"></div>
                <div className="text-lg w-full flex flex-row justify-between items-center mx-auto py-4">
                    <div className="text-lg"><span>Weight</span></div>
                    <div className="text-lg"><span>55</span></div>
                </div>
            </div>
        </div>
    </div>
  )
}
