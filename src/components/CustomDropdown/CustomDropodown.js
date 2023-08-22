import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import FullWidthButton from '../Button';

export default function CustomDropdown({ className, options }) {
    const [dropdown, setDropdown] = useState(false);
    const handleClick = () => {
        setDropdown(!dropdown);
        console.log("Dropdown => ", dropdown)
    }
    const setDropdownFalse = () => {
        setDropdown(false);
    }
    return (
        <div className={`flex flex-col justify-start items-start ${className?className:''}`}>
            <div className="w-full mt-4">
                <button onClick={handleClick}
                    className="relative flex justify-center items-center w-full bg-gradient-to-b from-[#0247FF] to-[#01195C] text-custom-4 focus:border-white focus:outline-none overflow-hidden px-6 rounded-md text-gray-200 text-sm" >
                    <div className="flex flex-col justify-center items-center">
                        <span className="text-custom-4">Additional Verification's</span>
                        <span className="text-custom-4">-- Select --</span>
                    </div>
                    <FontAwesomeIcon icon={faChevronDown} className="vai-dropdown-icon" />
                </button>
                { dropdown ? <div onClick={setDropdownFalse}
                    className="flex flex-col w-full right-0 py-2 bg-custom-gray rounded-md shadow-xl mb-custom-19"
                >
                    {options.map((option, index) => (
                        <div key={option}>
                            <a href="#" className="block px-4 py-2 text-sm font-bold text-gray-800 hover:bg-indigo-500 hover:text-white">
                                {option}
                            </a>
                            {index == options.length - 1 ? <div></div> : <div className="mx-auto border-b-2"></div>}
                        </div>                        
                    ))}
                    </div>
                : <div></div>}
            </div>
        </div>
    );
}