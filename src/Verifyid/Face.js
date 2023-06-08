import React from 'react'
import { Link } from 'react-router-dom'

const Face = () => {
  return (
    <div>
       <div className="max-w-[820px] mx-auto my-6">
  <h1 className="text-[20px] text-white p-5">ChainPass ID</h1>
  <div className="mt-5">
    <div className="bg-white items-center rounded p-5 mb-6 rounded-[50px]">
      <div className="flex flex-col">
        <div className="flex justify-center">
          <p className="text-center text-[20px] py-4 flex items-center">
            <span className="pr-2"><img src="images/electronicsB 2.svg" alt /></span>
            Face Liveness
          </p>
        </div>
        <p className="text-center text-[16px] py-4">
          Align your face within the center of the mask and <br />
          look at the designated area.
        </p>
        <img src="images/Group 698.svg" className="w-[85%] mx-auto pb-4" alt />
        <img src="images/image 6.svg" className="w-[85%] mx-auto py-5" alt />
        <Link to="/Verified"><img src="images/camera 1.svg" className="w-[20%] mx-auto py-5" alt /></Link>
      </div>
    </div>
    <div className="w-[90%] mx-auto pt-10 pb-4">
      <img src="images/Group.svg" alt />
    </div>
  </div>
</div>

    </div>
  )
}

export default Face
