import { useState } from 'react';

export default function TimeInput({handleChange, className}) {
  const [time, setTime] = useState('');

  const handleTimeChange = (event) => {
    const timeValue = event.target.value.replace(/\D/g, '').replace(/(\d{2})(\d{2})/, '$1/$2');
    if (timeValue.length <= 5) {
      setTime(timeValue);
    }
  };

  const handleTimeBlur = (event) => {
    const timeValue = event.target.value.replace(/\D/g, '').replace(/(\d{2})(\d{2})/, '$1/$2');
    const timeRegex = /^([01][0-9]|2[0-3])\/[0-5][0-9]$/;
    if (timeRegex.test(timeValue)) {
      setTime(timeValue);
    } else {
      setTime('');
    }
  };

  return (
    <input
      className={`border-none focus:outline-none rounded-lg p-2 ${className} `}
      type="text"
      placeholder="__/__"
      value={time}
      onChange={handleTimeChange}
      onBlur={handleTimeBlur}
    />
  );
}