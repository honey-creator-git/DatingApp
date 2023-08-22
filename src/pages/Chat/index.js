import React from 'react'
import ChatBubble from '../../components/ChatBubble'
import PersonalUserInformation from '../../components/ProfileUserInformation'
import InputText from '../../components/InputText'
import IconButton from '../../components/IconButton'
import ReactStars from "react-rating-stars-component";

export default function Chat() {
  return (
    <div className="main-container" style={{padding: 0}}>
      {/* <div className='w-full z-20'>
            <div className='flex-1 w-full'>
                <div className='w-full mx-auto flex flex-row items-center justify-center'>
                    <div className='w-full flex flex-col justify-start items-center mt-14'>
                        <h3 className='text-lg' style={{lineHeight: 0.5}}><strong>VAI</strong>RIFY ID </h3>
                        <h4 className='text-sm'>897UY56</h4>
                    </div>
                    <div className='relative w-full'>
                        <img src={process.env.PUBLIC_URL + '/images/AdminFollowing1.png'} alt="Vairipay Add Logo" width={120} height={120} className='mx-auto' />
                        <div style={{right: '10px', bottom: '15px'}} className='absolute'><img src={process.env.PUBLIC_URL + '/images/HotRodIcon2.png'} alt="Hot Rod Icon Second" /></div>
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
            </div>
      </div> */}
    <div className='w-full mx-auto flex flex-row justify-between'>
        <div className='flex flex-col justify-center gap-3 p-3 bg-[#313EB4] min-h-screen rounded-s-2xl items-center'>
            <div className='rounded-full'>
              <img src={`${process.env.PUBLIC_URL}/images/Ellipse142-3.png`} alt='' className='w-[48px] h-[48px]'/>
            </div>
            <div className='rounded-full'>
              <img src={`${process.env.PUBLIC_URL}/images/Ellipse142-3.png`} alt='' className='w-[48px] h-[48px]'/>
            </div>
            <div className='rounded-full'>
              <img src={`${process.env.PUBLIC_URL}/images/Ellipse142-3.png`} alt='' className='w-[48px] h-[48px]'/>
            </div>
            <div className='rounded-full'>
              <img src={`${process.env.PUBLIC_URL}/images/Ellipse142-3.png`} alt='' className='w-[48px] h-[48px]'/>
            </div>
            <div className='rounded-full'>
              <img src={`${process.env.PUBLIC_URL}/images/Ellipse142-3.png`} alt='' className='w-[48px] h-[48px]'/>
            </div>
            <div className='rounded-full'>
              <img src={`${process.env.PUBLIC_URL}/images/Ellipse142-3.png`} alt='' className='w-[48px] h-[48px]'/>
            </div>
        </div>  
        <div className='flex flex-col justify-between items-center flex-1 bg-white'>
              <div className="w-full">
              </div>
              <div className="w-full flex-1 flex flex-col justify-start items-center p-3 pt-[160px]">
                  <ChatBubble message={'In this example, the h-full class sets the height of the <div> element to be full,'} />
                  <ChatBubble message={'Keep in mind that the parent container must also have a specified height, or a chain of parent containers leading up to the root element must have a defined height for h-full to work correctly.'} isSent={true} />
                  <ChatBubble message={'Hi'} isSent={true} />
              </div>
              <div className='w-full flex justify-center items-center gap-2 mb-12 px-6'>
                <InputText className={'w-full text-lg bg-gray-300'} placeholder={'Type message'}/>
                <IconButton icon={
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
              </svg>
              
                } className={'rounded-full bg-gray-300'} />
              </div>
        </div>
    </div>
    </div>
  )
}
