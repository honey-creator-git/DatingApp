import React from 'react'
import Button from '../../../components/Button';

export default function RightSidebar({ detail }) {
    const onClick = () => {
        console.log("Good!");
    }
    return (
        <div className='w-[380px] h-[100vh] bg-[#040C50] fixed top-0 right-0 border-l-2 border-white px-4 py-4 overflow-auto pb-20'>
            <div className='w-full flex flex-col justify-center items-center'>
                <div className='w-full flex flex-row justify-end items-center px-4'>
                    <button className='w-[51px] h-[51px] rounded-full bg-[#D9D9D9] mr-5'><div className='relative w-full h-full flex flex-col justify-center items-center'><img src={process.env.PUBLIC_URL + '/images/AdminNotification.png'} alt="Admin Notification" /><div className='w-[15px] h-[15px] bg-[#0247FF] rounded-full text-white text-[8px] font-bold flex flex-col jusity-center items-center absolute' style={{top: '0px', right: '0px'}}><span>12</span></div></div></button>
                    <img src={process.env.PUBLIC_URL + '/images/AdminNotificationUser.png'} alt="Admin Notification User" />
                </div>
                <div className='w-full flex flex-row justify-end items-center mt-2'><span className='text-[25px] font-bold text-white'>Stevo 87HY569</span></div>
                { 
                    detail == true 
                    ?
                    <div className='text-[36px] font-bold text-white mt-10'><span>Comments</span></div>
                    :
                    <div className='w-full h-[105px] bg-[#0198FE] mt-10 flex flex-row justify-between items-center px-6 py-2'>
                        <img src={process.env.PUBLIC_URL + '/images/AdminNotificaitonUser2.png'} className='mr-5' alt="Adminitrator User Second" />
                        <div className='flex flex-col justify-center items-start mr-3'><span className='text-[20px] font-bold text-black'>Hi</span><span className='text-[16px] font-medium text'>I am available</span></div>
                        <div className='h-full w-[60px] bg-[#0C8A02] mr-3 px-4 flex justify-center items-center'><span className='text-[48px] font-bold text-[#E1F562]'>3</span></div>
                        <div className='relative'>
                            <div className='w-[53px] h-[50px]'><img className='w-full h-full' src={process.env.PUBLIC_URL + '/images/AdminNotificaiton2.png'} alt="Admin Notification Second" /></div>
                            <div className='absolute w-[16px] h-[16px] rounded-full bg-[#0247FF] text-white text-[8px] font-bold flex flex-col justify-center items-center' style={{top: '0px', right: '0px'}}>1</div>
                        </div>
                    </div>
                }
                {detail == false && <div className='flex flex-row justify-center items-center mt-20'>
                    <div className='w-[75px] mr-2'><Button onClick={onClick} text='Feed' size='39px' className='rounded-full border-2 border-white bg-transparent text-[20px] text-white font-bold focus:bg-[#0198FE] focus:text-black' /></div>
                    <div className='w-[75px] mr-2'><Button onClick={onClick} text='FMTY' size='39px' className='rounded-full border-2 border-white bg-transparent text-[20px] text-white font-bold focus:bg-[#0198FE] focus:text-black' /></div>
                    <div className='w-[75px] mr-2'><Button onClick={onClick} text='Feed' size='39px' className='rounded-full border-2 border-white bg-transparent text-[20px] text-white font-bold focus:bg-[#0198FE] focus:text-black' /></div>
                    <div className='w-[75px] '><Button onClick={onClick} text='FMTY' size='39px' className='rounded-full border-2 border-white bg-transparent text-[20px] text-white font-bold focus:bg-[#0198FE] focus:text-black' /></div>
                </div>}
                <div className='flex flex-col justify-center items-center mt-10'>
                    <div className='flex flex-row justify-between items-center mt-10'><div className='w-[80px] h-[80px] mr-5'>{detail == false ? <img src={process.env.PUBLIC_URL + '/images/LocalUser.png'} alt="Local User" /> : <img src={process.env.PUBLIC_URL + '/images/DetailAdComment1.png'} alt="Detail Ad Comment 1" />}</div>{detail == false ? <div className='flex flex-col justify-center items-start'><span className='text-[20px] font-bold text-white'>Local</span><span className='text-[20px] font-bold text-white'>Sugar 87YEB7 Houston TX</span></div> : <div className='text-[20px] font-bold text-white'><span>Hot Rod 87YEB7 Very nice!!!!!!</span></div>}{detail == false && <div><button className='w-[66px] text-[20px] font-bold text-white'>See All</button></div>}</div>
                    <div className='flex flex-row justify-between items-center mt-10'><div className='w-[80px] h-[80px] mr-5'>{detail == false ? <img src={process.env.PUBLIC_URL + '/images/Traveler.png'} alt="Traveler" /> : <img src={process.env.PUBLIC_URL + '/images/DetailAdComment2.png'} alt="Detail Ad Comment 2" />}</div>{detail == false ? <div className='flex flex-col justify-center items-start'><span className='text-[20px] font-bold text-white'>Travelling</span><span className='text-[20px] font-bold text-white'>Crystal 87YEB7 Traveling 8-5</span></div> : <div className='text-[20px] font-bold text-white'><span>Diamond A598E7H BEAUTIFUL!</span></div>}{detail == false && <div><button className='w-[66px] text-[20px] font-bold text-white'>See All</button></div>}</div>
                    <div className='flex flex-row justify-between items-center mt-10'><div className='w-[80px] h-[80px] mr-5'>{detail == false ? <img src={process.env.PUBLIC_URL + '/images/FMTY.png'} alt="FMTY User" /> : <img src={process.env.PUBLIC_URL + '/images/DetailAdComment3.png'} alt="Detail Ad Comment 3" />}</div>{detail == false ? <div className='flex flex-col justify-center items-start'><span className='text-[20px] font-bold text-white'>FMTY</span><span className='text-[20px] font-bold text-white'>Sugar 87YEB7 Portland CA</span></div> : <div className='text-[20px] font-bold text-white'><span>Crystal 8YH67S Thats Hot !!!!!!</span></div>}{detail == false && <div><button className='w-[66px] text-[20px] font-bold text-white'>See All</button></div>}</div>
                    <div className='flex flex-row justify-between items-center mt-10'><div className='w-[80px] h-[80px] mr-5'>{detail == false ? <img src={process.env.PUBLIC_URL + '/images/LocalUser.png'} alt="Local User" /> : <img src={process.env.PUBLIC_URL + '/images/DetailAdComment4.png'} alt="Detail Ad Comment 4" />}</div>{detail == false ? <div className='flex flex-col justify-center items-start'><span className='text-[20px] font-bold text-white'>Local</span><span className='text-[20px] font-bold text-white'>Sugar 87YEB7 Houston TX</span></div> : <div className='text-[20px] font-bold text-white'><span>Big Boy 7890JS7 Thats Hot !!!!!!</span></div>}{detail == false && <div><button className='w-[66px] text-[20px] font-bold text-white'>See All</button></div>}</div>
                    <div className='flex flex-row justify-between items-center mt-10'><div className='w-[80px] h-[80px] mr-5'>{detail == false ? <img src={process.env.PUBLIC_URL + '/images/LocalUser.png'} alt="Local User" /> : <img src={process.env.PUBLIC_URL + '/images/DetailAdComment5.png'} alt="Detail Ad Comment 5" />}</div>{detail == false ? <div className='flex flex-col justify-center items-start'><span className='text-[20px] font-bold text-white'>Local</span><span className='text-[20px] font-bold text-white'>Sugar 87YEB7 Houston TX</span></div> : <div className='text-[20px] font-bold text-white'><span>Onyx 78UR897 I love it how much</span></div>}{detail == false && <div><button className='w-[66px] text-[20px] font-bold text-white'>See All</button></div>}</div>
                </div>
                <div className='relative flex flex-col justify-center items-center mt-10 h-[200px] rounded-xl bg-gradient-to-r from-[#0247FF] to-[#799EFF]'>
                    <img src={process.env.PUBLIC_URL + '/images/EnjoyBackgroundImage.png'} alt="Enjoy" />
                    <div className='absolute flex flex-col justify-center items-center w-[110px]' style={{left: '25px', top: '8px'}}><span className='text-[32px] font-bold text-white'>Enjoy People</span><span className='text-[20px] font-bold text-white'>Dancer</span><div className='w-[116px]'><Button text="See Now" className={'text-[16px] font-bold text-white bg-gradient-to-b from-[#0198FE] to-[#0247FF] mt-5 focus:from-[#0247FF]'} size="43px" /></div></div>
                    <div className='absolute h-full w-[200px] flex justify-end items-center' style={{right: '10px'}}><img className='h-full' src={process.env.PUBLIC_URL + '/images/AdminDancer.png'} alt='Admin Dancer' /></div>
                </div>
            </div>
        </div>
    );
}