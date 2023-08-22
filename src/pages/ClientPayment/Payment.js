import React from 'react'
import Button from '../../components/Button';
import { useLocation, useNavigate } from 'react-router-dom';
const publicPath = process.env.PUBLIC_URL;


export default function Payment() {
  const navigate = useNavigate()
  const location = useLocation()
  const isBusiness = location.state?.business
  const handleSubmit = () => {
    if(isBusiness)
      navigate('/client-payment-success', {state: {business: isBusiness}})
    else
      navigate('/client-migration-special')
  }
  return (
    <div className="main-container flex flex-col justify-start">
      <div className='grid grid-cols-1 grid-flow-col gap-4'>
        <div className='relative flex flex-col justify-start items-center'>
          <div className='relative top-6'><img src={process.env.PUBLIC_URL + '/images/VectorLogo1.png'} alt="Vector Logo 1" /></div>
          <div className='relative bottom-2 left-4'><img src={process.env.PUBLIC_URL + '/images/VectorLogo2.png'} alt="Vector Logo 2" /></div>
        </div>
      </div>
    
      <div className='py-3 text-lg font-medium text-[#838282]'>
          <p>April 29, 2023</p>
          <p>#1832-9912-7552</p>
      </div>

      {/* <div className='py-3 mt-2'>
          <span className='py-2 px-4 border-2 border-gray-700 rounded-lg'>
              <a className='text-lg'>$149.00</a>
          </span>
      </div> */}

      <div className='mx-auto flex-1 mt-16 mb-8'>
          <img src={`${publicPath}/images/master-card.png`} />
      </div>
      
      <div className='pb-7'>
        <Button onClick={handleSubmit} className="font-bold text-[23.4px] text-[#01195C] mx-auto max-w-md" text={'Submit Payment'} />
      </div>
    </div>
  )
}
