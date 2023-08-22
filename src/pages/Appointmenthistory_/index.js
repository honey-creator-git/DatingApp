import React from 'react'
import ReactStars from "react-rating-stars-component";
import Button from '../../components/Button';

export default function AppointmentHistory_() {
  return (
    <div className="main-container" style={{paddingInline: 0}}>
        <div className='-top-14 relative w-full'>
            <div className='flex-1 w-full'>
                <div className='w-full mx-auto flex flex-row items-center justify-center'>
                    <div className='w-full flex flex-col justify-start items-center mt-14'>
                        <h3 className='text-lg' style={{lineHeight: 0.5}}><strong>VAI</strong>RIFY ID </h3>
                        <h4 className='text-sm'>897UY56</h4>
                    </div>
                <div className='relative w-full'>
                    <img src={process.env.PUBLIC_URL + '/images/AdminFollowing1.png'} alt="Vairipay Add Logo" width={120} height={120} className='mx-auto' />
                    <div style={{right: '20px', bottom: '12px'}} className='absolute'><img src={process.env.PUBLIC_URL + '/images/HotRodIcon2.png'} alt="Hot Rod Icon Second" /></div>
                </div>
                    <div className='w-full flex flex-col justify-start items-center mt-14'>
                        <h3 className='text-lg' style={{lineHeight: 0.5}}><strong>TRU</strong>REVUⓒ </h3>
                        <div className='flex items-center gap-1'>
                            <ReactStars count={5} value={4.7} size={16} classNames={'leading-none'}/>
                            <p>4.7</p>
                        </div>
                    </div>
                </div>
                <div className="w-full mx-auto">
                    <h2 className='text-2xl font-bold'>Hot Rod</h2>
                </div>        
                <div className='bg-[#040B476f] w-full py-2 mt-4'>
                    <h3 className='text-[#040C50] text-[24px] font-bold'>Appointment History</h3>
                </div>
                <div className='mt-5 px-3'>
                    <div className='flex flex-col gap-1'>
                        <div>
                            <h4 className='text-[16px] font-bold'>Upcoming Booking Details</h4>
                        </div>
                        <div className='flex gap-2 items-center py-2 border-[#E4E3E3] border-b-2'>
                            <h5 className='text-[14px] text-[#0247FF] font-bold'>Date/Time</h5>
                            <h5 className='text-[14px]'>1/28/23 at 4:00pm</h5>
                        </div> 
                        <div className='flex gap-2 items-center justify-between py-2 border-[#E4E3E3] border-b-2'>
                            <div className='flex gap-2 items-center'>
                                <h5 className='text-[16px] text-[#0247FF] font-bold'>Service</h5>
                                <h5 className='text-[14px] font-bold'>Escort</h5>
                            </div>
                            <div className='flex gap-2 items-center'>
                                <h5 className='text-[16px] text-[#0247FF] font-bold'>Duration</h5>
                                <h5 className='text-[14px] font-bold'>1hr</h5>
                            </div>
                            <div className='flex gap-2 items-center'>
                                <h5 className='text-[16px] text-[#0247FF] font-bold'>Rate</h5>
                                <h5 className='text-[14px] font-bold'>$500</h5>
                            </div>
                        </div> 
                        <div className='flex gap-2 items-center py-2 border-[#E4E3E3] border-b-2'>
                            <h5 className='text-[14px] text-[#0247FF] font-bold'>Extra’s</h5>
                            <h5 className='text-[14px] font-bold'>MSOG $50, BBBJ $50</h5>
                        </div>   
                        <div className='flex gap-2 items-center py-2 border-[#E4E3E3] border-b-2'>
                            <h5 className='text-[14px] text-[#0247FF] font-bold'>Outcall</h5>
                            <h5 className='text-[14px] font-bold'>1439 Inverness Miami FI 34598</h5>
                        </div>
                        <div>
                            <h4 className='text-[16px] font-bold flex'>Hot Rod details</h4>
                        </div>
                        <div className='flex justify-between gap-2 items-center py-2 border-[#E4E3E3] border-b-2'>
                            <h5 className='text-[14px] text-[#0247FF] font-bold'>Gender</h5>
                            <h5 className='text-[14px] font-bold'>Female</h5>
                        </div>
                        <div className='flex justify-between gap-2 items-center py-2 border-[#E4E3E3] border-b-2'>
                            <h5 className='text-[14px] text-[#0247FF] font-bold'>VAIRIFY ID</h5>
                            <h5 className='text-[14px] text-[#0247FF] font-bold'>ID#  658H39P</h5>
                        </div>
                        <div className='flex justify-between gap-2 items-center py-2 border-[#E4E3E3] border-b-2'>
                            <h5 className='text-[14px] text-[#0247FF] font-bold'>VAIRIDATE #</h5>
                            <h5 className='text-[14px] text-[#0247FF] font-bold'>0046893490</h5>
                        </div>
                        <div className='flex justify-between gap-2 items-center py-2'>
                            <h5 className='text-[13px] font-bold'>Agreed Rate for this  Appointment</h5>
                            <h5 className='text-[16px] font-bold'>$600</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='w-[194px] mx-auto'><Button text={'Add To Contacts'} className={'w-48 rounded-full from-[#040C50] to-[#040C50] text-white text-[16px] h-[37px]'} size="37px" /></div>
    </div>
  )
}
