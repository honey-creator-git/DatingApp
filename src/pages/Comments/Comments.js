import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import PersonalComments from '../../components/PersonalComments';

export default function Comments() {
    return (
        <div className='main-container'>
            <div className='w-full mx-auto flex flex-col justify-center items-center'>
                <div className='w-full mx-auto flex flex-row justify-between items-start mt-2'>
                    <div className='flex flex-col items-center justify-center'>
                        <div><span className='text-[18px] text-[#040C50] font-extrabold'>VAI<span className='text-[18px] text-[#040C50] font-semibold'>RIFY ID</span></span></div>
                        <div><span className='text-[15px] text-[#040C50] font-bold'>658H39</span></div>
                    </div>
                    <div className='w-[120px] relative'>
                        <div style={{left: '10px', bottom: '65px'}} className='absolute w-full h-full'><img src={process.env.PUBLIC_URL + '/images/Crystal.png'} alt="Crystal" /></div>
                        <div style={{right: '0px', top: '25px'}} className='absolute'><img src={process.env.PUBLIC_URL + '/images/SugarIcon2.png'} alt="Crystal Icon" /></div>
                    </div>
                    <div>
                        <div><span className='text-[18px] text-[#040C50] font-bold'>TRU<span className='text-[18px] text-[#040C50] font-semibold'>REVUⓒ</span></span></div>
                        <div className='flex flex-row justify-center items-center'><FontAwesomeIcon icon={faStar} color="#E1AB3F" className='text-[10px] margin-right-5' /><FontAwesomeIcon icon={faStar} color="#E1AB3F" className='text-[10px] margin-right-5' /><FontAwesomeIcon icon={faStar} color="#E1AB3F" className='text-[10px] margin-right-5' /><FontAwesomeIcon icon={faStar} color="#E1AB3F" className='text-[10px] margin-right-5' /><FontAwesomeIcon icon={faStar} color="#E1AB3F" className='text-[10px] margin-right-5' /><span className='text-[15px] text-[#040C50] font-bold'>5.0</span></div>
                    </div>
                </div>
                <div className='w-full mx-auto flex flex-col justify-center items-center mt-2'>
                    <span className='font-bold text-[24px]'>Crystal</span>
                </div>
                <div className='w-full mx-auto flex flex-col justify-center items-center mt-9'>
                    <span className='font-bold text-[24px]'>Comments</span>
                </div>
                <div className='w-full max-h-[473px] overflow-scroll'>
                    <div className='w-full mx-auto mt-9'>
                        <PersonalComments userAvatar="Ellipse 155.png" userName="darekwilga" duration="14m" content="Wow!!! you are amazing" />
                    </div>
                    <div className='w-full mx-auto mt-9'>
                        <PersonalComments userAvatar="Ellipse 156.png" userName="darekwilga" duration="22m" content="When will you be in Dallas?" />
                    </div>
                    <div className='w-full mx-auto mt-9'>
                        <PersonalComments userAvatar="Ellipse 154(2).png" userName="darekwilga" duration="Yesterday" content="I was just thinking, I would love to be that couch" />
                    </div>
                    <div className='w-full mx-auto mt-9'>
                        <PersonalComments userAvatar="Ellipse 154(2).png" userName="darekwilga" duration="Yesterday" content="I was just thinking, I would love to be that couch" />
                    </div>
                </div>
            </div>
        </div>
    );
}