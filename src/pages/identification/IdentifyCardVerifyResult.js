import React from 'react'
import ImageButton from '../../components/ImageButton'
import IconButton from '../../components/IconButton'
import EllipseButton from '../../components/EllipseButton';
const publicPath = process.env.PUBLIC_URL;

export default function IdentifyCardVerifyResult() {
  return (
    <div className="main-container flex flex-col justify-start">
      
        <div className='py-6 mt-8'>
            <img className='mx-auto' src={`${publicPath}/images/guard.png`} />
        </div>
      <div>
        <h1 className=' text-xl'>Identity Card Verified</h1>
      </div>
        <div className='flex-1 py-7'>
            <img className='mx-auto' src={`${publicPath}/images/id-card-front.png`} />
        </div>

        <div className='pb-5'>
          <div className='mx-auto  max-w-lg'>
            <div className='border-b-2 flex justify-between p-1'>
              <p>Name</p>
              <p>John Doe</p>
            </div>
            <div className='border-b-2 flex justify-between p-1'>
              <p>Address</p>
              <p>945 East West LA </p>
            </div>
            <div className='border-b-2 flex justify-between p-1'>
              <p>Birth</p>
              <p>15 April. 1920</p>
            </div>
            <div className='border-b-2 flex justify-between p-1'>
              <p>Document</p>
              <p>#651561561</p>
            </div>
          </div>
        </div>
    </div>
  )
}
