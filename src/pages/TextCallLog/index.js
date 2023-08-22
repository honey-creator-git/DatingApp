import React from 'react'
import InputText from '../../components/InputText'

export default function TextCallLog() {
  return (
    <div className='main-container px-2'>
        <div>
            <h2 className='text-[27px] font-bold'>Text and Call Logs</h2>
        </div>
        <div className='mt-2 border-[#02227E] border-b-2 flex flex-row justify-around items-end gap-2'>
            <button className='w-full focus-within:border-b-4 focus-within:border-[#02224E] text-[12px] font-bold'>All</button>
            <button className='w-full focus-within:border-b-4 focus-within:border-[#02224E] text-[12px] font-bold'>Call</button>
            <button className='w-full focus-within:border-b-4 focus-within:border-[#02224E] text-[12px] font-bold'>Chat</button>
            <button className='w-full flex items-center gap-2'>
                <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="7" height="11" viewBox="0 0 7 11" fill="none">
                        <path d="M3.50502 0.0461605L6.92364 3.35073L-0.000476405 3.25841L3.50502 0.0461605Z" fill="#0247FF"/>
                        <path d="M3.4637 10.3027L0.0432872 6.99995L6.96745 7.08849L3.4637 10.3027Z" fill="#0247FF"/>
                    </svg>
                </span>
                Time/Date
            </button>
            <InputText className={'rounded-md w-[120px!important] h-[27px] bg-[#AAB2D0] border-2 border-black'} size={16} placeholder={'Name or Id#'} bgColor={'[#AAB2D0]'} />
        </div>

        <div className="w-full mx-auto flex flex-col justify-center items-center mt-2">
            <div className="flex w-full justify-start text-[18px] font-bold"><span>Today</span></div>
            <div className="w-full mx-auto flex flex-row justify-between items-center hover:bg-blue-100 p-2 rounded-[60px] bg-[#3760CB] border-[#01195C] border-2">
                <div className="w-max-72"><img className="w-full" src={process.env.PUBLIC_URL + "/images/Notificaiton1.png"} alt="Notification 1" /></div>
                <div className="flex flex-col justify-center items-center">
                    <div className="text-custom-22 text-white"><span>SUGAR</span></div>
                    <div className="text-custom-35 text-white"><span>VAIRIFY ID 5SES1688</span></div>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <div className="flex flex-row justify-center items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#fff" class="w-8 h-8">
  <path fill-rule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clip-rule="evenodd" />
</svg>

                        <img src={process.env.PUBLIC_URL + "/images/Arrow2.png"} alt="Arrow 2" />
                    </div>
                    <div className="text-custom-14 text-white"><span>0M 31s</span></div>
                </div>
            </div>

            <div className="w-full mx-auto flex flex-row justify-between items-center hover:bg-blue-100 p-2 rounded-[60px] bg-[#3760CB] border-[#01195C] border-2 mt-1">
                <div className="w-max-72"><img className="w-full" src={process.env.PUBLIC_URL + "/images/Notification2.png"} alt="Notification 2" /></div>
                <div className="flex flex-col justify-center items-center">
                    <div className="text-custom-22 text-white"><span>Crystal</span></div>
                    <div className="text-custom-35 text-white"><span>VAIRIFY ID 5SES1688</span></div>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <div className="flex flex-row justify-center items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#fff" class="w-8 h-8">
  <path fill-rule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clip-rule="evenodd" />
</svg>

                        <img src={process.env.PUBLIC_URL + "/images/NotificationArrow.png"} alt="Notification Arrow" />
                    </div>
                    <div className="text-custom-14 text-white"><span>3:31pm</span></div>
                </div>
            </div>

            <div className="w-full mx-auto flex flex-row justify-between items-center hover:bg-blue-100 p-2 rounded-[60px] bg-[#3760CB] border-[#01195C] border-2 mt-1">
                <div className="w-max-72"><img className="w-full" src={process.env.PUBLIC_URL + "/images/Notificaiton1.png"} alt="Notification 1" /></div>
                <div className="flex flex-col justify-center items-center">
                    <div className="text-custom-22 text-white"><span>Melody</span></div>
                    <div className="text-custom-35 text-white"><span>VAIRIFY ID 5SES1688</span></div>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <div className="flex flex-row justify-center items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#fff" class="w-9 h-9">
  <path fill-rule="evenodd" d="M4.804 21.644A6.707 6.707 0 006 21.75a6.721 6.721 0 003.583-1.029c.774.182 1.584.279 2.417.279 5.322 0 9.75-3.97 9.75-9 0-5.03-4.428-9-9.75-9s-9.75 3.97-9.75 9c0 2.409 1.025 4.587 2.674 6.192.232.226.277.428.254.543a3.73 3.73 0 01-.814 1.686.75.75 0 00.44 1.223zM8.25 10.875a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25zM10.875 12a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0zm4.875-1.125a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25z" clip-rule="evenodd" />
</svg>

                        <img src={process.env.PUBLIC_URL + "/images/Arrow3.png"} alt="Arrow 3" />
                    </div>
                    <div className="text-custom-14 text-white"><span>0M 02s</span></div>
                </div>
            </div>
            <div className="flex w-full justify-start text-[18px] font-bold"><span>7/24/23</span></div>
            <hr className='w-full border-black mb-2'/>
            <div className="w-full mx-auto flex flex-row justify-between items-center hover:bg-blue-100 p-2 rounded-[60px] bg-[#3760CB] border-[#01195C] border-2 mt-1">
                <div className="w-max-72"><img className="w-full" src={process.env.PUBLIC_URL + "/images/Notification3.png"} alt="Notification 3" /></div>
                <div className="flex flex-col justify-center items-center">
                    <div className="text-custom-22 text-white"><span>Amori Love</span></div>
                    <div className="text-custom-35 text-white"><span>VAIRIFY ID 5SES1688</span></div>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <div className="flex flex-row justify-center items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#fff" class="w-9 h-9">
  <path fill-rule="evenodd" d="M4.804 21.644A6.707 6.707 0 006 21.75a6.721 6.721 0 003.583-1.029c.774.182 1.584.279 2.417.279 5.322 0 9.75-3.97 9.75-9 0-5.03-4.428-9-9.75-9s-9.75 3.97-9.75 9c0 2.409 1.025 4.587 2.674 6.192.232.226.277.428.254.543a3.73 3.73 0 01-.814 1.686.75.75 0 00.44 1.223zM8.25 10.875a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25zM10.875 12a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0zm4.875-1.125a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25z" clip-rule="evenodd" />
</svg>

                        <img src={process.env.PUBLIC_URL + "/images/Arrow2.png"} alt="Arrow 2" />
                    </div>
                    <div className="text-custom-14 text-white"><span>0M 02s</span></div>
                </div>
            </div>

            <div className="w-full mx-auto flex flex-row justify-between items-center hover:bg-blue-100 p-2 rounded-[60px] bg-[#3760CB] border-[#01195C] border-2 mt-1">
                <div className="w-max-72"><img className="w-full" src={process.env.PUBLIC_URL + "/images/Notification4.png"} alt="Notification 4" /></div>
                <div className="flex flex-col justify-center items-center">
                    <div className="text-custom-22 text-white"><span>Pedal</span></div>
                    <div className="text-custom-35 text-white"><span>VAIRIFY ID 5SES1688</span></div>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <div className="flex flex-row justify-center items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#fff" class="w-8 h-8">
  <path fill-rule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clip-rule="evenodd" />
</svg>

                        <img src={process.env.PUBLIC_URL + "/images/Arrow2.png"} alt="Arrow 2" />
                    </div>
                    <div className="text-custom-14 text-white"><span>1M 14s</span></div>
                </div>
            </div>

            <div className="w-full mx-auto flex flex-row justify-between items-center hover:bg-blue-100 p-2 rounded-[60px] bg-[#3760CB] border-[#01195C] border-2 mt-1">
                <div className="w-max-72"><img className="w-full" src={process.env.PUBLIC_URL + "/images/Notification5.png"} alt="Notification 5" /></div>
                <div className="flex flex-col justify-center items-center">
                    <div className="text-custom-22 text-white"><span>Princess Stone</span></div>
                    <div className="text-custom-35 text-white"><span>VAIRIFY ID 5SES1688</span></div>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <div className="flex flex-row justify-center items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#fff" class="w-9 h-9">
  <path fill-rule="evenodd" d="M4.804 21.644A6.707 6.707 0 006 21.75a6.721 6.721 0 003.583-1.029c.774.182 1.584.279 2.417.279 5.322 0 9.75-3.97 9.75-9 0-5.03-4.428-9-9.75-9s-9.75 3.97-9.75 9c0 2.409 1.025 4.587 2.674 6.192.232.226.277.428.254.543a3.73 3.73 0 01-.814 1.686.75.75 0 00.44 1.223zM8.25 10.875a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25zM10.875 12a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0zm4.875-1.125a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25z" clip-rule="evenodd" />
</svg>

                        <img src={process.env.PUBLIC_URL + "/images/Arrow2.png"} alt="Arrow 2" />
                    </div>
                    <div className="text-custom-14 text-white"><span>1M 14s</span></div>
                </div>
            </div>
        </div>
    </div>
  )
}
