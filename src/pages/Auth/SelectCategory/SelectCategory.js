import React from 'react'
import Button from '../../../components/Button';
import { useNavigate } from 'react-router-dom'


export default function ChainPassIDPage() {

    const navigate = useNavigate()

    const handleCompanion = () => {
        navigate('/companion-provider')
    }
    const handleAgency = () => {
        
        navigate('/agency-business')
    }
    const handleClient = () => {
        
        navigate('/client-hobbyist')
    }
    const handleInfluencer = () => {
        
        navigate('/influencer-affiliate')
    }

  return (
    <div className="main-container flex flex-col justify-start">
        <div className='relative flex flex-col justify-start items-center'>
            <div className='relative top-6'><img src={process.env.PUBLIC_URL + '/images/VectorLogo1.png'} alt="Vector Logo 1" /></div>
            <div className='relative bottom-2 left-4'><img src={process.env.PUBLIC_URL + '/images/VectorLogo2.png'} alt="Vector Logo 2" /></div>
            <div className='relative '><span style={{fontFamily: 'Roboto Serif'}} className='font-bold text-[28px] text-center text-[#02227E]'>VAI</span><span style={{fontFamily: 'Roboto Serif'}} className='font-light text-[28px] text-center text-[#02227E]'>RIFY</span></div>
        </div>
        <div className='mt-5 mb-2'>
            <span style={{fontFamily: 'Mulish'}} className='text-[18px] text-[#9C9C9C] font-bold'>Select Your Category</span>
        </div>
        <div className='flex-1 mb-8'>
            <Button className={'mt-6 from-[#02227E] to-[#0247FF] font-bold text-white text-[19px]'} size='47px' text={'Client/Hobbyist'} onClick={handleClient} />
            <Button className={'mt-6 from-[#02227E] to-[#0247FF] font-bold text-white text-[19px]'} size='47px' text={'Companion/Provider'} onClick={handleCompanion} />
            <Button className={'mt-6 from-[#02227E] to-[#0247FF] font-bold text-white text-[19px]'} size='47px' text={'Agency/Business'} onClick={handleAgency} />
            <Button className={'mt-6 from-[#02227E] to-[#0247FF] font-bold text-white text-[19px]'} size='47px' text={'Influencer/Affliliate'} onClick={handleInfluencer} />
        </div>
        {/* <div className="mb-12 mt-9">
            <Button text={'Next'} className={'text-custom-1 py-2 from-inherit to-inherit bg-[#05B7FD] text-black'} />
        </div> */}
    </div>
  )
}
