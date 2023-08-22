import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import PersonalReview from '../../components/PersonalReview';

export default function Reviews() {
    const [staff, setStaff] = useState("Reviewed")
    const toggle = (props) => {
        setStaff(props);
    }

    return (
        <div className='main-container flex flex-col justify-start'>
            <div className='w-full mx-auto flex flex-col justify-center items-center pt-2'>
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
                <div className='w-full mx-auto flex flex-col justify-center items-center mt-2'>
                    <span className='font-bold text-[24px]'>TRUREVUⓒ</span>
                </div>
                <div className='w-full mx-auto flex flex-row justify-around items-center mt-7'>
                    {
                        staff == "Reviewed" ?
                        <div onClick={() => toggle("Reviewed")} className='px-4 rounded-tr-md rounded-tl-md bg-[#A0AACD] border-b-4 border-b-[#0247FF]'><span className='font-extrabold text-[24px] text-[#02227E]'>Reviewed</span></div>
                        :
                        <div onClick={() => toggle("Reviewed")} className='px-4'><span className='font-extrabold text-[24px] text-[#02227E]'>Reviewed</span></div>
                    }
                    {
                        staff == "Reviews" ?
                        <div onClick={() => toggle("Reviews")} className='px-4 rounded-tr-md rounded-tl-md bg-[#A0AACD] border-b-4 border-b-[#0247FF]'><span className='font-extrabold text-[24px] text-[#02227E]'>Reviews</span></div>
                        :
                        <div onClick={() => toggle("Reviews")} className='px-4'><span className='font-extrabold text-[24px] text-[#02227E]'>Reviews</span></div>
                    }                    
                </div>
                <div style={{border:'1px solid black'}} className='w-[100vw]'></div>
                <div className='w-full mt-7'><PersonalReview userAvatar="Ellipse 155(2).png" userName="Sugar" date="01/03/2023" rate="5.0" /></div>
                <div className='w-full mt-5'><PersonalReview userAvatar="Ellipse 157(2).png" userName="Crystal" date="01/03/2023" rate="5.0" /></div>
                <div className='w-full mt-5'><PersonalReview userAvatar="Ellipse 158(2).png" userName="Baby 98" date="01/03/2023" rate="5.0" /></div>
                <div className='w-full mt-5'><PersonalReview userAvatar="Ellipse 156(2).png" userName="Faye Love" date="01/03/2023" rate="5.0" /></div>
            </div>
        </div>
    );
}