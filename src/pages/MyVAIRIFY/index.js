import React from 'react'
import SelectBox from '../../components/SelectBox'
import ReactStars from "react-rating-stars-component";

export default function MyVAIRIFY() {
  return (
    <div className='main-container px-2'>
    <div>
        <h2 className='text-[27px] text-[#02227E] font-bold'>My VAIRIFY</h2>
    </div>
    <div className='mt-2 border-[#02227E] border-b-2 flex flex-row justify-around items-end gap-2 p-1'>
        <button className='w-full flex items-center gap-2 text-[9px] font-bold'>
            <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="7" height="11" viewBox="0 0 7 11" fill="none">
                    <path d="M3.50502 0.0461605L6.92364 3.35073L-0.000476405 3.25841L3.50502 0.0461605Z" fill="#0247FF"/>
                    <path d="M3.4637 10.3027L0.0432872 6.99995L6.96745 7.08849L3.4637 10.3027Z" fill="#0247FF"/>
                </svg>
            </span>
            Following
        </button>
        <button className='w-full flex items-center gap-2 text-[9px] font-bold'>
            <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="7" height="11" viewBox="0 0 7 11" fill="none">
                    <path d="M3.50502 0.0461605L6.92364 3.35073L-0.000476405 3.25841L3.50502 0.0461605Z" fill="#0247FF"/>
                    <path d="M3.4637 10.3027L0.0432872 6.99995L6.96745 7.08849L3.4637 10.3027Z" fill="#0247FF"/>
                </svg>
            </span>
            Favorites
        </button>
        <button className='w-full flex items-center gap-2 text-[9px] font-bold'>
            <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="7" height="11" viewBox="0 0 7 11" fill="none">
                    <path d="M3.50502 0.0461605L6.92364 3.35073L-0.000476405 3.25841L3.50502 0.0461605Z" fill="#0247FF"/>
                    <path d="M3.4637 10.3027L0.0432872 6.99995L6.96745 7.08849L3.4637 10.3027Z" fill="#0247FF"/>
                </svg>
            </span>
            Contacts
        </button>
        <SelectBox options={['Clients']} size={8} className1='p-0 w-9 text-[8px] py-[1px] font-bold' className2={'px-[2px]'} pr={1}/>
        <SelectBox options={['Newest']} size={8} className1='p-0 w-9 text-[8px] py-[1px] font-bold' className2={'px-[2px]'} pr={1}/>
    </div>

    <div className="w-full grid grid-cols-4 mt-3 gap-2 overflow-hidden overflow-y-auto h-[calc(100vh-300px)] rounded-xl">
        <div className='flex flex-col bg-gradient-to-t from-[#FF0303] to-[#F100E8] rounded-t-[64px] rounded-b-3xl p-1'>
            <img src={`${process.env.PUBLIC_URL}/images/AdminAboutMe2.png`} />
            <div>
                <h6 className='text-[9px] text-white'>TRUREVUⓒ</h6>
                <h6 className='text-[9px] text-white'>Crystal 98UF98</h6>
                <div className='flex flex-col items-center '>
                    <ReactStars count={5} value={4.7} size={16} classNames={'leading-none'}/>
                    <p className='text-[9px] text-white'>4.7</p>
                </div>
            </div>
        </div>
        <div className='flex flex-col bg-gradient-to-t from-[#01195C] to-[#0247FF] rounded-t-[64px] rounded-b-3xl p-1'>
            <img src={`${process.env.PUBLIC_URL}/images/AdminAboutMe2.png`} />
            <div>
                <h6 className='text-[9px] text-white'>TRUREVUⓒ</h6>
                <h6 className='text-[9px] text-white'>Crystal 98UF98</h6>
                <div className='flex flex-col items-center '>
                    <ReactStars count={5} value={4.7} size={16} classNames={'leading-none'}/>
                    <p className='text-[9px] text-white'>4.7</p>
                </div>
            </div>
        </div>
        <div className='flex flex-col bg-gradient-to-t from-[#01195C] to-[#0247FF] rounded-t-[64px] rounded-b-3xl p-1'>
            <img src={`${process.env.PUBLIC_URL}/images/AdminAboutMe2.png`} />
            <div>
                <h6 className='text-[9px] text-white'>TRUREVUⓒ</h6>
                <h6 className='text-[9px] text-white'>Crystal 98UF98</h6>
                <div className='flex flex-col items-center '>
                    <ReactStars count={5} value={4.7} size={16} classNames={'leading-none'}/>
                    <p className='text-[9px] text-white'>4.7</p>
                </div>
            </div>
        </div>
        <div className='flex flex-col bg-gradient-to-t from-[#01195C] to-[#0247FF] rounded-t-[64px] rounded-b-3xl p-1'>
            <img src={`${process.env.PUBLIC_URL}/images/AdminAboutMe2.png`} />
            <div>
                <h6 className='text-[9px] text-white'>TRUREVUⓒ</h6>
                <h6 className='text-[9px] text-white'>Crystal 98UF98</h6>
                <div className='flex flex-col items-center '>
                    <ReactStars count={5} value={4.7} size={16} classNames={'leading-none'}/>
                    <p className='text-[9px] text-white'>4.7</p>
                </div>
            </div>
        </div>
        <div className='flex flex-col bg-gradient-to-t from-[#FF0303] to-[#F100E8] rounded-t-[64px] rounded-b-3xl p-1'>
            <img src={`${process.env.PUBLIC_URL}/images/AdminAboutMe2.png`} />
            <div>
                <h6 className='text-[9px] text-white'>TRUREVUⓒ</h6>
                <h6 className='text-[9px] text-white'>Crystal 98UF98</h6>
                <div className='flex flex-col items-center '>
                    <ReactStars count={5} value={4.7} size={16} classNames={'leading-none'}/>
                    <p className='text-[9px] text-white'>4.7</p>
                </div>
            </div>
        </div>
        <div className='flex flex-col bg-gradient-to-t from-[#01195C] to-[#0247FF] rounded-t-[64px] rounded-b-3xl p-1'>
            <img src={`${process.env.PUBLIC_URL}/images/AdminAboutMe2.png`} />
            <div>
                <h6 className='text-[9px] text-white'>TRUREVUⓒ</h6>
                <h6 className='text-[9px] text-white'>Crystal 98UF98</h6>
                <div className='flex flex-col items-center '>
                    <ReactStars count={5} value={4.7} size={16} classNames={'leading-none'}/>
                    <p className='text-[9px] text-white'>4.7</p>
                </div>
            </div>
        </div>
        <div className='flex flex-col bg-gradient-to-t from-[#01195C] to-[#0247FF] rounded-t-[64px] rounded-b-3xl p-1'>
            <img src={`${process.env.PUBLIC_URL}/images/AdminAboutMe2.png`} />
            <div>
                <h6 className='text-[9px] text-white'>TRUREVUⓒ</h6>
                <h6 className='text-[9px] text-white'>Crystal 98UF98</h6>
                <div className='flex flex-col items-center '>
                    <ReactStars count={5} value={4.7} size={16} classNames={'leading-none'}/>
                    <p className='text-[9px] text-white'>4.7</p>
                </div>
            </div>
        </div>
        <div className='flex flex-col bg-gradient-to-t from-[#01195C] to-[#0247FF] rounded-t-[64px] rounded-b-3xl p-1'>
            <img src={`${process.env.PUBLIC_URL}/images/AdminAboutMe2.png`} />
            <div>
                <h6 className='text-[9px] text-white'>TRUREVUⓒ</h6>
                <h6 className='text-[9px] text-white'>Crystal 98UF98</h6>
                <div className='flex flex-col items-center '>
                    <ReactStars count={5} value={4.7} size={16} classNames={'leading-none'}/>
                    <p className='text-[9px] text-white'>4.7</p>
                </div>
            </div>
        </div>
        <div className='flex flex-col bg-gradient-to-t from-[#FF0303] to-[#F100E8] rounded-t-[64px] rounded-b-3xl p-1'>
            <img src={`${process.env.PUBLIC_URL}/images/AdminAboutMe2.png`} />
            <div>
                <h6 className='text-[9px] text-white'>TRUREVUⓒ</h6>
                <h6 className='text-[9px] text-white'>Crystal 98UF98</h6>
                <div className='flex flex-col items-center '>
                    <ReactStars count={5} value={4.7} size={16} classNames={'leading-none'}/>
                    <p className='text-[9px] text-white'>4.7</p>
                </div>
            </div>
        </div>
        <div className='flex flex-col bg-gradient-to-t from-[#01195C] to-[#0247FF] rounded-t-[64px] rounded-b-3xl p-1'>
            <img src={`${process.env.PUBLIC_URL}/images/AdminAboutMe2.png`} />
            <div>
                <h6 className='text-[9px] text-white'>TRUREVUⓒ</h6>
                <h6 className='text-[9px] text-white'>Crystal 98UF98</h6>
                <div className='flex flex-col items-center '>
                    <ReactStars count={5} value={4.7} size={16} classNames={'leading-none'}/>
                    <p className='text-[9px] text-white'>4.7</p>
                </div>
            </div>
        </div>
        <div className='flex flex-col bg-gradient-to-t from-[#01195C] to-[#0247FF] rounded-t-[64px] rounded-b-3xl p-1'>
            <img src={`${process.env.PUBLIC_URL}/images/AdminAboutMe2.png`} />
            <div>
                <h6 className='text-[9px] text-white'>TRUREVUⓒ</h6>
                <h6 className='text-[9px] text-white'>Crystal 98UF98</h6>
                <div className='flex flex-col items-center '>
                    <ReactStars count={5} value={4.7} size={16} classNames={'leading-none'}/>
                    <p className='text-[9px] text-white'>4.7</p>
                </div>
            </div>
        </div>
        <div className='flex flex-col bg-gradient-to-t from-[#01195C] to-[#0247FF] rounded-t-[64px] rounded-b-3xl p-1'>
            <img src={`${process.env.PUBLIC_URL}/images/AdminAboutMe2.png`} />
            <div>
                <h6 className='text-[9px] text-white'>TRUREVUⓒ</h6>
                <h6 className='text-[9px] text-white'>Crystal 98UF98</h6>
                <div className='flex flex-col items-center '>
                    <ReactStars count={5} value={4.7} size={16} classNames={'leading-none'}/>
                    <p className='text-[9px] text-white'>4.7</p>
                </div>
            </div>
        </div>
        <div className='flex flex-col bg-gradient-to-t from-[#FF0303] to-[#F100E8] rounded-t-[64px] rounded-b-3xl p-1'>
            <img src={`${process.env.PUBLIC_URL}/images/AdminAboutMe2.png`} />
            <div>
                <h6 className='text-[9px] text-white'>TRUREVUⓒ</h6>
                <h6 className='text-[9px] text-white'>Crystal 98UF98</h6>
                <div className='flex flex-col items-center '>
                    <ReactStars count={5} value={4.7} size={16} classNames={'leading-none'}/>
                    <p className='text-[9px] text-white'>4.7</p>
                </div>
            </div>
        </div>
        <div className='flex flex-col bg-gradient-to-t from-[#01195C] to-[#0247FF] rounded-t-[64px] rounded-b-3xl p-1'>
            <img src={`${process.env.PUBLIC_URL}/images/AdminAboutMe2.png`} />
            <div>
                <h6 className='text-[9px] text-white'>TRUREVUⓒ</h6>
                <h6 className='text-[9px] text-white'>Crystal 98UF98</h6>
                <div className='flex flex-col items-center '>
                    <ReactStars count={5} value={4.7} size={16} classNames={'leading-none'}/>
                    <p className='text-[9px] text-white'>4.7</p>
                </div>
            </div>
        </div>
        <div className='flex flex-col bg-gradient-to-t from-[#01195C] to-[#0247FF] rounded-t-[64px] rounded-b-3xl p-1'>
            <img src={`${process.env.PUBLIC_URL}/images/AdminAboutMe2.png`} />
            <div>
                <h6 className='text-[9px] text-white'>TRUREVUⓒ</h6>
                <h6 className='text-[9px] text-white'>Crystal 98UF98</h6>
                <div className='flex flex-col items-center '>
                    <ReactStars count={5} value={4.7} size={16} classNames={'leading-none'}/>
                    <p className='text-[9px] text-white'>4.7</p>
                </div>
            </div>
        </div>
        <div className='flex flex-col bg-gradient-to-t from-[#01195C] to-[#0247FF] rounded-t-[64px] rounded-b-3xl p-1'>
            <img src={`${process.env.PUBLIC_URL}/images/AdminAboutMe2.png`} />
            <div>
                <h6 className='text-[9px] text-white'>TRUREVUⓒ</h6>
                <h6 className='text-[9px] text-white'>Crystal 98UF98</h6>
                <div className='flex flex-col items-center '>
                    <ReactStars count={5} value={4.7} size={16} classNames={'leading-none'}/>
                    <p className='text-[9px] text-white'>4.7</p>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}
