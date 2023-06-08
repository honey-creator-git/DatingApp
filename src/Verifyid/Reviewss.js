import React from 'react'
import { Link } from 'react-router-dom'

const Reviewss = () => {
  return (
    <div>
       <div className="max-w-[820px] mx-auto my-2">
  <h1 className="text-[20px] text-white p-5">ChainPass ID</h1>
  <div className="bg-white mb-10 h-[80%] w-full rounded-[50px] mt-10 py-8">
    <div className="flex w-[80%] mx-auto">
      <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
        <img src="images/plus-18-movie 1.svg" alt />
      </span>
      <input type="text" id="#" className="rounded-none rounded-r-lg bg-[#000] bg-opacity-[5%] border text-gray-900 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5" placeholder="Adult+18" />
    </div>
    <div className="w-[80%] mx-auto items-center rounded mt-16">
      <div className="flex flex-col">
        <img src="images/encrypted 1.svg" className="w-24 mx-auto mt-6" alt />
        <p className="text-center text-[20px] font-bold text-[#02227E] pt-4">
          ChainPass ID
        </p>
        <p className="text-center text-[16px">Extreme $49.99</p>
        <div className="text-center bg-[#C1E4F2] p-3 my-5 w-full">
          <p className="text-[16px]">
            With “V.A.J” <br />
            EU paid dating sites, Hook up Dating
          </p>
        </div>
        <p className="text-center text-[14px] text-[#02227E]">
          Background checks Community reports Review of <br />
          community activity Interactive scheduling <br />
          Encrypted commuication.
        </p>
        <p className="text-center text-[18px] font-bold text-[#02227E] pt-4">
          Phone Calls Chat
        </p>
        <p className="text-center text-[14px] py-4">
          E-signed consent contracts photo verification <br />
          peer to peer payments date guard date <br />
          protection protected reviews
        </p>
      </div>
      <div className="my-6 mx-auto">
        <Link to="/Options" className="bg-gradient-to-b from-[#000C3E] to-[#02227E] text-center min-w-[280px] inline-block w-full border border-[#05B7FD]  rounded-full text-white font-bold py-2 text-center" type="button">
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

export default Reviewss
