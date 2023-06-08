import React from 'react'
import Sidebarnav from '../Components/Sidebarnav'
import { Link } from 'react-router-dom'

const Alarmstart2 = () => {
  return (
    <div>
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
    <div className="flex justify-center gap-5 px-5 mt-5">
      <Link to="64-date-timer3 copy.html"><img src="images/Group 998.svg" className="mx-auto mt-4" alt /></Link>
      <Link to="/Endcode"><img src="images/Group 996.svg" className="mx-auto mt-4" alt /></Link>
      <Link to="/Sugarontact"><img src="images/Group 999.svg" className="mx-auto mt-4" alt /></Link>
    </div>
    <div className="w-[90%] mx-auto pt-6 pb-4">
    <img src="images/Group.svg" alt />
  </div>
  </div>
  
</div>

    </div>
  )
}

export default Alarmstart2
