import React from 'react';
import Button from '../../components/Button';

export default function JoinMemberToGroup() {
    return (
        <div className='main-container'>
            <div className='w-full mx-auto flex flex-col justify-center items-center pt-20'>
                <div className='w-full mx-auto flex flex-col justify-center items-center max-w-[242px]'><span className='font-bold text-[27px]'>Join Sugars Los Angeles Group</span></div>
                <div className='w-full mx-auto flex flex-col justify-center items-center mt-2'>
                    <img src={process.env.PUBLIC_URL + '/images/JoinMemberToGroupLogo.png'} alt="Join Member To Group" />
                </div>
                <div className='w-full mx-auto flex flex-col justify-center items-cener mt-7'>
                    <span className='font-normal text-[21.6px] '>Please enter the 6 character invite code</span>
                </div>
                <div className='w-full mx-auto flex flex-row justify-center items-center mt-2'>
                    <div className='w-[45px] flex items-cener justify-center mr-4'><input className='w-full focus:outline-none focus:shadow-none border-4 border-[white] border-t-0 border-l-0 border-r-0 h-[78px] bg-transparent text-[35px] text-center text-white' type="text" id="first" maxLength='1' /></div>
                    <div className='w-[45px] flex items-cener justify-center mr-4'><input className='w-full focus:outline-none focus:shadow-none border-4 border-[white] border-t-0 border-l-0 border-r-0 h-[78px] bg-transparent text-[35px] text-center text-white' type="text" id="second" maxLength='1' /></div>
                    <div className='w-[45px] flex items-cener justify-center mr-4'><input className='w-full focus:outline-none focus:shadow-none border-4 border-[white] border-t-0 border-l-0 border-r-0 h-[78px] bg-transparent text-[35px] text-center text-white' type="text" id="third" maxLength='1' /></div>
                    <div className='w-[45px] flex items-cener justify-center mr-4'><input className='w-full focus:outline-none focus:shadow-none border-4 border-[white] border-t-0 border-l-0 border-r-0 h-[78px] bg-transparent text-[35px] text-center text-white' type="text" id="fourth" maxLength='1' /></div>
                    <div className='w-[45px] flex items-cener justify-center mr-4'><input className='w-full focus:outline-none focus:shadow-none border-4 border-[white] border-t-0 border-l-0 border-r-0 h-[78px] bg-transparent text-[35px] text-center text-white' type="text" id="fifth" maxLength='1' /></div>
                    <div className='w-[45px] flex items-cener justify-center'><input className='w-full focus:outline-none focus:shadow-none border-4 border-[white] border-t-0 border-l-0 border-r-0 h-[78px] bg-transparent text-[35px] text-center text-white' type="text" id="seventh" maxLength='1' /></div>
                </div>
                <div className='w-full mx-auto flex items-center justify-center mt-6'><Button text="Submit" className={'rounded-[25px] bg-gradient-to-b from-[#0198FE] to-[#0247FF] font-bold text-[20px] text-white'} /></div>
                <div className='w-full mx-auto flex items-center justify-center mt-4'><Button text="Cancel" className={'rounded-[25px] bg-transparent font-bold text-[20px] text-[#0247FF] shadow-none'} /></div>
            </div>
        </div>
    );
}