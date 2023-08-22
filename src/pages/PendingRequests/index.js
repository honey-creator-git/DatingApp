import React, { useState } from 'react'
import ReactStars from "react-rating-stars-component";
import Button from '../../components/Button';
const Modal = ({ isOpen, onClose }) => {
    return (
      <>
        {isOpen ? (
          <div className="fixed z-10 inset-0 overflow-y-auto rounded-2xl">
            <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
              {/* <div className="fixed inset-0 transition-opacity" aria-hidden="true">
                <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
              </div> */}
  
              {/* <span className="hidden sm:inline-block sm:align-top sm:h-screen" aria-hidden="true">&#8203;</span> */}
  
              <div className="bg-gradient-to-t w-full from-[#0247FF] to-[#316AFF] inline-block align-middle bg-[white] rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                <div className="px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                      <h3 className="text-lg leading-6 font-medium text-white">Would you like to write <br/> Hot Rod a message</h3>
                      <div className="mt-2">
                       <textarea className='w-full rounded-2xl' rows={4} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="px-4 py-3 mb-3 sm:px-6 sm:flex sm:flex-row-reverse justify-center flex">
                  <button onClick={onClose} type="button" className="w-32 inline-flex justify-center rounded-full border border-transparent  bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm h-[32px]">
                    Deny
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </>
    );
  };
export default function PendingRequests() {

    const [isModalOpen, setIsModalOpen] = useState(true);

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

  return (
    <div className="main-container" style={{paddingInline: 0}}>
        <div className='-top-12 relative w-full'>
            <div className='flex-1 w-full'>
                <div className='w-full mx-auto flex flex-row items-center justify-center'>
                    <div className='w-full flex flex-col justify-start items-center mt-14'>
                        <h3 className='text-lg' style={{lineHeight: 0.5}}><strong>VAI</strong>RIFY ID </h3>
                        <h4 className='text-sm'>897UY56</h4>
                    </div>
                    <img src={process.env.PUBLIC_URL + '/images/AdminFollowing1.png'} alt="Vairipay Add Logo" width={120} height={120} className='mx-auto' />
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
                        <div className='flex justify-between gap-2 items-center py-2 border-[#E4E3E3] border-b-2'>
                            <h5 className='text-[13px] font-bold'>Agreed Rate for this  Appointment</h5>
                            <h5 className='text-[16px] font-bold'>$600</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='flex gap-2 px-4'>
            <Button text={'Approve'} className={' rounded-full from-[#13A307] to-[#13A307] text-[#02227E] text-[16px] h-[32px] border-[3px] border-[#02227E]'} />
            <Button text={'Modify'} className={' rounded-full from-[#FFC020] to-[#FFC020] text-[#02227E] text-[16px] h-[32px] border-[3px] border-[#02227E]'} />
            <Button text={'Deny'} className={'rounded-full from-[#DB3002] to-[#DB3002] text-[#02227E] text-[16px] h-[32px] border-[3px] border-[#02227E]'} />
        </div>
        <Modal isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  )
}

