import React from 'react';

export default function TimePicker() {
    return (
        <div className="w-full mx-auto flex items-center justify-center bg-transparent rounded-lg mt-2 p-5 ">
            <div className="flex flex-row justify-between items-center">
                <div className='flex items-center justify-center'>
                    <select name="hours" className="bg-transparent text-xl appearance-none outline-none text-white border-2 border-white">
                        <option className='text-black' value="1">1</option>
                        <option className='text-black' value="2">2</option>
                        <option className='text-black' value="3">3</option>
                        <option className='text-black' value="4">4</option>
                        <option className='text-black' value="5">5</option>
                        <option className='text-black' value="6">6</option>
                        <option className='text-black' value="7">7</option>
                        <option className='text-black' value="8">8</option>
                        <option className='text-black' value="9">9</option>
                        <option className='text-black' value="10">10</option>
                        <option className='text-black' value="11">10</option>
                        <option className='text-black' value="12">12</option>
                    </select>
                </div>
                <div className='flex items-center justify-center w-[30px]'><span className="text-xl text-white">:</span></div>
                <div className='flex items-center justify-center'>
                    <select name="minutes" className="bg-transparent text-xl appearance-none outline-none text-white border-2 border-white">
                        <option className='text-black' value="0">00</option>
                        <option className='text-black' value="0">50</option>
                        <option className='text-black' value="0">10</option>
                        <option className='text-black' value="0">15</option>
                        <option className='text-black' value="0">20</option>
                        <option className='text-black' value="0">25</option>
                        <option className='text-black' value="0">30</option>
                        <option className='text-black' value="0">35</option>
                        <option className='text-black' value="0">40</option>
                        <option className='text-black' value="0">45</option>
                        <option className='text-black' value="30">50</option>
                        <option className='text-black' value="30">55</option>
                    </select>
                </div>
                <div className='flex items-center justify-center w-[30px]'><span className="text-xl text-white">:</span></div>
                <div className='flex items-center justify-center'>
                    <select name="ampm" className="bg-transparent text-xl appearance-none outline-none text-white border-2 border-white">
                        <option className='text-black' value="am">AM</option>
                        <option className='text-black' value="pm">PM</option>
                    </select>
                </div>
            </div>
        </div>
    );
}