import React from 'react'
import IconButton from '../../components/IconButton'
import { useLocation, useNavigate } from 'react-router-dom'

export default function Header({onClick}) {
  const location = useLocation();
  const navigate = useNavigate();
  const path = location.pathname;
  const goBack = () => {
    navigate(-1)
  }
  return (
    <div className='w-full mx-auto flex flex-col justify-center items-start px-2'>
      {/* <div className='flex flex-row justify-start items-center'>
        <div><img src={process.env.PUBLIC_URL + '/images/varify_logo.png'} alt="Varify Logo" /></div>
      </div> */}
      <div className='w-full mx-auto flex flex-row justify-between items-center'>
        <div>
          {
            path != '/login' && 
            <IconButton onClick={() => goBack()} icon={
                <img src={process.env.PUBLIC_URL + '/images/leftVector.png'} alt="Left Icon" />
            }/>
          }
        </div>
        {
          path.includes('/user') !== true && path.includes('/date-guard') !== true &&
          <div className='flex flex-col justify-center items-center relative bottom-3'>
            <div><img src={process.env.PUBLIC_URL + '/images/varify_logo.png'} alt="Varify Logo" /></div>
          </div>
        }
        <div>
          <button onClick={onClick} className='p-4'><img src={process.env.PUBLIC_URL + '/images/burgerVector.png'} alt="Burger Vector Icon" /></button>
        </div>
      </div>
    </div>
  )
}
