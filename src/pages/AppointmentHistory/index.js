import React from 'react'
import ReactStars from "react-rating-stars-component";

export default function AppointmentHistory() {
  return (
    <div className='main-container px-0 pt-12'>
        <div className='bg-[#040B476f] w-full py-2'>
            <h3 className='text-[#040C50] text-[24px] font-bold'>Appointment History</h3>
        </div>
        <div className="w-full mx-auto flex flex-col justify-start items-center mt-2 gap-4 pt-8 px-3 max-h-[472px] overflow-scroll">
            <div className="w-full mx-auto flex flex-row justify-between items-center hover:bg-blue-100 p-2 rounded-[60px] bg-[#3760CB] border-[#D9D9D9] border-2">
                <div className="w-max-72 w-full"><img className="w-full" src={process.env.PUBLIC_URL + "/images/Notificaiton1.png"} alt="Notification 1" /></div>
                
                <div className="flex w-full flex-col justify-center items-center">
                    <div className="text-[12px] text-white font-bold"><span>TRUREVUⓒ</span></div>
                    <div className="text-[12px] text-white font-bold"><span>Hot Rod</span></div>
                    <div className="text-[12px] text-white font-bold"><span>9SES1688</span></div>
                    <div className='flex gap-1 items-center'>
                        <ReactStars count={5} value={5.0} size={16} classNames={'leading-none'}/>
                        <span className='font-bold text-[#02227E]'>5.0</span>
                    </div>

                </div>
                <div className="flex w-full flex-col justify-center items-center">
                    <div className="text-[14px] font-bold text-white"><span>1/03/23</span></div>
                    <div className="text-[14px] font-bold text-white"><span>3:00pm</span></div>
                </div>
                <div className="flex w-full flex-col justify-center items-center rounded-full border-[2px] px-3 border-white bg-[#02227E]">
                    <h4 className='text-[12px] text-white border-b-2 border-white'>89475NM98</h4>
                    <h3 className='text-[16px] text-white font-bold'>Details</h3>
                </div>
            </div>
            <div className="w-full mx-auto flex flex-row justify-between items-center hover:bg-blue-100 p-2 rounded-[60px] bg-[#3760CB] border-[#D9D9D9] border-2">
                <div className="w-max-72 w-full"><img className="w-full" src={process.env.PUBLIC_URL + "/images/Notificaiton1.png"} alt="Notification 1" /></div>
                
                <div className="flex w-full flex-col justify-center items-center">
                    <div className="text-[12px] text-white font-bold"><span>TRUREVUⓒ</span></div>
                    <div className="text-[12px] text-white font-bold"><span>Hot Rod</span></div>
                    <div className="text-[12px] text-white font-bold"><span>9SES1688</span></div>
                    <div className='flex gap-1 items-center'>
                        <ReactStars count={5} value={5.0} size={16} classNames={'leading-none'}/>
                        <span className='font-bold text-[#02227E]'>5.0</span>
                    </div>

                </div>
                <div className="flex w-full flex-col justify-center items-center">
                    <div className="text-[14px] font-bold text-white"><span>1/03/23</span></div>
                    <div className="text-[14px] font-bold text-white"><span>3:00pm</span></div>
                </div>
                <div className="flex w-full flex-col justify-center items-center rounded-full border-[2px] px-3 border-white bg-[#02227E]">
                    <h4 className='text-[12px] text-white border-b-2 border-white'>89475NM98</h4>
                    <h3 className='text-[16px] text-white font-bold'>Details</h3>
                </div>
            </div>
            <div className="w-full mx-auto flex flex-row justify-between items-center hover:bg-blue-100 p-2 rounded-[60px] bg-[#3760CB] border-[#D9D9D9] border-2">
                <div className="w-max-72 w-full"><img className="w-full" src={process.env.PUBLIC_URL + "/images/Notificaiton1.png"} alt="Notification 1" /></div>
                
                <div className="flex w-full flex-col justify-center items-center">
                    <div className="text-[12px] text-white font-bold"><span>TRUREVUⓒ</span></div>
                    <div className="text-[12px] text-white font-bold"><span>Hot Rod</span></div>
                    <div className="text-[12px] text-white font-bold"><span>9SES1688</span></div>
                    <div className='flex gap-1 items-center'>
                        <ReactStars count={5} value={5.0} size={16} classNames={'leading-none'}/>
                        <span className='font-bold text-[#02227E]'>5.0</span>
                    </div>

                </div>
                <div className="flex w-full flex-col justify-center items-center">
                    <div className="text-[14px] font-bold text-white"><span>1/03/23</span></div>
                    <div className="text-[14px] font-bold text-white"><span>3:00pm</span></div>
                </div>
                <div className="flex w-full flex-col justify-center items-center rounded-full border-[2px] px-3 border-white bg-[#02227E]">
                    <h4 className='text-[12px] text-white border-b-2 border-white'>89475NM98</h4>
                    <h3 className='text-[16px] text-white font-bold'>Details</h3>
                </div>
            </div>
            <div className="w-full mx-auto flex flex-row justify-between items-center hover:bg-blue-100 p-2 rounded-[60px] bg-[#3760CB] border-[#D9D9D9] border-2">
                <div className="w-max-72 w-full"><img className="w-full" src={process.env.PUBLIC_URL + "/images/Notificaiton1.png"} alt="Notification 1" /></div>
                
                <div className="flex w-full flex-col justify-center items-center">
                    <div className="text-[12px] text-white font-bold"><span>TRUREVUⓒ</span></div>
                    <div className="text-[12px] text-white font-bold"><span>Hot Rod</span></div>
                    <div className="text-[12px] text-white font-bold"><span>9SES1688</span></div>
                    <div className='flex gap-1 items-center'>
                        <ReactStars count={5} value={5.0} size={16} classNames={'leading-none'}/>
                        <span className='font-bold text-[#02227E]'>5.0</span>
                    </div>

                </div>
                <div className="flex w-full flex-col justify-center items-center">
                    <div className="text-[14px] font-bold text-white"><span>1/03/23</span></div>
                    <div className="text-[14px] font-bold text-white"><span>3:00pm</span></div>
                </div>
                <div className="flex w-full flex-col justify-center items-center rounded-full border-[2px] px-3 border-white bg-[#02227E]">
                    <h4 className='text-[12px] text-white border-b-2 border-white'>89475NM98</h4>
                    <h3 className='text-[16px] text-white font-bold'>Details</h3>
                </div>
            </div>
            <div className="w-full mx-auto flex flex-row justify-between items-center hover:bg-blue-100 p-2 rounded-[60px] bg-[#3760CB] border-[#D9D9D9] border-2">
                <div className="w-max-72 w-full"><img className="w-full" src={process.env.PUBLIC_URL + "/images/Notificaiton1.png"} alt="Notification 1" /></div>
                
                <div className="flex w-full flex-col justify-center items-center">
                    <div className="text-[12px] text-white font-bold"><span>TRUREVUⓒ</span></div>
                    <div className="text-[12px] text-white font-bold"><span>Hot Rod</span></div>
                    <div className="text-[12px] text-white font-bold"><span>9SES1688</span></div>
                    <div className='flex gap-1 items-center'>
                        <ReactStars count={5} value={5.0} size={16} classNames={'leading-none'}/>
                        <span className='font-bold text-[#02227E]'>5.0</span>
                    </div>

                </div>
                <div className="flex w-full flex-col justify-center items-center">
                    <div className="text-[14px] font-bold text-white"><span>1/03/23</span></div>
                    <div className="text-[14px] font-bold text-white"><span>3:00pm</span></div>
                </div>
                <div className="flex w-full flex-col justify-center items-center rounded-full border-[2px] px-3 border-white bg-[#02227E]">
                    <h4 className='text-[12px] text-white border-b-2 border-white'>89475NM98</h4>
                    <h3 className='text-[16px] text-white font-bold'>Details</h3>
                </div>
            </div>
        </div>
    </div>
  )
}
