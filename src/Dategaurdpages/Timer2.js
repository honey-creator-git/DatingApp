import React from 'react'
import Sidebarnav from '../Components/Sidebarnav'
import { Link } from 'react-router-dom'

const Timer2 = () => {
  return (
    <div>
    <div className="max-w-[820px] mx-auto">
      <Sidebarnav/>
      <div>
        <img src="images/Group 131.svg" className="mx-auto my-8" alt />
      </div>
      <div>
        <img src="images/Group 1074.svg" className="mx-auto my-8" alt />
      </div>
      <p className="text-[20px] text-center text-white flex items-center justify-center"><span className="pr-3"><img src="images/timerC 1.svg" alt /></span>Date Timer</p>
      <Link to="/Alarmstart"><img src="images/Group 478.svg" className="mx-auto mt-4" alt /></Link>
      <p className="text-[20px] text-center text-white flex items-center justify-center pt-5">Start Timer</p>

      <div className="w-[90%] mx-auto pt-6 pb-4">
      <img src="images/Group.svg" alt />
    </div>
    </div>
    
  </div>
  )
}

export default Timer2
