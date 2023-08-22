import React from 'react'
import { useState } from 'react';

export default function TimeSelect({className, handleSelect}) {
    const timeOptions = [
        '12:00 AM', '1:00 AM', '2:00 AM', '3:00 AM', '4:00 AM', '5:00 AM',
        '6:00 AM', '7:00 AM', '8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM',
        '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM',
        '6:00 PM', '7:00 PM', '8:00 PM', '9:00 PM', '10:00 PM', '11:00 PM',
        ];
    const [selectedTime, setSelectedTime] = useState('');

    function handleClick(time) {
        setSelectedTime(time);
    }
      
    return (
        <div className={`flex flex-col overflow-hidden overflow-y-auto h-64 ${className?className:''}`}>
            {timeOptions.map((time) => (
            <div
                key={time}
                className={`w-full p-2 my-1 rounded-full border ${
                selectedTime === time ? 'bg-gray-200' : ''
                }`}
                onClick={() => {handleClick(time); handleSelect(time)}}
            >
                {time}
            </div>
            ))}
        </div>
    )
}
