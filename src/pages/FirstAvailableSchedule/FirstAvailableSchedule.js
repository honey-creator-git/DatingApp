import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import SelectBox from '../../components/SelectBox';
import Button from '../../components/Button';

export default function FirstAvailableSchedule() {
    const navigate = useNavigate();
    const servicesOptions = ["Staff", "Massage"];
    const typeOptions = ["Massage", "Outcall"];
    const hoursOptions = ["1.5 hours", "2 hours", "2.5 hours", "3 hours"];
    const [staff, setStaff] = useState("1st Available");
    const [date, setDate] = useState(new Date());
    const toggle = (props) => {
        setStaff(props);
    }
    const navigateToSelectTime = () => {
        navigate("/select-time");
    }
    return (
        <div className='main-container'>
            <div className="w-full mx-auto flex flex-col justify-center items-center">
                <div className='w-full mx-auto flex flex-row justify-between items-start mt-2'>
                    <div className='flex flex-col items-center justify-center'>
                        <div><span className='text-[18px] text-[#040C50] font-extrabold'>VAI<span className='text-[18px] text-[#040C50] font-semibold'>RIFY ID</span></span></div>
                        <div><span className='text-[15px] text-[#040C50] font-bold'>658H39</span></div>
                    </div>
                    <div className='w-[120px] relative'>
                        <div style={{left: '10px', bottom: '65px'}} className='absolute w-full h-full'><img src={process.env.PUBLIC_URL + '/images/IntimateMassage.png'} alt="Intimate Massage" /></div>
                        <div style={{right: '0px', top: '25px'}} className='absolute'><img src={process.env.PUBLIC_URL + '/images/IntimateMassageIcon2.png'} alt="Intimate Massage Icon Second" /></div>
                    </div>
                    <div>
                        <div><span className='text-[18px] text-[#040C50] font-bold'>TRU<span className='text-[18px] text-[#040C50] font-semibold'>REVUⓒ</span></span></div>
                        <div className='flex flex-row justify-center items-center'><FontAwesomeIcon icon={faStar} color="#E1AB3F" className='text-[10px] margin-right-5' /><FontAwesomeIcon icon={faStar} color="#E1AB3F" className='text-[10px] margin-right-5' /><FontAwesomeIcon icon={faStar} color="#E1AB3F" className='text-[10px] margin-right-5' /><FontAwesomeIcon icon={faStar} color="#E1AB3F" className='text-[10px] margin-right-5' /><FontAwesomeIcon icon={faStar} color="#E1AB3F" className='text-[10px] margin-right-5' /><span className='text-[15px] text-[#040C50] font-bold'>5.0</span></div>
                    </div>
                </div>
                <div className='w-full mx-auto flex flex-col justify-center items-center mt-2'>
                    <span className='font-bold text-[24px]'>Intimate Massage</span>
                </div>
                <div className='w-full mx-auto flex flex-row justify-around items-center mt-7'>
                    {
                        staff == "1st Available" ?
                        <div onClick={() => toggle("1st Available")} className='px-4 rounded-tr-md rounded-tl-md bg-[#A0AACD] border-b-4 border-b-[#0247FF]'><span className='font-extrabold text-[24px] text-[#02227E]'>1st Available</span></div>
                        :
                        <div onClick={() => toggle("1st Available")} className='px-4'><span className='font-extrabold text-[24px] text-[#02227E]'>1st Available</span></div>
                    }
                    {
                        staff == "Schedule" ?
                        <div onClick={() => toggle("Schedule")} className='px-4 rounded-tr-md rounded-tl-md bg-[#A0AACD] border-b-4 border-b-[#0247FF]'><span className='font-extrabold text-[24px] text-[#02227E]'>Schedule</span></div>
                        :
                        <div onClick={() => toggle("Schedule")} className='px-4'><span className='font-extrabold text-[24px] text-[#02227E]'>Schedule</span></div>
                    }                    
                </div>
                <div style={{border:'1px solid black'}} className='w-[100vw]'></div>
                <div className='w-full mx-auto flex items-center justify-center mt-4'>
                    <div className='w-[154px]'><SelectBox size="40px" options={servicesOptions} backgroundColor={'bg-gradient-to-b from-[#02227E] to-[#0247FF]'} textSize={'18px'} fontWeight={'font-bold'} textColor={'text-white'} arrowColor={'text-white'} /></div>
                </div>
                <div className='w-full mx-auto flex flex-row justify-between items-center flex-wrap mt-4'>
                    <div className='w-[154px] mb-3'><SelectBox size="40px" options={typeOptions} backgroundColor={'bg-gradient-to-b from-[#02227E] to-[#0247FF]'} textSize={'18px'} fontWeight={'font-bold'} textColor={'text-white'} arrowColor={'text-white'} /></div>
                    <div className='w-[154px] mb-3'><SelectBox size="40px" options={hoursOptions} backgroundColor={'bg-gradient-to-b from-[#02227E] to-[#0247FF]'} textSize={'18px'} fontWeight={'font-bold'} textColor={'text-white'} arrowColor={'text-white'} /></div>
                </div>
                <div className='w-full mx-auto flex flex-col justify-center items-center mt-4'>
                    <Calendar onChange={setDate} value={date} />
                </div>
                <div className='w-full mx-auto flex flex-col justify-center items-center mt-4'>
                    <p className='text-center'>
                        <span className='bold'>Selected Date:</span>{' '}
                        {date.toDateString()}
                    </p>
                </div>
                <div className='w-full mx-auto flex items-center justify-center mt-5'>
                    <div className='w-[154px]'><Button onClick={() => navigateToSelectTime()} text="Select Time" className={'font-bold text-[18px] text-white rounded-[25px] border-2 border-white bg-grandient-to-b from-[#02227E] to-[#0247FF]'} /></div>
                </div>
            </div>
        </div>
    );
}