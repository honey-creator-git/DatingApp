import React from 'react'
import { Link } from 'react-router-dom'
import Sidebarnav from '../Components/Sidebarnav'
import Setalarms from '../Components/Setalarms'

const Setalarm = () => {
  return (
    <div>
  <div className="max-w-[820px] mx-auto">
    <Sidebarnav/>
    <div>
      <img src="images/Group 131.svg" className="mx-auto my-8" alt />
    </div>
    <Setalarms/>
    {/* <div>
      <img src="images/Group 1065.svg" className="mx-auto my-8" alt />
    </div>
    <p className="text-[20px] text-center text-white flex items-center justify-center"><span className="pr-3"><img src="images/alarmB 1.svg" alt /></span>Set Alarm</p>
    <img src="images/Group 979.svg" className="mx-auto mt-4" alt /> */}
    <div className="mt-6 w-[80%] mx-auto">
      <Link to="/Datetimer" className="bg-[#05B7FD] text-center bg-opacity-[20%] border border-[#05B7FD] inline-block  text-white w-full font-bold py-3  rounded focus:outline-none focus:shadow-outline" type="button">
        Done
      </Link>
    </div>
    <div className="w-[90%] mx-auto pt-6 pb-4">
    <img src="images/Group.svg" alt />
  </div>
  </div>
  
</div>
  )
}

export default Setalarm
