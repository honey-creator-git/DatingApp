import React from 'react'
import { Link } from 'react-router-dom'

const Idtypes = () => {
  return (
    <div>
     <div className="max-w-[820px] mx-auto">
  <div className="bg-white pb-16 h-[80%] w-full rounded-[50px] mt-5">
    <div className="w-[80%] mx-auto items-center mt-16">
      <div className="flex flex-col">
        <p className="text-center text-[25px] font-bold text-[#02227E] py-4">
          Congratulations!
        </p>
        <p className="text-center text-[18px] text-[#02227E]">(Nickname)</p>
        <p className="text-center text-[16px] py-4">
          Your registration was successful.
        </p>
        <p className="text-center text-[16px] text-[#0636C1] py-4">
          Please choose the ChainPass ID <br />
          community you wish to join
        </p>
        <img src="images/Group 495.png" className="w-28 mx-auto" alt />
        <div className="mt-6 mx-auto">
          <Link to="/Review" className="bg-[#05B7FD] min-w-[280px] flex items-center justify-center w-full border border-[#05B7FD] px-6 rounded-full text-white font-bold py-2" type="button">
            <span className="pr-3"><img src="images/personB 1.svg" alt /></span>
            Independent Provider
          </Link>
        </div>
        <div className="mt-6 mx-auto">
          <Link to="/Reviews" className="bg-[#05B7FD] min-w-[280px] flex items-center justify-center w-full border border-[#05B7FD] px-6 rounded-full text-white font-bold py-2" type="button">
            <span className="pr-3"><img src="images/portfolioB 1.svg" alt /></span>
            Business / Agency
          </Link>
        </div>
        <div className="my-6 mx-auto">
          <Link to="/Review" className="bg-[#05B7FD] min-w-[280px] flex items-center justify-center w-full border border-[#05B7FD] px-6 rounded-full text-white font-bold py-2 text-center" type="button">
            <span className="pr-3"><img src="images/personB 1.svg" alt /></span>
            User
          </Link>
        </div>
      </div>
    </div>
  </div>
  <div className="w-[90%] mx-auto pt-10 pb-4">
    <img src="images/Group.svg" alt />
  </div>
</div>

    </div>
  )
}

export default Idtypes
