import React from 'react';

export default function GoldenRoseTokenItem({ imgURL, GRTNumber, GRTPrice, position }) {
    return (
        <div className='w-full mx-auto flex flex-col justify-center items-center bg-gradient-to-b from-[#0198FE] to-[#FFFFFF] rounded-[20px] py-4'>
            <div className='w-full mx-auto flex flex-row justify-center items-center'>
                {position === 'right' && <div className='flex flex-col justify-center items-center relative top-8'><img src={process.env.PUBLIC_URL + '/images/GoldenRoseTokenCoins.png'} alt="Golden Rose Token Coin" /></div>}
                {position === 'left' && <div className='mr-4 ml-4'><img src={process.env.PUBLIC_URL + `/images/${imgURL}`} alt="Golden Rose Token Item" /></div>}
                <div className='flex flex-col justify-between items-center'>
                    <div className=''><img src={process.env.PUBLIC_URL + '/images/GoldenRoseTokensText.png'} alt="Golden Rose Tokens Text" /></div>
                    <div className='flex flex-col justify-center items-center my-2'>
                        <div className='font-bold text-[18px]'><span>{GRTNumber} GRT's</span></div>
                        <div className='font-bold text-[18px]'><span>for</span></div>
                        <div className='font-bold text-[18px]'><span>${GRTPrice}.00</span></div>
                    </div>
                    <div className='w-[83px]'><button className={'w-full flex items-center justify-center bg-[#0247FF] rounded-[25px] font-bold text-[21.6px] text-white'}>Buy</button></div>
                </div>
                {position === 'left' && <div className='flex flex-col justify-center items-center relative top-8 ml-4'><img src={process.env.PUBLIC_URL + '/images/GoldenRoseTokenCoins.png'} alt="Golden Rose Token Coin" /></div>}
                {position === 'right' && <div className='mr-4 ml-4'><img src={process.env.PUBLIC_URL + `/images/${imgURL}`} alt="Golden Rose Token Item" /></div>}
            </div>
        </div>
    )
}