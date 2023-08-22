import React, { useState } from 'react';
import InputText from '../../components/InputText';
import Button from '../../components/Button';
import { useNavigate } from 'react-router-dom';
import SelectBox from '../../components/SelectBox';
import { Select, MenuItem } from "@mui/material";
import Modal from 'react-modal';

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
      height: '229px',
      zIndex: 20,
      borderRadius: '30px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'start',
      padding: '20px 15px',
    },
};

export default function SetRules() {

    const navigate = useNavigate()
    const [status, setStatus] = useState(1)
    const [isOpen, setIsOpen] = useState(false)
    const requestOptions = ["Cancellation" + "\n" + "Request", "Request 1", "Request 2", "Request 3"];
    const [bufferDay, setBufferDay] = useState("00")
    const [bufferHr, setBufferHr] = useState("00")
    const [bufferMin, setBufferMin] = useState("15")

    const [apptDay, setApptDay] = useState("00")
    const [apptHr, setApptHr] = useState("00")
    const [apptMin, setApptMin] = useState("15")

    const handleDurationDownBuffer = () => {
        const bufferMinInt = parseInt(bufferMin)
        const bufferHrInt = parseInt(bufferHr)
        const bufferDayInt = parseInt(bufferDay)
        const decreasedBufferMinInt = bufferMinInt - 15
        if(decreasedBufferMinInt == 0 && bufferHrInt == 0 && bufferDayInt == 0) {
            setBufferMin("00")
        } else if(decreasedBufferMinInt == 0 && bufferHrInt > 0) {
            const decreasedBufferHrInt = bufferHrInt - 1
            if(decreasedBufferHrInt > 9) {
                setBufferHr(decreasedBufferHrInt.toString())
            } else {
                setBufferHr("0" + decreasedBufferHrInt.toString())
            }
            setBufferMin("60")
        } else if(decreasedBufferMinInt == 0 && bufferHrInt == 0 && bufferDayInt > 0) {
            const decreasedBufferDayInt = bufferDayInt - 1
            if(decreasedBufferDayInt > 9) {
                setBufferDay(decreasedBufferDayInt.toString())
            } else {
                setBufferDay("0" + decreasedBufferDayInt.toString())
            }
            setBufferHr("24")
            setBufferMin("60")
        } else {
            if(decreasedBufferMinInt > 9) {
                setBufferMin(decreasedBufferMinInt.toString())
            } else {
                setBufferMin("0" + decreasedBufferMinInt.toString())
            }
        }

    }

    const handleDurationUpBuffer = () => {
        const bufferMinInt = parseInt(bufferMin)
        const bufferHrInt = parseInt(bufferHr)
        const bufferDayInt = parseInt(bufferDay)
        const increasedBufferMinInt = bufferMinInt + 15
        if(increasedBufferMinInt >= 60 && bufferHrInt >= 24) {
            const increasedBufferDayInt = bufferDayInt + 1

            if(increasedBufferDayInt > 9) {
                setBufferDay(increasedBufferDayInt.toString())
            } else {
                setBufferDay("0" + increasedBufferDayInt.toString())
            }
            setBufferHr("00")
            setBufferMin("00")
        } else if(increasedBufferMinInt > 60 && bufferHrInt <= 24)
        {
            const increasedBufferHrInt = bufferHrInt + 1

            if(increasedBufferHrInt > 9) {
                setBufferHr(increasedBufferHrInt.toString())
            } else {
                setBufferHr("0" + increasedBufferHrInt.toString())
            }
            setBufferMin("00")
        } else {
            setBufferMin(increasedBufferMinInt.toString())
        }        
    }

    const handleDurationDownBlackOut = () => {
        const apptMinInt = parseInt(apptMin)
        const apptHrInt = parseInt(apptHr)
        const apptDayInt = parseInt(apptDay)
        const decreasedApptMinInt = apptMinInt - 15
        if(decreasedApptMinInt == 0 && apptHrInt == 0 && apptDayInt == 0) {
            setApptMin("00")
        } else if(decreasedApptMinInt == 0 && apptHrInt > 0) {
            const decreasedApptHrInt = apptHrInt - 1
            if(decreasedApptHrInt > 9) {
                setApptHr(decreasedApptHrInt.toString())
            } else {
                setApptHr("0" + decreasedApptHrInt.toString())
            }
            setApptMin("60")
        } else if(decreasedApptMinInt == 0 && apptHrInt == 0 && apptDayInt > 0) {
            const decreasedApptDayInt = apptDayInt - 1
            if(decreasedApptDayInt > 9) {
                setApptDay(decreasedApptDayInt.toString())
            } else {
                setApptDay("0" + decreasedApptDayInt.toString())
            }
            setApptHr("24")
            setApptMin("60")
        } else {
            if(decreasedApptMinInt > 9) {
                setApptMin(decreasedApptMinInt.toString())
            } else {
                setApptMin("0" + decreasedApptMinInt.toString())
            }
        }

    }

    const handleDurationUpBlackOut = () => {
        const apptMinInt = parseInt(apptMin)
        const apptHrInt = parseInt(apptHr)
        const apptDayInt = parseInt(apptDay)
        const increasedApptMinInt = apptMinInt + 15
        if(increasedApptMinInt >= 60 && apptHrInt >= 24) {
            const increasedApptDayInt = apptDayInt + 1

            if(increasedApptDayInt > 9) {
                setApptDay(increasedApptDayInt.toString())
            } else {
                setApptDay("0" + increasedApptDayInt.toString())
            }
            setApptHr("00")
            setApptMin("00")
        } else if(increasedApptMinInt > 60 && apptHrInt <= 24)
        {
            const increasedApptHrInt = apptHrInt + 1

            if(increasedApptHrInt > 9) {
                setApptHr(increasedApptHrInt.toString())
            } else {
                setApptHr("0" + increasedApptHrInt.toString())
            }
            setApptMin("00")
        } else {
            setApptMin(increasedApptMinInt.toString())
        }        
    }

    const handleNavigateToCalendar = () => {
        navigate("/calendar");
    }
    const closeModal = () => {
        setIsOpen(false)
    }
    return (
        <div className='main-container'>
            <div className='w-full mx-auto flex flex-col justify-center items-center pt-5'>
                <div className='w-full mx-auto flex justify-center items-center'>
                    <span className='text-[30px] font-bold'>Set Rules</span>
                </div>
                <div className='w-[100vw] flex justify-center items-center py-2 mt-6 bg-[#02227E]'>
                    <span className='font-extrabold text-[20px] text-white'>Request Rules</span>
                </div>
                <div className='w-full mx-auto flex flex-row justify-center items-center mt-4'>
                    <div className='flex flex-row justify-center items-center'>
                        <input type="checkbox" className="form-checkbox text-indigo-600 h-[18px] w-[18px]" />
                        <label className="ml-2 block text-black font-extrabold text-[20px] text-center">
                            Scheduled
                        </label>
                    </div>
                    <div className='flex flex-row justify-center items-center mx-5'>
                        <input type="checkbox" className="form-checkbox text-indigo-600 h-[18px] w-[18px]" />
                        <label className="ml-2 block text-black font-extrabold text-[20px] text-center">
                            Request
                        </label>
                    </div>
                    <div className='flex flex-row justify-center items-center'>
                        <input type="checkbox" className="form-checkbox text-indigo-600 h-[18px] w-[18px]" />
                        <label className="ml-2 block text-black font-extrabold text-[20px] text-center">
                            Both
                        </label>
                    </div>
                </div>
                <div className='w-[100vw] flex justify-center items-center py-2 mt-6 bg-[#02227E]'>
                    <span className='font-extrabold text-[20px] text-white'>Notification Rules</span>
                </div>
                <div className='w-full mx-auto flex flex-row justify-around items-center mt-4'>
                    <div className='max-w-[196px] h-[60px]'><SelectBox options={requestOptions} backgroundColor={'bg-[#0247FF]'} textSize={'text-[18px]'} textColor={'text-[white]'} fontWeight={'font-extrabold'} size='60px' setRules='true' iconColor='text-white' /></div>
                    <div className="ml-8 w-[100px]">
                        <Select value={status} className="w-[90px] h-[43px] flex justify-center items-center select-radius bg-[#0247FF]" >
                            <MenuItem onClick={() => setStatus(1)} value={1}><div className="mx-auto flex justify-center items-center w-[19px] h-[19px] bg-red-500"></div></MenuItem>
                            <MenuItem onClick={() => setStatus(2)} value={2}><div className="mx-auto flex justify-center items-center w-[19px] h-[19px] bg-green-500"></div></MenuItem>
                            <MenuItem onClick={() => setStatus(3)} value={3}><div className="mx-auto flex justify-center items-center w-[19px] h-[19px] bg-yellow-500"></div></MenuItem>
                        </Select>
                    </div>
                </div>                    
                <div className='w-full mx-auto flex flex-row justify-center items-center mt-4'>
                    <div className='flex flex-row justify-center items-center'><div className='w-[18px] h-[18px] border-2 border-black bg-yellow-500'></div><div><span className='ml-2 font-extrabold text-[14.4px] text-black'>Pending</span></div></div>
                    <div className='flex flex-row justify-center items-center mx-10'><div className='w-[18px] h-[18px] border-2 border-black bg-green-500'></div><div><span className='ml-2 font-extrabold text-[14.4px] text-black'>Confirmed</span></div></div>
                    <div className='flex flex-row justify-center items-center'><div className='w-[18px] h-[18px] border-2 border-black bg-red-500'></div><div><span className='ml-2 font-extrabold text-[14.4px] text-black'>Cancellation <br />Request</span></div></div>
                </div>
                <div className='w-[100vw] flex justify-center items-center py-2 mt-6 bg-[#02227E]'>
                    <span className='font-extrabold text-[20px] text-white'>Buffer Rules</span>
                </div>
                <div className="w-full mx-auto flex flex-row justify-around items-center mt-4">
                    <div className='relative top-2'><span className="text-[20px] font-extrabold">Buffer Time</span></div>
                    <div className="flex flex-row justify-around items-end duration-row">
                        <div className="flex flex-col justify-center items-center mr-2">
                            <span className="text-[12px] font-bold">Day</span>
                            <div className="bg-[#0247FF] w-[36px] h-[36px] rounded-md flex flex-col justify-center items-center">
                                <span className="text-[14px] font-bold text-white">{bufferDay}</span>
                            </div>
                        </div>
                        <div className="flex flex-col justify-center items-center mr-2">
                            <span className="text-[12px] font-bold">Hr</span>
                            <div className="bg-[#0247FF] w-[36px] h-[36px] rounded-md flex flex-col justify-center items-center"><span className="text-[14px] font-bold text-white">{bufferHr}</span></div>
                        </div>
                        <div className="flex flex-col justify-center items-center mr-2">
                            <span className="text-[12px] font-bold">Min</span>
                            <div className="bg-[#0247FF] w-[36px] h-[36px] rounded-md flex flex-col justify-center items-center"><span className="text-[14px] font-bold text-white">{bufferMin}</span></div>
                        </div>
                        {   
                            parseInt(bufferDay)==0&&parseInt(bufferHr)==0&&parseInt(bufferMin)==0
                            ?
                            <div className="flex flex-col justify-center items-center bg-gray-300 w-[36px] h-[36px] rounded-md border-2 border-gray-200 mr-2">
                                <button disabled className="w-full h-full flex flex-col justify-center items-center"><img src={process.env.PUBLIC_URL + '/images/VectorDown.png'} alt="Time Duration Down" /></button>
                            </div>
                            :
                            <div className="flex flex-col justify-center items-center bg-white w-[36px] h-[36px] rounded-md border-2 border-gray-200 mr-2">
                                <button onClick={() => handleDurationDownBuffer()} className="w-full h-full flex flex-col justify-center items-center"><img src={process.env.PUBLIC_URL + '/images/VectorDown.png'} alt="Time Duration Down" /></button>
                            </div>
                        }
                        <div className="flex flex-col justify-center items-center bg-white w-[36px] h-[36px] rounded-md border-2 border-gray-200">
                            <button onClick={() => handleDurationUpBuffer()} className="w-full h-full flex flex-col justify-center items-center"><img src={process.env.PUBLIC_URL + '/images/VectorUp.png'} alt="Time Duration Up" /></button>
                        </div>
                    </div>
                </div>
                <div className='w-[100vw] flex justify-center items-center py-2 mt-6 bg-[#02227E]'>
                    <span className='font-extrabold text-[20px] text-white'>Blackout Rules</span>
                </div>
                <div className="w-full mx-auto flex flex-col justify-around items-center mt-2">
                    <div className='relative top-2'><span className="text-[20px] font-extrabold">Black Out Period</span></div>
                    <div className="flex flex-row justify-around items-end mt-4">
                        <div className="flex flex-col justify-center items-center mr-2">
                            <span className="text-[12px] font-bold">Day</span>
                            <div className="bg-[#0247FF] w-[36px] h-[36px] rounded-md flex flex-col justify-center items-center"><span className="text-[14px] font-bold text-white">{apptDay}</span></div>
                        </div>
                        <div className="flex flex-col justify-center items-center mr-2">
                            <span className="text-[12px] font-bold">Hr</span>
                            <div className="bg-[#0247FF] w-[36px] h-[36px] rounded-md flex flex-col justify-center items-center"><span className="text-[14px] font-bold text-white">{apptHr}</span></div>
                        </div>
                        <div className="flex flex-col justify-center items-center mr-2">
                            <span className="text-[12px] font-bold">Min</span>
                            <div className="bg-[#0247FF] w-[36px] h-[36px] rounded-md flex flex-col justify-center items-center"><span className="text-[14px] font-bold text-white">{apptMin}</span></div>
                        </div>
                        {   
                            parseInt(apptDay)==0&&parseInt(apptHr)==0&&parseInt(apptMin)==0
                            ?
                            <div className="flex flex-col justify-center items-center bg-gray-300 w-[36px] h-[36px] rounded-md border-2 border-gray-200 mr-2">
                                <button disabled className="w-full h-full flex flex-col justify-center items-center"><img src={process.env.PUBLIC_URL + '/images/VectorDown.png'} alt="Time Duration Down" /></button>
                            </div>
                            :
                            <div className="flex flex-col justify-center items-center bg-white w-[36px] h-[36px] rounded-md border-2 border-gray-200 mr-2">
                                <button onClick={() => handleDurationDownBlackOut()} className="w-full h-full flex flex-col justify-center items-center"><img src={process.env.PUBLIC_URL + '/images/VectorDown.png'} alt="Time Duration Down" /></button>
                            </div>
                        }
                        <div className="flex flex-col justify-center items-center bg-white w-[36px] h-[36px] rounded-md border-2 border-gray-200">
                            <button onClick={() => handleDurationUpBlackOut()} className="w-full h-full flex flex-col justify-center items-center"><img src={process.env.PUBLIC_URL + '/images/VectorUp.png'} alt="Time Duration Up" /></button>
                        </div>
                    </div>
                </div>
                <div className='w-full mx-auto flex flex-row justify-around items-center mt-6'>
                    <div className='max-w-[124px] text-center'><span className='text-[20px] font-extrabold'>Member Exemptions</span></div>
                    <div><InputText className="rounded-md h-[26px]" placeholder="Enter Varify ID" size="25px" /></div>
                </div>
                <div className="w-full mx-auto flex flex-row justify-center items-center mt-6">
                    <Button onClick={() => handleNavigateToCalendar()} text="Calendar" className="text-[#040C50] font-bold text-[18px] mr-8" />
                    <Button onClick={() => setIsOpen(true)} text="Save Rules" className="text-[#040C50] font-bold text-[18px]" />
                </div>
            </div>
            <Modal
                isOpen={isOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <div className='w-full mx-auto flex flex-col justify-center items-cener'>
                    <div className='font-bold text-[36px] text-white text-center'>Rules</div>
                    <div className='font-bold text-[36px] text-white text-center'>Saved</div>
                    <div className='font-bold text-[36px] text-white text-center'>successfully</div>
                </div>
            </Modal>
        </div>
    );
}