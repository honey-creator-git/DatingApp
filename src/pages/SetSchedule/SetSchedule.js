import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button';
import SelectBox from '../../components/SelectBox';
import InputText from '../../components/InputText';

export default function SetSchedule() {
    const navigate = useNavigate();
    const savedSchedules = ["Saved schedules", "Schedule 1", "Schedule 2", "Schedule 3"];
    const locations = ["My Locations", "Location 1", "Location 2", "Location 3"];
    const times = ["01:00", "02:00", "03:00", "04:00", "05:00", "06:00", "07:00", "08:00", "09:00", "10:00", "11:00", "12:00"]
    const zones = ["A.M", "P.M"];
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const days = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31"]
    const [Su, setSu] = useState(true)
    const [Mo, setMo] = useState(true)
    const [Tu, setTu] = useState(false)
    const [We, setWe] = useState(true)
    const [Th, setTh] = useState(false)
    const [Fr, setFr] = useState(true)
    const [Sa, setSa] = useState(false)

    const [bufferDay, setBufferDay] = useState("00")
    const [bufferHr, setBufferHr] = useState("00")
    const [bufferMin, setBufferMin] = useState("15")

    const [apptDay, setApptDay] = useState("00")
    const [apptHr, setApptHr] = useState("00")
    const [apptMin, setApptMin] = useState("15")

    const [modalIsOpen, setIsOpen] = useState(false)
    
    const customStyles = {
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          transform: 'translate(-50%, -50%)',
          background: '#073FE1',
          borderRadius: '30px',
          width: '97%',
        },
    };

    useEffect(() => {
        Modal.setAppElement('#schedule_rules');
    });

    const openModal = () => {
        setIsOpen(true)
    }

    const afterOpenModal = () => {
    }

    const closeModal = () => {
        setIsOpen(false)
        navigate("/set-rules")
    }

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

    return (
        <div id="schedule_rules" className='main-container'>
            <div className='w-full mx-auto flex flex-col justify-center items-center pt-10'>
                <div className='w-full mx-auto flex flex-col justify-center items-center'>
                    <span className='font-extrabold text-[27px] text-black'>Set Schedule</span>
                </div>
            </div>
            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <div className="w-full mx-auto flex flex-col justify-start items-center px-5 py-3">
                    <div className='w-full mx-auto flex flex-row justify-between items-center flex-wrap'>
                        <div><span className="text-[16px] font-bold text-white">Location</span></div>
                        <div>
                            <span className="text-[12px] font-bold text-white mr-2">UNITED STATES</span>
                            <span className="text-[12px] font-bold text-white">SEATTLE,WA</span>
                        </div>
                    </div>
                    <div className='w-full mx-auto flex flex-row justify-between items-center flex-wrap mt-5'>
                        <div><span className="text-[16px] font-bold text-white">Date</span></div>
                        <div>
                            <span className="text-[12px] font-bold text-white">Feb14-Jan11</span>
                        </div>
                    </div>
                    <div className='w-full mx-auto flex flex-row justify-between items-center flex-wrap mt-5'>
                        <div><span className="text-[16px] font-bold text-white">Days</span></div>
                        <div>
                            <span className="text-[12px] font-bold text-white">M,T,W,Th,Sa</span>
                        </div>
                    </div>
                    <div className='w-full mx-auto flex flex-row justify-between items-center flex-wrap mt-5'>
                        <div><span className="text-[16px] font-bold text-white">Time</span></div>
                        <div>
                            <span className="text-[12px] font-bold text-white">08:00 Am-01:00 Pm</span>
                        </div>
                    </div>
                    <div className='w-full mx-auto flex flex-row justify-between items-center flex-wrap mt-5'>
                        <div><span className="text-[16px] font-bold text-white">Name Schedule</span></div>
                        <div>
                            <InputText size="20px" className="rounded-sm bg-white px-1" />
                        </div>
                    </div>
                    <div className="w-full mx-auto flex flex-col justify-center items-center mt-10">
                        <Button onClick={() => closeModal()} text="Save Schedule" className="text-black text-[20px] font-bold max-w-[185px]" bgColor="[#05B7FD]" size="47px" />
                    </div>
                </div>
            </Modal>
            <div className='w-full mx-auto flex flex-row justify-between items-center flex-wrap mt-10'>
                <div className="mb-3 w-[160px]"><SelectBox options={savedSchedules} fontWeight="font-extrabold" size="40px" textSize="text-[12.6px]" /></div>
                <div className="flex flex-row justify-center items-center mb-3">
                    <div className="mr-3 w-[160px]"><SelectBox options={locations} size="40px" textSize="text-[12.6px]" fontWeight="font-extrabold" /></div>
                    <div className="w-[50px]"><Button text="Add" className="from-[#02227E] to-[#0247FF] bg-gradient-to-b text-white text-[14px] font-bold rounded-xl" size="40px" /></div>
                </div>
            </div>
            <div className='w-full mx-auto flex flex-row justify-between items-center flex-wrap mt-10'>
                <div className='mr-3 mb-3 flex flex-row justify-center items-center'>
                    <div className='w-[90px]'><SelectBox options={times} size="40px" textSize='text-[12.6px]' borderRightNone="true" fontWeight='font-extrabold' /></div>
                    <div className='w-[90px]'><SelectBox options={zones} size="40px" textSize='text-[12.6px]' borderLeftNone="true" fontWeight='font-extrabold' /></div>
                </div>
                <div className="mr-3 mb-3"><span className="text-[16px] font-medium">To</span></div>
                <div className="mb-3 flex flex-row justify-center items-center">
                    <div className='mr-3 flex flex-row justify-center items-center'>
                        <div className='w-[90px]'><SelectBox options={times} size="40px" textSize='text-[12.6px]' borderRightNone="true" fontWeight='font-extrabold' /></div>
                        <div className='w-[90px]'><SelectBox options={zones} size="40px" textSize='text-[12.6px]' borderLeftNone="true" fontWeight='font-extrabold' /></div>
                    </div>
                    <div className="w-[50px]"><Button text="Add" className="from-[#02227E] to-[#0247FF] bg-gradient-to-b text-white text-[14px] font-bold rounded-xl" size="40px" /></div>
                </div>
            </div>

            <div className='w-full mx-auto flex flex-row justify-between items-center flex-wrap mt-10'>
                <div className='mr-3 mb-3 flex flex-row justify-center items-center'>
                    <div className='w-[115px]'><SelectBox options={months} size="40px" textSize='text-[12.6px]' borderRightNone="true" fontWeight='font-extrabold' /></div>
                    <div className='w-[65px]'><SelectBox options={days} size="40px" textSize='text-[12.6px]' borderLeftNone="true" fontWeight='font-extrabold' /></div>
                </div>
                <div className="mr-3 mb-3"><span className="text-[16px] font-medium">To</span></div>
                <div className="mb-3 flex flex-row justify-center items-center">
                    <div className='mr-3 flex flex-row justify-center items-center'>
                        <div className='w-[115px]'><SelectBox options={months} size="40px" textSize='text-[12.6px]' borderRightNone="true" fontWeight='font-extrabold' /></div>
                        <div className='w-[65px]'><SelectBox options={days} size="40px" textSize='text-[12.6px]' borderLeftNone="true" fontWeight='font-extrabold' /></div>
                    </div>
                    <div className="w-[50px]"><Button text="Add" className="from-[#02227E] to-[#0247FF] bg-gradient-to-b text-white text-[14px] font-bold rounded-xl" size="40px" /></div>
                </div>
            </div>

            <div className='w-full mx-auto flex flex-row justify-between items-center mt-10'>
                <div><span className='text-[16px] font-bold'>Days:</span></div> 
                <div className="w-[36px]">{(Su==true)?<Button text="Su" onClick={() => setSu(false)} className='border-2 border-gray-300 rounded-md text-[14px] font-bold text-white' size="36px" bgColor="[#0247FF]" />:<Button text="Su" onClick={() => setSu(true)} className='border-2 border-gray-300 w-[36px] rounded-md text-[14px] font-bold text-white' size="36px" bgColor="white" />}</div>
                <div className="w-[36px]">{(Mo==true)?<Button text="Mo" onClick={() => setMo(false)} className='border-2 border-gray-300 rounded-md text-[14px] font-bold text-white' size="36px" bgColor="[#0247FF]" />:<Button text="Mo" onClick={() => setMo(true)} className='border-2 border-gray-300 w-[36px] rounded-md text-[14px] font-bold text-white' size="36px" bgColor="white" />}</div>
                <div className="w-[36px]">{(Tu==true)?<Button text="Tu" onClick={() => setTu(false)} className='border-2 border-gray-300 rounded-md text-[14px] font-bold text-white' size="36px" bgColor="[#0247FF]" />:<Button text="Tu" onClick={() => setTu(true)} className='border-2 border-gray-300 w-[36px] rounded-md text-[14px] font-bold text-white' size="36px" bgColor="white" />}</div>
                <div className="w-[36px]">{(We==true)?<Button text="We" onClick={() => setWe(false)} className='border-2 border-gray-300 rounded-md text-[14px] font-bold text-white' size="36px" bgColor="[#0247FF]" />:<Button text="We" onClick={() => setWe(true)} className='border-2 border-gray-300 w-[36px] rounded-md text-[14px] font-bold text-white' size="36px" bgColor="white" />}</div>
                <div className="w-[36px]">{(Th==true)?<Button text="Th" onClick={() => setTh(false)} className='border-2 border-gray-300 rounded-md text-[14px] font-bold text-white' size="36px" bgColor="[#0247FF]" />:<Button text="Th" onClick={() => setTh(true)} className='border-2 border-gray-300 w-[36px] rounded-md text-[14px] font-bold text-white' size="36px" bgColor="white" />}</div>
                <div className="w-[36px]">{(Fr==true)?<Button text="Fr" onClick={() => setFr(false)} className='border-2 border-gray-300 rounded-md text-[14px] font-bold text-white' size="36px" bgColor="[#0247FF]" />:<Button text="Fr" onClick={() => setFr(true)} className='border-2 border-gray-300 w-[36px] rounded-md text-[14px] font-bold text-white' size="36px" bgColor="white" />}</div>
                <div className="w-[36px]">{(Sa==true)?<Button text="Sa" onClick={() => setSa(false)} className='border-2 border-gray-300 rounded-md text-[14px] font-bold text-white' size="36px" bgColor="[#0247FF]" />:<Button text="Sa" onClick={() => setSa(true)} className='border-2 border-gray-300 w-[36px] rounded-md text-[14px] font-bold text-white' size="36px" bgColor="white" />}</div>
            </div>

            {/* <div className="w-full mx-auto flex flex-col justify-center items-center mt-10">
                <Button text="Review Schedule" className="text-[#040C50]" />
            </div>
            <div className="w-full mx-auto flex flex-col justify-centger items-center mt-10">
                <Button text="Set Rules" className='max-w-[216px] bg-gradient-to-b from-[#02227E] to-[#0247FF] border-2 border-gray-300 text-[#D9D9D9]' />
            </div> */}
            
            {/* <div className="w-full mx-auto flex flex-row justify-between items-center mt-10">
                <div><span className="text-[16px] font-bold">Enter Buffer Time</span></div>
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
            </div> */}

            {/* <div className="w-full mx-auto flex flex-row justify-between items-center mt-10">
                <div><span className="text-[16px] font-bold">Appt Black out Time</span></div>
                <div className="flex flex-row justify-around items-end">
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

            <div className='w-full mx-auto flex flex-row justify-between items-center mt-10'>
                <div><span className='text-[16px] font-bold'>Black out exemptions</span></div>
                <div><InputText className="rounded-md" placeholder="Enter Varify ID" size="25px" /></div>
            </div> */}

            {/* <div className="w-full mx-auto flex flex-col justify-center items-center mt-10">
                <Button text="Save Rules" className="text-[#040C50] font-bold" />
            </div> */}

            <div className='w-full mx-auto flex flex-col justify-center items-center mt-8'>
                <div className='w-full mx-auto flex justify-start items-center'>
                    <div className='mr-6'><span className='font-extrabold text-[16px] text-[#026EFF]'>Location</span></div>
                    <div className='font-extrabold text-[10.8px]'><span>New York</span><span className='ml-2'>NY</span></div>
                </div>
                <div className='w-full mx-auto flex justify-start items-center mt-4'>
                    <div className='mr-6'><span className='font-extrabold text-[16px] text-[#026EFF]'>Date</span></div>
                    <div className='font-extrabold text-[10.8px]'><span>Feb14-Jan11</span></div>
                </div>
                <div className='w-full mx-auto flex justify-start items-center mt-4'>
                    <div className='mr-6'><span className='font-extrabold text-[16px] text-[#026EFF]'>Days</span></div>
                    <div className='font-extrabold text-[10.8px]'><span>M,T,W,Th,Sa</span></div>
                </div>
                <div className='w-full mx-auto flex justify-start items-center mt-4'>
                    <div className='mr-6'><span className='font-extrabold text-[16px] text-[#026EFF]'>Time</span></div>
                    <div className='font-extrabold text-[10.8px]'><span>08:00 Am-01:00 Pm</span></div>
                </div>
            </div>
            <div className='w-full mx-auto flex flex-row justify-between items-center mt-6'>
                <Button onClick={() => handleNavigateToCalendar()} text="Calendar" className={'font-bold text-[18px] text-[#040C50] mr-6'} />
                <Button onClick={() => openModal()} text="Review Schedule" className={'font-bold text-[18px] text-[#040C50]'} />
            </div>
        </div>
    );
}