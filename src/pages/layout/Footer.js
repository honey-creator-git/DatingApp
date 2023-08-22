import React from 'react'
import IconButton from '../../components/IconButton'
import { useLocation } from 'react-router-dom'

export default function Footer() {
  const location = useLocation();
  const path = location.pathname;
  return (
    <div className="bottom-group-container flex flex-row justify-around items-center">
      <div><button><img src={process.env.PUBLIC_URL + '/images/BottomNav1.png'} alt="Bottom Nav 1" /></button></div>
      <div className='relative'><button><img src={process.env.PUBLIC_URL + '/images/BottomNav2.png'} alt="Bottom Nav 2" /></button><span className="absolute top-0 right-0" style={{width: '14px', height: '14px', backgroundColor: '#0247FF', borderRadius: '50%', color: 'white', fontSize: '7px', fontWeight: '700', lineHeight: '8.79px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>12</span></div>
      <div><button><img src={process.env.PUBLIC_URL + '/images/BottomNav3.png'} alt="Bottom Nav 3" /></button></div>
      <div><button><img src={process.env.PUBLIC_URL + '/images/BottomNav4.png'} alt="Bottom Nav 4" /></button></div>
      <div><button><img src={process.env.PUBLIC_URL + '/images/BottomNav5.png'} alt="Bottom Nav 5" /></button></div>
    </div>
  )
}
