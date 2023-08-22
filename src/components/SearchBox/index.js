import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

export default function SearchBox({onSearch,name, placeholder, classname, bgColor, rounded, language}) {
    const [searchTerm, setSearchTerm] = useState('');
    const handleSearch = (event) => {
        const { value } = event.target;
        setSearchTerm(value);
        onSearch(value);
    };
    return (
        <div className="relative mx-auto text-gray-600">
            {
                language === 'true' &&
                <div className='relative w-full mx-auto flex flex-row justify-center items-center'>
                    <button type="submit" className="absolute left-12 top-3">
                        <FontAwesomeIcon icon={faSearch} className="services-search-icon"/>
                    </button>
                    <input 
                        className={`w-full border-2 border-gray-300 h-10 px-5 pl-10 pr-16 text-md focus:outline-none ${classname?classname:''} ${bgColor?`bg-${bgColor}`:'bg-white'} ${rounded?`rounded-${rounded}`:'rounded-lg'}`}
                        type="search"
                        name={name}
                        value={searchTerm}
                        onChange={handleSearch}
                        placeholder={placeholder}
                    />
                </div>
            }
            {
                language !== 'true' &&
                <div className='w-full mx-auto flex flex-row justify-center items-center'>
                    <input 
                        className={`w-full border-2 border-gray-300 h-10 px-5 pr-16 text-md focus:outline-none ${classname?classname:''} ${bgColor?`bg-${bgColor}`:'bg-white'} ${rounded?`rounded-${rounded}`:'rounded-lg'}`}
                        type="search"
                        name={name}
                        value={searchTerm}
                        onChange={handleSearch}
                        placeholder={placeholder}
                    />
                    <button type="submit" className="absolute right-0 top-3">
                        <FontAwesomeIcon icon={faSearch} className="services-search-icon"/>
                    </button>
                </div>
            }
        </div>
    );
}