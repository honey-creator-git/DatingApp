import React from 'react';
import GoldenRoseTokenItem from '../../components/GoldenRoseTokenItem';

export default function GoldenRoseTokens() {
    return (
        <div className='main-container' style={{paddingBottom: '0px'}}>
            <div className='w-full mx-auto flex flex-col justify-center items-center pt-5'>
                <div className='w-full mx-auto flex flex-row justify-center items-center'>
                    <div><img src={process.env.PUBLIC_URL + '/images/GoldenRoseTokenLogo.png'} alt="Golden Rose Token Logo" /></div>
                    <div><img src={process.env.PUBLIC_URL + '/images/GoldenRoseTokensSafe.png'} alt="Golden Rose Token Safe Logo" /></div>
                </div>
                <div className='w-[100vw] h-[21px] bg-[#01195C]'></div>
                <div style={{borderRadius: '0px 0px 15px 15px'}} className='w-[100vw] flex flex-col justify-center items-center bg-[#FFC020] px-8 py-6'>
                    <div className='w-full'><GoldenRoseTokenItem imgURL="GoldenRoseTokenItem1.png" position="left" GRTNumber="10" GRTPrice='10' /></div>
                    <div className='w-full mt-4'><GoldenRoseTokenItem imgURL="GoldenRoseTokenItem2.png" position="right" GRTNumber="50" GRTPrice='50' /></div>
                    <div className='w-full mt-4'><GoldenRoseTokenItem imgURL="GoldenRoseTokenItem3.png" position="left" GRTNumber="100" GRTPrice='100' /></div>
                    <div className='w-full mt-4'><GoldenRoseTokenItem imgURL="GoldenRoseTokenItem4.png" position="right" GRTNumber="225" GRTPrice='200' /></div>
                    <div className='w-full mt-4'><GoldenRoseTokenItem imgURL="GoldenRoseTokenItem5.png" position="left" GRTNumber="500" GRTPrice='400' /></div>
                </div>
            </div>
        </div>
    );
}