import React from 'react'
import ReactStars from "react-rating-stars-component";
import Button from '../../components/Button';

export default function MarketplacePosts() {
  return (
    <div className='main-container pt-10 px-0'>
        <div className='bg-[#040B476f] w-full py-2'>
            <h3 className='text-[#040C50] text-[24px] font-bold'>Marketplace Posts</h3>
        </div>
        <div className='mt-9 px-3 justify-center gap-6 flex flex-col'>
            <div className='bg-[#3760CB] flex flex-col rounded-2xl p-3 border-2 border-white'>
                <div className='flex flex-row justify-around items-center'>
                    <div className='w-[97px] flex flex-col mr-4'>
                        <img className='w-full' src={`${process.env.PUBLIC_URL}/images/AdminAboutMe2.png`} alt='' />
                    </div>
                    <div className='w-[250px] flex flex-col gap-[2px]'>
                        <div className='w-full'>
                            <div className='flex flex-col'>
                                <div className='grid grid-cols-2'>
                                    <div className='text-start'>                            
                                    <h6 className='text-[10px] text-white font-bold'>Location:</h6>
                                    </div>
                                    <div className='text-start'>
                                    <h6 className='text-[10px] text-white font-bold'>Houston Tx</h6>
                                    </div>
                                </div>
                                <div className='grid grid-cols-2'>
                                    <div className='text-start'>                            
                                    <h6 className='text-[10px] text-white font-bold'>Category:</h6>
                                    </div>
                                    <div className='text-start'>
                                    <h6 className='text-[10px] text-white font-bold'>Escort</h6>
                                    </div>
                                </div>
                                <div className='grid grid-cols-2'>
                                    <div className='text-start'>                            
                                    <h6 className='text-[10px] text-white font-bold'>Sub:</h6>
                                    </div>
                                    <div className='text-start'>
                                    <h6 className='text-[10px] text-white font-bold'>Travelling</h6>
                                    </div>
                                </div>
                                <div className='grid grid-cols-2'>
                                    <div className='text-start'>                            
                                    <h6 className='text-[10px] text-white font-bold'>Date:</h6>
                                    </div>
                                    <div className='text-start'>
                                    <h6 className='text-[10px] text-white font-bold'>From 2/28 to 3/14</h6>
                                    </div>
                                </div>
                                <div className='grid grid-cols-2'>
                                    <div className='text-start'>                            
                                    <h6 className='text-[10px] text-white font-bold'>Time:</h6>
                                    </div>
                                    <div className='text-start'>
                                    <h6 className='text-[10px] text-white font-bold'>9am</h6>
                                    </div>
                                </div>
                                <div className='grid grid-cols-2'>
                                    <div className='text-start'>                            
                                    <h6 className='text-[10px] text-white font-bold'>Frequency:</h6>
                                    </div>
                                    <div className='text-start'>
                                    <h6 className='text-[10px] text-white font-bold'>Daily</h6>
                                    </div>
                                </div>                    
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex gap-4 mt-4'>
                    <Button text={'Cancel'} className={'flex items-center justify-center rounded-full h-[23px] text-white border-[#02227E] border-[1px] from-[#FF0000] to-[#FF0000]'} size="23px" />
                    <Button text={'Re-post'} className={'flex items-center justify-center rounded-full h-[23px] text-white border-[#02227E] border-[1px] from-[#0C8A02] to-[#0C8A02]'} size="23px" />
                    <Button text={'View'} className={'flex items-center justify-center rounded-full h-[23px] text-white border-[#02227E] border-[1px] from-[#02227E] to-[#02227E]'} size="23px" />
                </div>
            </div>
            <div className='bg-[#3760CB] flex flex-col rounded-2xl p-3 border-2 border-white'>
                <div className='flex flex-row justify-around items-center'>
                    <div className='w-[97px] flex flex-col mr-4'>
                        <img className='w-full' src={`${process.env.PUBLIC_URL}/images/AdminAboutMe2.png`} alt='' />
                    </div>
                    <div className='w-[250px] flex flex-col gap-[2px]'>
                        <div className='w-full'>
                            <div className='flex flex-col'>
                                <div className='grid grid-cols-2'>
                                    <div className='text-start'>                            
                                    <h6 className='text-[10px] text-white font-bold'>Location:</h6>
                                    </div>
                                    <div className='text-start'>
                                    <h6 className='text-[10px] text-white font-bold'>Houston Tx</h6>
                                    </div>
                                </div>
                                <div className='grid grid-cols-2'>
                                    <div className='text-start'>                            
                                    <h6 className='text-[10px] text-white font-bold'>Category:</h6>
                                    </div>
                                    <div className='text-start'>
                                    <h6 className='text-[10px] text-white font-bold'>Escort</h6>
                                    </div>
                                </div>
                                <div className='grid grid-cols-2'>
                                    <div className='text-start'>                            
                                    <h6 className='text-[10px] text-white font-bold'>Sub:</h6>
                                    </div>
                                    <div className='text-start'>
                                    <h6 className='text-[10px] text-white font-bold'>Travelling</h6>
                                    </div>
                                </div>
                                <div className='grid grid-cols-2'>
                                    <div className='text-start'>                            
                                    <h6 className='text-[10px] text-white font-bold'>Date:</h6>
                                    </div>
                                    <div className='text-start'>
                                    <h6 className='text-[10px] text-white font-bold'>From 2/28 to 3/14</h6>
                                    </div>
                                </div>
                                <div className='grid grid-cols-2'>
                                    <div className='text-start'>                            
                                    <h6 className='text-[10px] text-white font-bold'>Time:</h6>
                                    </div>
                                    <div className='text-start'>
                                    <h6 className='text-[10px] text-white font-bold'>9am</h6>
                                    </div>
                                </div>
                                <div className='grid grid-cols-2'>
                                    <div className='text-start'>                            
                                    <h6 className='text-[10px] text-white font-bold'>Frequency:</h6>
                                    </div>
                                    <div className='text-start'>
                                    <h6 className='text-[10px] text-white font-bold'>Daily</h6>
                                    </div>
                                </div>                    
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex gap-4 mt-4'>
                    <Button text={'Cancel'} className={'flex items-center justify-center rounded-full text-white border-[#02227E] border-[1px] from-[#FF0000] to-[#FF0000] h-[23px]'} size="23px" />
                    <Button text={'Re-post'} className={'flex items-center justify-center rounded-full text-white border-[#02227E] border-[1px] from-[#0C8A02] to-[#0C8A02] h-[23px]'} size="23px" />
                    <Button text={'View'} className={'flex items-center justify-center rounded-full text-white border-[#02227E] border-[1px] from-[#02227E] to-[#02227E] h-[23px]'} size="23px" />
                </div>
            </div>
        </div>
    </div>
  )
}
