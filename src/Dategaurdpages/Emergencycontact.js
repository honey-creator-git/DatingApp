import React from 'react'
import { Link } from 'react-router-dom'
import Sidebarnav from '../Components/Sidebarnav'

const Emergencycontact = () => {
  return (
    <div>
     <div className="max-w-[820px] mx-auto">
        <Sidebarnav/>
  <div>
    <img src="images/Group 131.svg" className="mx-auto my-8" alt />
  </div>
  <p className="text-[20px] text-center text-white">
    Add &amp; Delete Emergency Contact Number
  </p>
  <div className="flex gap-5 px-10 mt-5 items-center">
    <div><img src="images/avatarB 4.svg" className="w-8" alt /></div>
    <div>
      <h3 className="text-[22px] text-white">Julian</h3>
      <h3 className="text-[18px] text-white">+12124567890</h3>
    </div>
  </div>
  <div className="flex gap-5 px-10 mt-5 items-center">
    <div><img src="images/avatarB 4.svg" className="w-8" alt /></div>
    <div>
      <h3 className="text-[22px] text-white">Amy</h3>
      <h3 className="text-[18px] text-white">+25844567658</h3>
    </div>
  </div>
  <div className="flex gap-5 px-10 mt-5 items-center">
    <div><img src="images/avatarB 4.svg" className="w-8" alt /></div>
    <div>
      <h3 className="text-[22px] text-white">Marlin</h3>
      <h3 className="text-[18px] text-white">+84284125890</h3>
    </div>
  </div>
  <div className="flex gap-5 px-10 mt-5 items-center">
    <div><img src="images/avatarB 4.svg" className="w-8" alt /></div>
    <div>
      <h3 className="text-[22px] text-white">Blake</h3>
      <h3 className="text-[18px] text-white">+66482159874</h3>
    </div>
  </div>
  <div className="flex gap-5 px-10 mt-5 items-center">
    <div><img src="images/avatarB 4.svg" className="w-8" alt /></div>
    <div>
      <h3 className="text-[22px] text-white">Roberto</h3>
      <h3 className="text-[18px] text-white">+66482159874</h3>
    </div>
  </div>
  <div className="flex gap-10 px-10 my-[60px] justify-center">
    <div>
      <img src="images/Group 474.svg" className="w-16" alt />
      <h3 className="text-[22px] text-white text-center pt-3">
        Add <br />
        Contact
      </h3>
    </div>
    <div>
      <img src="images/Group 349.svg" className="w-16" alt />
      <h3 className="text-[22px] text-white text-center pt-3">
        Delete <br />
        Contact
      </h3>
    </div>
  </div>
  <div className="mt-6 w-[80%] mx-auto">
    <Link to="/Setcode" className="bg-[#05B7FD] text-center bg-opacity-[20%] border border-[#05B7FD] inline-block text-white w-full font-bold py-3 rounded focus:outline-none focus:shadow-outline" type="button">
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

export default Emergencycontact
