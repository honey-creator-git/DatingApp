import React from 'react'
import ReactStars from "react-rating-stars-component";
import Button from '../../components/Button';

export default function Invite() {
  return (
    <div className='main-container px-3 py-6 pb-20 justify-center gap-2 flex flex-col items-center'>
      <div className='w-[100vw] flex flex-col justify-center items-center bg-[#797E9E] mb-6'>
        <div><span className='font-bold text-[26px] text-[#040C50]'>Open Invitations</span></div>
      </div>
      <div className='bg-[#3760CB] flex flex-col rounded-2xl p-3 border-2 border-white shadow-2xl mb-4'>
          <div className='flex gap-2'>
              <div className='flex flex-col'>
                <img src={`${process.env.PUBLIC_URL}/images/AdminAboutMe2.png`} alt='' width={74} />
                <div>
                  <h4 className='text-white text-[12px] font-bold leading-4'>TRUREVUⓒ</h4>
                  <h4 className='text-white text-[12px] font-bold leading-4'>Hot Rod</h4>
                  <h4 className='text-white text-[12px] font-bold leading-4'>98UY778</h4>
                </div>
                <div className='flex items-center gap-1 py-1'>
                  <ReactStars count={4} value={4.7} size={16} />
                  <span className='text-black font-bold text-[11px]'>5.0</span>
                </div>
                <div className='w-[81px] mt-1'>
                  <Button text={'View Profile'} className={'text-[14px] text-white font-bold border-2 border-white from-[#02227E] to-[#02227E] leading-4 rounded-full'} size={'36px'} />
                </div>
              </div>
              <div className='flex flex-col gap-[2px]'>
                <div className='w-full grid grid-cols-3'>
                  <div className='flex flex-col'>
                    <div>
                      <h6 className='text-[10px] text-white font-bold'>Requested</h6>
                      <h6 className='text-[10px] text-white font-bold'>Appt/time</h6>
                    </div>
                    <div className='mt-2'>
                      <h6 className='text-[10px] text-white font-bold'>1/28/23</h6>
                      <h6 className='text-[10px] text-white font-bold'>4:00pm to 6:00pm</h6>
                    </div>
                  </div>
                  <div className='flex flex-col'>
                    <div>
                      <h6 className='text-[10px] text-white font-bold'>Requested</h6>
                      <h6 className='text-[10px] text-white font-bold'>Service/Time</h6>
                    </div>
                    <div className='mt-2'>
                      <h6 className='text-[10px] text-white font-bold'>Escort</h6>
                      <h6 className='text-[10px] text-white font-bold'>1.5 HRS</h6>
                    </div>
                  </div>
                  <div className='flex flex-col'>
                    <div>
                      <h6 className='text-[10px] text-white font-bold'>Requested</h6>
                      <h6 className='text-[10px] text-white font-bold'>Location</h6>
                    </div>
                    <div className='mt-2'>
                      <h6 className='text-[10px] text-white font-bold'>Incall</h6>
                    </div>
                  </div>
                </div>
                <div className='flex gap-[2px] justify-around'>
                  <div className='border-2 border-[#02227E] rounded-2xl bg-[#fdfdfd80] p-2 w-[140px]'>
                    <p className='font-bold leading-3 text-[10px]'>
                    Please indicate if you have extra time for dinner at Marion's steak house
                    </p>
                  </div>
                  <div className='border-2 border-[#02227E] rounded-2xl bg-[#fdfdfd80] p-2 w-[100px]'>
                  </div>
                </div>
                <div className='flex gap-2 justify-around mt-1'>
                <div className='w-[145px]'><Button text={'Accept Invitation'} className={'text-[14px] text-white font-bold border-2 border-white from-[#0C8A02] to-[#0C8A02] leading-4 rounded-full w-[144px] mt-[3px] px-8'} size={'36px'} /></div>
                  <div>
                    <h5 className='text-[10px] text-white '>PRICE OFFERED</h5>
                    <h3 className='text-[24px] text-black font-bold ' style={{WebkitTextStrokeColor: 'white', WebkitTextStrokeWidth: .6}}>$600</h3>
                  </div>
                </div>
              </div>
          </div>
      </div>
      <div className='bg-[#3760CB] flex flex-col rounded-2xl p-3 border-2 border-white shadow-2xl'>
          <div className='flex gap-2'>
              <div className='flex flex-col'>
                <img src={`${process.env.PUBLIC_URL}/images/AdminAboutMe2.png`} alt='' width={74} />
                <div>
                  <h4 className='text-white text-[12px] font-bold leading-4'>TRUREVUⓒ</h4>
                  <h4 className='text-white text-[12px] font-bold leading-4'>Hot Rod</h4>
                  <h4 className='text-white text-[12px] font-bold leading-4'>98UY778</h4>
                </div>
                <div className='flex items-center gap-1 py-1'>
                  <ReactStars count={4} value={4.7} size={16} />
                  <span className='text-black font-bold text-[11px]'>5.0</span>
                </div>
                <div className='w-[81px] mt-1'>
                  <Button text={'View Profile'} className={'text-[14px] text-white font-bold border-2 border-white from-[#02227E] to-[#02227E] leading-4 rounded-full'} size={'36px'} />
                </div>
              </div>
              <div className='flex flex-col gap-[2px]'>
                <div className='w-full grid grid-cols-3'>
                  <div className='flex flex-col'>
                    <div>
                      <h6 className='text-[10px] text-white font-bold'>Requested</h6>
                      <h6 className='text-[10px] text-white font-bold'>Appt/time</h6>
                    </div>
                    <div className='mt-2'>
                      <h6 className='text-[10px] text-white font-bold'>1/28/23</h6>
                      <h6 className='text-[10px] text-white font-bold'>4:00pm to 6:00pm</h6>
                    </div>
                  </div>
                  <div className='flex flex-col'>
                    <div>
                      <h6 className='text-[10px] text-white font-bold'>Requested</h6>
                      <h6 className='text-[10px] text-white font-bold'>Service/Time</h6>
                    </div>
                    <div className='mt-2'>
                      <h6 className='text-[10px] text-white font-bold'>Escort</h6>
                      <h6 className='text-[10px] text-white font-bold'>1.5 HRS</h6>
                    </div>
                  </div>
                  <div className='flex flex-col'>
                    <div>
                      <h6 className='text-[10px] text-white font-bold'>Requested</h6>
                      <h6 className='text-[10px] text-white font-bold'>Location</h6>
                    </div>
                    <div className='mt-2'>
                      <h6 className='text-[10px] text-white font-bold'>Incall</h6>
                    </div>
                  </div>
                </div>
                <div className='flex gap-[2px] justify-around'>
                  <div className='border-2 border-[#02227E] rounded-2xl bg-[#fdfdfd80] p-2 w-[140px]'>
                    <p className='font-bold leading-3 text-[10px]'>
                    Please indicate if you have extra time for dinner at Marion's steak house
                    </p>
                  </div>
                  <div className='border-2 border-[#02227E] rounded-2xl bg-[#fdfdfd80] p-2 w-[100px]'>
                  </div>
                </div>
                <div className='flex gap-2 justify-around mt-1'>
                  <div className='w-[145px]'><Button text={'Accept Invitation'} className={'text-[14px] text-white font-bold border-2 border-white from-[#0C8A02] to-[#0C8A02] leading-4 rounded-full w-[144px] mt-[3px] px-8'} size={'36px'} /></div>
                  <div>
                    <h5 className='text-[10px] text-white '>PRICE OFFERED</h5>
                    <h3 className='text-[24px] text-black font-bold ' style={{WebkitTextStrokeColor: 'white', WebkitTextStrokeWidth: .6}}>$600</h3>
                  </div>
                </div>
              </div>
          </div>
      </div>
    </div>
  )
}
