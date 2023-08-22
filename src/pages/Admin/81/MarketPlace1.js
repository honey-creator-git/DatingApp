import React from 'react'
import Button from '../../../components/Button';
import SelectBox from '../../../components/SelectBox'

export default function MarketPlace1() {
    const options1 = ['Feed']
    const options2 = ['FMTY']
    const options3 = ['Gallery']
  return (
    <div className='flex flex-col justify-center items-start'>
        <div className='w-full mb-8'>
            {/* <h1 className='text-4xl text-white font-medium'>My Contacts</h1> */}
        </div>
        <div className='flex flex-row justify-start items-center gap-2 mb-8'>
            <span className='text-white text-[24px] font-bold mr-5'>Filter:</span>
            <div>
                <SelectBox options={options1} className={'bg-transparent text-white'} size={20} />
            </div>
            <div>
                <SelectBox options={options2} className={'bg-transparent text-white'} size={20} />
            </div>
            <div>
                <SelectBox options={options3} className={'bg-transparent text-white'} size={20} />
            </div>
        </div>
        <div className='w-full grid xl:grid-cols-1 lg:grid-cols-1 grid-cols-1 gap-2 lg:gap-8 px-2 py-8'>
            <div className='flex flex-col bg-gradient-to-br from-[#0247FF] to-[#CCC] p-4 rounded-2xl gap-4'>
                <div className='flex flex-row justify-between'>
                    <div className='flex flex-row items-center gap-2'>
                        <img src={`${process.env.PUBLIC_URL}/images/AdminFollowing1.png`} alt='' className='w-16 h-16' />
                        <div className='flex flex-col items-start'>
                            <span className='text-[24px] font-medium text-black bg-[#05B7FD] rounded-2xl px-2 py-1'>Sugar 87YEB7</span>
                        </div>
                    </div>
                    <div className='flex flex-row items-end'>
                        <div className='text-white'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-7 h-7">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
                        </svg>
                        </div>
                        <div className='text-white'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-7 h-7">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                        </svg>
                        </div>
                    </div>
                </div>
                <div className='relative'>
                    <img src={`${process.env.PUBLIC_URL}/images/Marketplace2.png`} alt='' className='w-full rounded-2xl relative'/>
                    <div className='w-full mt-8 p-4'>
                       <div className='px-8 py-4 border-4 border-[#02227E] pb-16 mb-8'>
                            <span className='text-[32px] font-medium'>Massage and Escort Specials All Day $350. Hr<br/>Come see its my last day in town!!!!</span>
                        </div>
                       <button className='h-[55px] bg-[#05B7FD] border-[2px] border-blue-600 rounded-3xl px-4 w-[350px] shadow-xl'>
                            <span className='text-[24px] text-[#02227E]'>Request <span className='font-bold'>VAI</span>RIDATE</span> 
                       </button>
                    </div>

                </div>
            </div>
        </div>        
    </div>
  )
}
