import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import FollowMeItem from '../../components/FollowMeItem';

export default function FollowMe() {
    return (
        <div className='main-container'>
            <div className='w-full mx-auto flex flex-col justify-center items-center'>
            <div className='w-full mx-auto flex flex-row justify-between items-start mt-2'>
                    <div className='flex flex-col items-center justify-center'>
                        <div><span className='text-[18px] text-[#040C50] font-extrabold'>VAI<span className='text-[18px] text-[#040C50] font-semibold'>RIFY ID</span></span></div>
                        <div><span className='text-[15px] text-[#040C50] font-bold'>658H39</span></div>
                    </div>
                    <div className='w-[120px] relative'>
                        <div style={{left: '10px', bottom: '65px'}} className='absolute w-full h-full'><img src={process.env.PUBLIC_URL + '/images/Ellipse 121.png'} alt="Sugar" /></div>
                        <div style={{right: '0px', top: '25px'}} className='absolute'><img src={process.env.PUBLIC_URL + '/images/SugarIcon2.png'} alt="Sugar Icon Second" /></div>
                    </div>
                    <div>
                        <div><span className='text-[18px] text-[#040C50] font-bold'>TRU<span className='text-[18px] text-[#040C50] font-semibold'>REVUⓒ</span></span></div>
                        <div className='flex flex-row justify-center items-center'><FontAwesomeIcon icon={faStar} color="#E1AB3F" className='text-[10px] margin-right-5' /><FontAwesomeIcon icon={faStar} color="#E1AB3F" className='text-[10px] margin-right-5' /><FontAwesomeIcon icon={faStar} color="#E1AB3F" className='text-[10px] margin-right-5' /><FontAwesomeIcon icon={faStar} color="#E1AB3F" className='text-[10px] margin-right-5' /><FontAwesomeIcon icon={faStar} color="#E1AB3F" className='text-[10px] margin-right-5' /><span className='text-[15px] text-[#040C50] font-bold'>5.0</span></div>
                    </div>
                </div>
                <div className='w-full mx-auto flex flex-col justify-center items-center mt-2'>
                    <span className='font-bold text-[24px]'>Sugar</span>
                </div>
                <div className='w-full mx-auto flex flex-col justify-center items-center mt-7'>
                    <span className='font-bold text-[24px]'>Follow Me</span>
                </div>
                <div className='w-full mx-auto mt-9'><FollowMeItem followMeIcon={'FollowMeItem1.png'} email={'sugar@vairify.dage'} /></div>
                <div className='w-full mx-auto mt-4'><FollowMeItem followMeIcon={'FollowMeItem2.png'} email={'sugar@snapchat.com'} /></div>
                <div className='w-full mx-auto mt-4'><FollowMeItem followMeIcon={'FollowMeItem3.png'} email={'sugar@twitter.com'} /></div>
                <div className='w-full mx-auto mt-4'><FollowMeItem followMeIcon={'FollowMeItem4.png'} email={'sugar@instagram.com'} /></div>
                <div className='w-full mx-auto mt-4'><FollowMeItem followMeIcon={'FollowMeItem5.png'} email={'sugar@onlyfans.com'} /></div>
            </div>
        </div>
    );
}