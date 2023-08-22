import React, { useState } from 'react'
import Modal from 'react-modal';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button'

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      backgroundColor: '#3760CB',
      width: '90vw',
      height: '250px',
      zIndex: 20,
      borderRadius: '30px',
      border: '2px solid black',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'start',
      padding: '20px 15px',
    },
};

export default function Schedule() {
    const [isOpen, setIsOpen ] = useState(false);
    const [staff, setStaff] = useState("Business")
    const navigate = useNavigate();
    const closeModal = () => {
      setIsOpen(false);
    }
    const navigateToCalendar = () => {
        navigate("/calendar");
    }
    const navigateToSetSchedule = () => {
        navigate('/set-schedule');
    }
    const toggle = (props) => {
        setStaff(props);
        if (props == 'createNew') {
            setIsOpen(true)
        }
    }
    return (
        <div className='main-container'>
            <div className='w-full mx-auto flex flex-col justify-center items-center pt-6'>
                <div clasName="w-full mx-auto flex justify-center items-center">
                    <span className='font-extrabold text-[27px] text-black'>Schedule</span>
                </div>
                {/* <div className='w-full mx-auto flex justify-center items-center mt-4'>
                    <div className='bg-gray-100 h-[50px] flex justify-center items-center px-4 rounded-l-full border-2 border-black'><span className='font-extrabold text-[18px] text-black'>View Schedules</span></div>
                    <div className='max-w-[390px]'><Button onClick={() => setIsOpen(true)} text="Create New +" className='font-bold text-[18px] text-white rounded-full rounded-l-none border-2 border-black px-4' bgColor={'[#0247FF]'} /></div>
                </div> */}
                <div className='w-full mx-auto flex flex-row justify-around items-center mt-7'>
                    {
                        staff == "schedule" ?
                        <div onClick={() => toggle("schedule")} className='px-4 rounded-tr-md rounded-tl-md bg-[#A0AACD] border-b-4 border-b-[#0247FF]'><span className='font-extrabold text-[24px] text-[#02227E]'>View Schedule</span></div>
                        :
                        <div onClick={() => toggle("schedule")} className='px-4'><span className='font-extrabold text-[24px] text-[#02227E]'>View Schedule</span></div>
                    }
                    {
                        staff == "createNew" ?
                        <div onClick={() => toggle("createNew")} className='px-4 rounded-tr-md rounded-tl-md bg-[#A0AACD] border-b-4 border-b-[#0247FF]'><span className='font-extrabold text-[24px] text-[#02227E]'>Create New +</span></div>
                        :
                        <div onClick={() => toggle("createNew")} className='px-4'><span className='font-extrabold text-[24px] text-[#02227E]'>Create New +</span></div>
                    }                    
                </div>
                <div style={{border:'1px solid black'}} className='w-[100vw]'></div>
                <div className='w-[100vw] flex justify-center items-center mt-4 bg-[#8295CB] py-2'>
                    <span className='font-bold text-[32px] text-black'>Active Schedules</span>
                </div>
                <div className='w-full mx-auto flex flex-col justify-center items-center shadow-2xl rounded-[25px] bg-[#3760CB] mt-2 py-6'>
                    <div className='w-full mx-auto flex flex-row justify-around items-center bg-[#8295CB] py-2'>
                        <div className='max-w-[95px]'><span className='font-extrabold text-[20px] text-extrabold text-center'>Name</span></div>
                        <div className='max-w-[95px]'><span className='font-extrabold text-[20px] text-extrabold text-center'>Status</span></div>
                        <div className='max-w-[95px]'><span className='font-extrabold text-[20px] text-extrabold text-center text-transparent'>Days</span></div>
                    </div>
                    <div className='w-full mx-auto flex flex-row justify-around items-end'>
                        <div className='max-w-[95px]'><span className='font-extrabold text-[20px] text-white'>Weekday</span></div>
                        <div className='max-w-[95px] flex flex-col justify-center items-center'>
                            <div className='w-full'><span className='font-bold text-[18px] text-white'>Active</span></div>
                            <div className='w-full'><Button text="View Edit" className='font-bold text-[13px] text-white py-2 px-4 bg-calendar-edit flex items-cener justify-center' size="26px" /></div>
                        </div>
                        <div className='max-w-[95px]'>
                            {/* <div className='w-full'><span className='font-bold text-[18px] text-white'>M,T,W,Th</span></div> */}
                            <div className='w-full'><Button text="De-activate" className='font-bold text-[13px] text-white py-2 px-2 bg-calendar-deactivate flex items-cener justify-center' size="26px" /></div>
                        </div>
                    </div>
                    <div className='w-full mx-auto flex flex-row justify-around items-end mt-2'>
                        <div className='max-w-[95px]'><span className='font-extrabold text-[20px] text-white'>Weekend</span></div>
                        <div className='max-w-[95px] flex flex-col justify-center items-center'>
                            <div className='w-full'><span className='font-bold text-[18px] text-white'>Active</span></div>
                            <div className='w-full'><Button text="View Edit" className='font-bold text-[13px] text-white py-2 px-4 bg-calendar-edit flex items-cener justify-center' size="26px" /></div>
                        </div>
                        <div className='max-w-[95px]'>
                            {/* <div className='w-full'><span className='font-bold text-[18px] text-white'>M,T,W,Th</span></div> */}
                            <div className='w-full'><Button text="De-activate" className='font-bold text-[13px] text-white py-2 px-2 bg-calendar-deactivate flex items-cener justify-center' size="26px" /></div>
                        </div>
                    </div>
                    <div className='w-full mx-auto flex flex-row justify-around items-end'>
                        <div className='w-[95px] flex flex-col justfy-center items-center'><span className='font-extrabold text-[20px] text-white'>Dubai</span></div>
                        <div className='max-w-[95px] flex flex-col justify-center items-center'>
                            <div className='w-full'><span className='font-bold text-[18px] text-white'>Active</span></div>
                            <div className='w-full'><Button text="View Edit" className='font-bold text-[13px] text-white py-2 px-4 bg-calendar-edit flex items-cener justify-center' size="26px" /></div>
                        </div>
                        <div className='max-w-[95px]'>
                            {/* <div className='w-full'><span className='font-bold text-[18px] text-white'>M,T,W,Th</span></div> */}
                            <div className='w-full'><Button text="De-activate" className='font-bold text-[13px] text-white py-2 px-2 bg-calendar-deactivate flex items-cener justify-center' size="26px" /></div>
                        </div>
                    </div>
                </div>
                <div className='w-[100vw] flex justify-center items-center mt-6 bg-[#8295CB] py-2'>
                    <span className='font-bold text-[32px] text-black'>Saved Schedules</span>
                </div>
                <div className='w-full mx-auto flex flex-col justify-center items-center'>
                    <div className='w-full mx-auto flex flex-row justify-between items-center rounded-full bg-[#3760CB] border-2 border-black px-8 py-4 mt-6 shadow-2xl'>
                        <div className='flex flex-col justify-center items-center'><div><span className='font-extrabold text-[20px] text-white'>Seattle</span></div><div><button style={{border: '1px solid white', borderLeft: 0, borderRight: 0, borderTop: 0}} className='font-bold text-[12.6px] text-white'>View/Edit</button></div></div>
                        <div className='flex flex-col justify-center items-center'><div><span className='font-extrabold text-[20px] text-white'>Days</span></div><div><span className='font-bold text-[18px] text-white'>M,T,W,Th,Sa</span></div></div>
                        <div className='flex flex-col justify-center items-center'>
                            <div><Button text="Activate" className={'flex items-center justify-center rounded-full px-4 py-2 font-bold text-[12.6px] text-white bg-[#0C8A02]'} size="27px" /></div>
                            <div className='mt-5'><Button text="View Edit" className={'flex items-center justify-center rounded-full px-4 py-2 font-bold text-[12.6px] text-white bg-[#02227E]'} bgColor={'[#02227E]'} size="27px" /></div>
                        </div>
                    </div>
                    <div className='w-full mx-auto flex flex-row justify-between items-center rounded-full bg-[#3760CB] border-2 border-black px-8 py-4 mt-6 shadow-2xl'>
                        <div className='flex flex-col justify-center items-center'><div><span className='font-extrabold text-[20px] text-white'>San Diego</span></div><div><button style={{border: '1px solid white', borderLeft: 0, borderRight: 0, borderTop: 0}} className='font-bold text-[12.6px] text-white'>View/Edit</button></div></div>
                        <div className='flex flex-col justify-center items-center'><div><span className='font-extrabold text-[20px] text-white'>Days</span></div><div><span className='font-bold text-[18px] text-white'>M,T,W,</span></div></div>
                        <div className='flex flex-col justify-center items-center'>
                            <div><Button text="Activate" className={'flex items-center justify-center rounded-full px-4 py-2 font-bold text-[12.6px] text-white bg-[#0C8A02]'} size="27px" /></div>
                            <div className='mt-5'><Button text="View Edit" className={'flex items-center justify-center rounded-full px-4 py-2 font-bold text-[12.6px] text-white bg-[#02227E]'} bgColor={'[#02227E]'} size="27px" /></div>
                        </div>
                    </div>
                </div>
                <div className="mt-6 w-[218px]">
                    <Button onClick={() => navigateToCalendar()} text="Calendar" className='font-bold text-[23.4px] text-[#040C50] rounded-[20px]'/>
                </div>
            </div>
            <Modal
                isOpen={isOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <div className='w-full mx-auto flex flex-col justify-center items-start px-14 py-2'>
                    <div><span className='font-bold text-[14px] text-white'>Name : WEEKEND</span></div>
                    <div className='font-bold text-[14px] text-white mt-2'><span>UNITED STATES</span><span className='ml-6'>SEATTLE,WA</span></div>
                    <div className='font-bold text-[14px] text-white mt-2'><span>Date</span><span className='ml-12'>Feb14-Jan11</span></div>
                    <div className='font-bold text-[14px] text-white mt-2'><span>Days</span><span className='ml-12'>M,T,W,Th,Sa</span></div>
                    <div className='font-bold text-[14px] text-white mt-2'><span>Time</span><span className='ml-12'>08:00 Am-01:00 Pm</span></div>
                </div>
                <div className='w-full mx-auto flex flex-col justify-center items-center mt-2 max-w-[185px]'>
                    <Button onClick={() => navigateToSetSchedule()} text="View/Edit Schedule" className={'font-bold text-[18px] text-black rounded-[20px]'} />
                </div>
            </Modal>
        </div>
    )
}