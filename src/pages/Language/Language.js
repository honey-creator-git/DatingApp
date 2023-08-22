import React, {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../../components/Button';
import SearchBox from '../../components/SearchBox';
import data from "../../db/lan-coun.json";

export default function() {
    const [languages, setLanguages] = useState([]);
    const [filteredLanguages, setFilteredLanguages] = useState([]);
    const navigate = useNavigate()
    const handleNext = () => {
        navigate('/personal-information')
    }

    useEffect(() => {
        const languagedata = [];
    
        data.forEach((country) => {
          country.languages.forEach((language) => {
            const existingLanguage = languagedata.find(
              (item) => item.name === language.name
            );
    
            if (!existingLanguage) {
              languagedata.push({
                name: language.name,
                image: language.image,
              });
            }
          });
        });
        setLanguages(languagedata);
        setFilteredLanguages(languagedata);
    }, []);

    const handleSearch = (searchTerm) => {
        const filtered = languages.filter((language) =>
          language.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredLanguages(filtered);
    };

    return (
        <div className="main-container pt-5">
            <div className="w-full mx-auto flex flex-col justify-between items-center">
                <div><span className="text-[30px] font-bold">Select Language</span></div>

                <div className='mt-3 w-full mx-auto max-w-[255px]'>
                    <SearchBox
                        onSearch={handleSearch}
                        placeholder="Search Languages"
                        classname="rounded-xl pr-8"
                        language='true'
                    />
                </div>

                <div style={{width: '100vw'}} className='flex flex-col justify-start items-center mt-4 max-h-[100vh] overflow-scroll'>
                    {/* <div className='w-[250px] mx-auto flex items-center justify-between pt-4 hover:bg-[#DCE1EA] hover:border-2 hover:border-[#3760CB]' >
                        <img src={process.env.PUBLIC_URL + '/images/USFlag.png'} alt="US Flag" />
                        <span className=" text-[21px] font-medium country-name">English</span>
                    </div>
                    <div className='w-[250px] mx-auto flex items-center justify-between pt-4 hover:bg-[#DCE1EA] hover:border-2 hover:border-[#3760CB]' >
                        <img src={process.env.PUBLIC_URL + '/images/JPFlag.png'} alt="Japan Flag" />
                        <span className=" text-[21px] font-medium country-name">Japanese</span>
                    </div>
                    <div className='w-[250px] mx-auto flex items-center justify-between pt-4 hover:bg-[#DCE1EA] hover:border-2 hover:border-[#3760CB]' >
                        <img src={process.env.PUBLIC_URL + '/images/RUFlag.png'} alt="Russia Flag" />
                        <span className=" text-[21px] font-medium country-name">Russian</span>
                    </div>
                    <div className='w-[250px] mx-auto flex items-center justify-between pt-4 hover:bg-[#DCE1EA] hover:border-2 hover:border-[#3760CB]' >
                        <img src={process.env.PUBLIC_URL + '/images/BRFlag.png'} alt="Brazil Flag" />
                        <span className=" text-[21px] font-medium country-name">Brazilian</span>
                    </div> */}
                    {filteredLanguages.map((language, i) => (
                        <div
                            key={i}
                            className="w-full mx-auto flex items-center justify-center hover:bg-[#DCE1EA] hover:border-2 hover:border-[#3760CB]"
                        >
                            {/* <img
                                className="max-w-[100px] max-h-[100px]"
                                src={process.env.PUBLIC_URL + `/images/flags/${language.image}`}
                                alt={language.name}
                            />
                            <span className=" text-[21px] font-medium country-name">
                                {language.name}
                            </span> */}
                            <div className='w-[250px] flex items-center justify-between py-4'>
                                <div className='w-[88px]'><img className='w-full shadow-2xl' src={process.env.PUBLIC_URL + `/images/flags/${language.image}`} alt={language.name} /></div>
                                <span className=" text-[21px] font-medium">{language.name}</span>
                            </div>
                        </div>
                    ))}
                </div>
                
                {/* <div className="w-full flex-1 flex flex-col justify-start items-center h-[506px] overflow-auto mt-10">
                    <div className="w-full flex flex-col justify-center items-start mt-5">
                        <label className="flex justify-center items-center text-gray-500 font-bold">
                            <input className="h-[20px] w-[20px] mr-2" type="checkbox" />
                            <div className="w-[35px] mr-3">
                                <img src={process.env.PUBLIC_URL + "/images/flags/en-us.png"} alt="US Flag" />
                            </div>
                            <span className="text-[22px] font-medium country-name">English</span>
                        </label>
                    </div>
                    <div className="w-full flex flex-col justify-center items-start mt-5">
                        <label className="flex justify-center items-center text-gray-500 font-bold">
                            <input className="h-[20px] w-[20px] mr-2" type="checkbox" />
                            <div className="w-[35px] mr-3">
                                <img src={process.env.PUBLIC_URL + "/images/flags/en-sp.png"} alt="Spain Flag" />
                            </div>
                            <span className="text-[22px] font-medium country-name">Spanish, Castilian</span>
                        </label>
                    </div>
                    <div className="w-full flex flex-col justify-center items-start mt-5">
                        <label className="flex justify-center items-center text-gray-500 font-bold">
                            <input className="h-[20px] w-[20px] mr-2" type="checkbox" />
                            <div className="w-[35px] mr-3">
                                <img src={process.env.PUBLIC_URL + "/images/flags/en-fl.png"} alt="Spain Flag" />
                            </div>
                            <span className="text-[22px] font-medium country-name">Turkish</span>
                        </label>
                    </div>
                    <div className="w-full flex flex-col justify-center items-start mt-5">
                        <label className="flex justify-center items-center text-gray-500 font-bold">
                            <input className="h-[20px] w-[20px] mr-2" type="checkbox" />
                            <div className="w-[35px] mr-3">
                                <img src={process.env.PUBLIC_URL + "/images/flags/en-fr.png"} alt="Spain Flag" />
                            </div>
                            <span className="text-[22px] font-medium country-name">French</span>
                        </label>
                    </div>
                    <div className="w-full flex flex-col justify-center items-start mt-5">
                        <label className="flex justify-center items-center text-gray-500 font-bold">
                            <input className="h-[20px] w-[20px] mr-2" type="checkbox" />
                            <div className="w-[35px] mr-3">
                                <img src={process.env.PUBLIC_URL + "/images/flags/en-sp.png"} alt="Spain Flag" />
                            </div>
                            <span className="text-[22px] font-medium country-name">Indonesian</span>
                        </label>
                    </div>
                    <div className="w-full flex flex-col justify-center items-start mt-5">
                        <label className="flex justify-center items-center text-gray-500 font-bold">
                            <input className="h-[20px] w-[20px] mr-2" type="checkbox" />
                            <div className="w-[35px] mr-3">
                                <img src={process.env.PUBLIC_URL + "/images/flags/en-sp.png"} alt="Spain Flag" />
                            </div>
                            <span className="text-[22px] font-medium country-name">Malay</span>
                        </label>
                    </div>
                    <div className="w-full flex flex-col justify-center items-start mt-5">
                        <label className="flex justify-center items-center text-gray-500 font-bold">
                            <input className="h-[20px] w-[20px] mr-2" type="checkbox" />
                            <div className="w-[35px] mr-3">
                                <img src={process.env.PUBLIC_URL + "/images/flags/en-gr.png"} alt="German Flag" />
                            </div>
                            <span className="text-[22px] font-medium country-name">German</span>
                        </label>
                    </div>
                    <div className="w-full flex flex-col justify-center items-start mt-5">
                        <label className="flex justify-center items-center text-gray-500 font-bold">
                            <input className="h-[20px] w-[20px] mr-2" type="checkbox" />
                            <div className="w-[35px] mr-3">
                                <img src={process.env.PUBLIC_URL + "/images/flags/en-gr.png"} alt="German Flag" />
                            </div>
                            <span className="text-[22px] font-medium country-name">German</span>
                        </label>
                    </div>
                    <div className="w-full flex flex-col justify-center items-start mt-5">
                        <label className="flex justify-center items-center text-gray-500 font-bold">
                            <input className="h-[20px] w-[20px] mr-2" type="checkbox" />
                            <div className="w-[35px] mr-3">
                                <img src={process.env.PUBLIC_URL + "/images/flags/en-us.png"} alt="US Flag" />
                            </div>
                            <span className="text-[22px] font-medium country-name">English</span>
                        </label>
                    </div>
                    <div className="w-full flex flex-col justify-center items-start mt-5">
                        <label className="flex justify-center items-center text-gray-500 font-bold">
                            <input className="h-[20px] w-[20px] mr-2" type="checkbox" />
                            <div className="w-[35px] mr-3">
                                <img src={process.env.PUBLIC_URL + "/images/flags/en-sp.png"} alt="Spain Flag" />
                            </div>
                            <span className="text-[22px] font-medium country-name">Spanish, Castilian</span>
                        </label>
                    </div>
                    <div className="w-full flex flex-col justify-center items-start mt-5">
                        <label className="flex justify-center items-center text-gray-500 font-bold">
                            <input className="h-[20px] w-[20px] mr-2" type="checkbox" />
                            <div className="w-[35px] mr-3">
                                <img src={process.env.PUBLIC_URL + "/images/flags/en-fl.png"} alt="Spain Flag" />
                            </div>
                            <span className="text-[22px] font-medium country-name">Turkish</span>
                        </label>
                    </div>
                </div> */}

                <div className=" mt-custom-27 w-full">
                    <Button onClick={handleNext} text="Submit>>" size="45px" className="text-[#01195C] text-[21.06px] font-bold max-w-[147px] rounded-full" />
                </div>
            </div>
        </div>
    )
}