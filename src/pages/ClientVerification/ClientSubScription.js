import React from 'react'
import Button from '../../components/Button';
import { useLocation, useNavigate } from 'react-router-dom';
const publicPath = process.env.PUBLIC_URL;

export default function ClientSubScription() {
  const navigate = useNavigate()
  const location = useLocation()
  const isBusiness = location.state?.business
  const handleNext = () => {
    navigate('/client-payment', {state:{business: isBusiness}})
  }
  const handleCouponCode = () => {
    navigate('/client-payment-via-coupon', {state:{business: isBusiness}})
  }

  return (
    <div className="main-container flex flex-col justify-start">
      
      <div className='grid grid-cols-1 grid-flow-col gap-4'>
        <div className='relative flex flex-col justify-start items-center'>
            <div className='relative top-6'><img src={process.env.PUBLIC_URL + '/images/VectorLogo1.png'} alt="Vector Logo 1" /></div>
            <div className='relative bottom-2 left-4'><img src={process.env.PUBLIC_URL + '/images/VectorLogo2.png'} alt="Vector Logo 2" /></div>
        </div>
      </div>

      <div className='flex-1 mb-2 py-2 mx-auto'>
        <img src={publicPath+'/images/V.A.I..png'} />
        <p className='text-xl mt-4'>Verified Anonymous Identity</p>
      </div>
      
      <div className=''>
          <h1 className='font-black text-4xl'>$149.00</h1>
      </div>

      <div className='mt-8'>
          <Button className={'font-bold text-[23.4px] text-[#01195C]'} text={'Submit Payment'} onClick={handleNext}/>
      </div>

      <div className='py-4'>
          <hr className="border-black w-14 inline-block align-middle" />
          <span className='text-black font-medium mx-3 text-md'>OR</span>
          <hr className="border-black w-14 inline-block align-middle" />
      </div>
      <div className='pb-7'>
          <Button className="font-bold text-[23.4px] text-[#01195C]" text={'Enter Coupon Code'}  onClick={handleCouponCode}/>
      </div>
    </div>
  )
}
