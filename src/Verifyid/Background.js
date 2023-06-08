import React from 'react'
import { Link } from 'react-router-dom'

const Background = () => {
  return (
    <div>
     <div className="max-w-[820px] mx-auto">
  <h1 className="text-[20px] text-white p-5">ChainPass ID</h1>
  <div className="bg-white items-center rounded p-5 pb-10 my-10 rounded-[50px]">
    <div className="flex flex-col">
      <p className="text-center text-[30px] font-bold py-4">
        Background Verification
      </p>
      <p className="text-center text-[35px] font-bold">
        2021 Assault <br />
        New Maxico
      </p>
      <div className="mt-6 mx-auto">
        <a href="22-idverified.html" className="bg-[#0247FF] min-w-[280px] flex items-center w-full border border-[#05B7FD] px-16 rounded-full text-white font-bold py-2 justify-center" type="button">
          <span className="pr-3"><img src="images/validatedB 1.svg" alt /></span>Accept
        </a>
      </div>
      <p className="text-center text-[20px] font-bold pt-2">Or</p>
      <div className="mt-2 mx-auto">
        <a href="20-backgroung.html" className="bg-[#0247FF] min-w-[280px] flex items-center w-full border border-[#05B7FD] px-16 rounded-full text-white font-bold py-2 justify-center" type="button">
          <span className="pr-3"><img src="images/documentB 1.svg" alt /></span>
          Explanation
        </a>
      </div>
      <div className="mt-4">
        <textarea id="message" rows={10} className="block p-2.5 w-full text-sm text-white bg-[#0198FE]" placeholder="Explanation........." defaultValue={""} />
      </div>
      <div className="mt-5 mx-auto w-[95%]">
        <Link to="/Process" className="bg-gradient-to-b from-[#000C3E] to-[#02227E] min-w-[280px] flex items-center w-full border border-[#05B7FD] px-16 rounded-full text-white font-bold py-2 justify-center" type="button">
          Submit
        </Link>
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

export default Background
