import React, { useState } from 'react';
import InputText from '../../components/InputText';
import SelectBox from '../../components/SelectBox';
import SearchBox from '../../components/SearchBox';
import Button from '../../components/Button';
import { useNavigate } from 'react-router-dom';

export default function Services() {
    const currencyOptions = ["Currency", "USD", "EUR", "INR", "FDP"]
    const options1 = ["N/A", "select 1", "select 2", "select 3", "select 4"];
    const options2 = ["N/A", "select 1", "select 2", "select 3", "select 4"];
    const options3 = ["N/A", "select 1", "select 2", "select 3", "select 4"];
    const options4 = ["N/A", "select 1", "select 2", "select 3", "select 4"];
    const options5 = ["N/A", "select 1", "select 2", "select 3", "select 4"];
    const options6 = ["N/A", "select 1", "select 2", "select 3", "select 4"];
    const options7 = ["N/A", "select 1", "select 2", "select 3", "select 4"];
    const options8 = ["N/A", "select 1", "select 2", "select 3", "select 4"];
    const options9 = ["N/A", "select 1", "select 2", "select 3", "select 4"];
    const options10 = ["N/A", "select 1", "select 2", "select 3", "select 4"];
    const options11 = ["N/A", "select 1", "select 2", "select 3", "select 4"];
    const options12 = ["N/A", "select 1", "select 2", "select 3", "select 4"];
    const options13 = ["N/A", "select 1", "select 2", "select 3", "select 4"];
    const options14 = ["N/A", "select 1", "select 2", "select 3", "select 4"];
    const options15 = ["N/A", "select 1", "select 2", "select 3", "select 4"];
    const options16 = ["N/A", "select 1", "select 2", "select 3", "select 4"];
    const options17 = ["N/A", "select 1", "select 2", "select 3", "select 4"];
    const options18 = ["N/A", "select 1", "select 2", "select 3", "select 4"];
    const options19 = ["N/A", "select 1", "select 2", "select 3", "select 4"];
    const options20 = ["N/A", "select 1", "select 2", "select 3", "select 4"];
    const options21 = ["N/A", "select 1", "select 2", "select 3", "select 4"];
    const options22 = ["N/A", "select 1", "select 2", "select 3", "select 4"];
    const options23 = ["N/A", "select 1", "select 2", "select 3", "select 4"];
    const options24 = ["N/A", "select 1", "select 2", "select 3", "select 4"];
    const options25 = ["N/A", "select 1", "select 2", "select 3", "select 4"];
    const options26 = ["N/A", "select 1", "select 2", "select 3", "select 4"];

    const [step, setStep] = useState("first");
    const [currency, setCurrency] = useState("USD");
    const handleService = (type) => {
        setStep(type)
    }
    const changeCurrency = (e) => {
        setCurrency(e.target.value);
    }
    const navigate = useNavigate()

    const handleSubmit = () => {
        navigate('/set-hourly-rate')
    }

    return (
        <div className="main-container">
            <div className="flex flex-col justify-center items-center pt-custom-24 mx-auto">
                <div className="text-custom-13">
                    <span>Services</span>
                    <Button text="Skip>>" onClick={() => handleSubmit()} className='font-bold text-[23.4px] text-[#01195C] bg-transparent shadow-none focus:bg-transparent' size='45px' />
                </div>
                {/* <div className="w-full">
                    <SearchBox name="search" placeholder="Search Services" bgColor='transparent' rounded='full' classname='border-2 border-white'/>
                </div> */}
                <span className='font-semibold text-[14.4px] text-[#02227E]'>Be thorough members can find you by<br />Services offered</span>
                <div className="w-full flex flex-row justify-between items-center mt-10">
                    <div className="w-[100px] flex flex-col justify-center items-center"><span className="text-[14px] font-bold text-[#026EFF]">Service</span></div>
                    <div className="w-[100px] flex flex-col justify-center items-center"><span className="text-[14px] font-bold text-[#026EFF]">Included</span></div>
                    <div className="w-[100px] flex flex-col justify-center items-center"><span className="text-[14px] font-bold text-[#026EFF]">Extra</span></div>
                    <div className="w-[100px] flex flex-col justify-center items-center"><SelectBox options={currencyOptions} value={currency} onChange={(e) => changeCurrency(e)} className="text-[12px] font-bold txt-custom-color-4" borderNone shadowNone size="35px"/></div>
                </div>
                <div className="w-full flex flex-col justify-center items-center">
                    <div className="w-full flex flex-row justify-between items-center mt-5">
                        <div className="w-[100px] flex flex-col justify-center items-center"><span className="text-[12px] font-medium">69 position</span></div>
                        <div className="w-[120px] flex flex-col justify-center items-center"><SelectBox options={options1} className="text-[12px] font-bold h-[33px] w-5/6" size="35px" /></div>
                        <div className="w-[100px] flex flex-col justify-center items-center"><InputText className="w-full text-[12px] font-bold" size="35px" /></div>
                        <div className="w-[100px] flex flex-col justify-center items-center"><span className="text-[12px] font-bold">{currency}</span></div>
                    </div>
                    <div className="w-full flex flex-row justify-between items-center mt-5">
                        <div className="w-[100px] flex flex-col justify-center items-center"><span className="text-[12px] font-medium">Anal</span></div>
                        <div className="w-[120px] flex flex-col justify-center items-center"><SelectBox options={options1} className="text-[12px] font-bold h-[33px]" size="35px" /></div>
                        <div className="w-[100px] flex flex-col justify-center items-center"><InputText className="w-full text-[12px] font-bold" size="35px" /></div>
                        <div className="w-[100px] flex flex-col justify-center items-center"><span className="text-[12px] font-bold">{currency}</span></div>
                    </div>
                    <div className="w-full flex flex-row justify-between items-center mt-5">
                        <div className="w-[100px] flex flex-col justify-center items-center"><span className="text-[12px] font-medium">Bondaage</span></div>
                        <div className="w-[120px] flex flex-col justify-center items-center"><SelectBox options={options1} className="text-[12px] font-bold h-[33px]" size="35px" /></div>
                        <div className="w-[100px] flex flex-col justify-center items-center"><InputText className="w-full text-[12px] font-bold" size="35px" /></div>
                        <div className="w-[100px] flex flex-col justify-center items-center"><span className="text-[12px] font-bold">{currency}</span></div>
                    </div>
                    <div className="w-full flex flex-row justify-between items-center mt-5">
                        <div className="w-[100px] flex flex-col justify-center items-center"><span className="text-[12px] font-medium">Casual photos</span></div>
                        <div className="w-[120px] flex flex-col justify-center items-center"><SelectBox options={options1} className="text-[12px] font-bold h-[33px]" size="35px" /></div>
                        <div className="w-[100px] flex flex-col justify-center items-center"><InputText className="w-full text-[12px] font-bold" size="35px" /></div>
                        <div className="w-[100px] flex flex-col justify-center items-center"><span className="text-[12px] font-bold">{currency}</span></div>
                    </div>
                    <div className="w-full flex flex-row justify-between items-center mt-5">
                        <div className="w-[100px] flex flex-col justify-center items-center"><span className="text-[12px] font-medium">Couples</span></div>
                        <div className="w-[120px] flex flex-col justify-center items-center"><SelectBox options={options1} className="text-[12px] font-bold h-[33px]" size="35px" /></div>
                        <div className="w-[100px] flex flex-col justify-center items-center"><InputText className="w-full text-[12px] font-bold" size="35px" /></div>
                        <div className="w-[100px] flex flex-col justify-center items-center"><span className="text-[12px] font-bold">{currency}</span></div>
                    </div>
                    <div className="w-full flex flex-row justify-between items-center mt-5">
                        <div className="w-[100px] flex flex-col justify-center items-center"><span className="text-[12px] font-medium">Cum in face</span></div>
                        <div className="w-[120px] flex flex-col justify-center items-center"><SelectBox options={options1} className="text-[12px] font-bold h-[33px]" size="35px" /></div>
                        <div className="w-[100px] flex flex-col justify-center items-center"><InputText className="w-full text-[12px] font-bold" size="35px" /></div>
                        <div className="w-[100px] flex flex-col justify-center items-center"><span className="text-[12px] font-bold">{currency}</span></div>
                    </div>
                    <div className="w-full flex flex-row justify-between items-center mt-5">
                        <div className="w-[100px] flex flex-col justify-center items-center"><span className="text-[12px] font-medium">Cum in mouth</span></div>
                        <div className="w-[120px] flex flex-col justify-center items-center"><SelectBox options={options1} className="text-[12px] font-bold h-[33px]" size="35px" /></div>
                        <div className="w-[100px] flex flex-col justify-center items-center"><InputText className="w-full text-[12px] font-bold" size="35px" /></div>
                        <div className="w-[100px] flex flex-col justify-center items-center"><span className="text-[12px] font-bold">{currency}</span></div>
                    </div>
                    <div className="w-full flex flex-row justify-between items-center mt-5">
                        <div className="w-[100px] flex flex-col justify-center items-center"><span className="text-[12px] font-medium">Cum on body</span></div>
                        <div className="w-[120px] flex flex-col justify-center items-center"><SelectBox options={options1} className="text-[12px] font-bold h-[33px]" size="35px" /></div>
                        <div className="w-[100px] flex flex-col justify-center items-center"><InputText className="w-full text-[12px] font-bold" size="35px" /></div>
                        <div className="w-[100px] flex flex-col justify-center items-center"><span className="text-[12px] font-bold">{currency}</span></div>
                    </div>
                    <div className="w-full flex flex-row justify-between items-center mt-5">
                        <div className="w-[100px] flex flex-col justify-center items-center"><span className="text-[12px] font-medium">Deepthroat</span></div>
                        <div className="w-[120px] flex flex-col justify-center items-center"><SelectBox options={options1} className="text-[12px] font-bold h-[33px]" size="35px" /></div>
                        <div className="w-[100px] flex flex-col justify-center items-center"><InputText className="w-full text-[12px] font-bold" size="35px" /></div>
                        <div className="w-[100px] flex flex-col justify-center items-center"><span className="text-[12px] font-bold">{currency}</span></div>
                    </div>
                    <div className="w-full flex flex-row justify-between items-center mt-5">
                        <div className="w-[100px] flex flex-col justify-center items-center"><span className="text-[12px] font-medium">Cunnilingus</span></div>
                        <div className="w-[120px] flex flex-col justify-center items-center"><SelectBox options={options1} className="text-[12px] font-bold h-[33px]" size="35px" /></div>
                        <div className="w-[100px] flex flex-col justify-center items-center"><InputText className="w-full text-[12px] font-bold" size="35px" /></div>
                        <div className="w-[100px] flex flex-col justify-center items-center"><span className="text-[12px] font-bold">{currency}</span></div>
                    </div>
                    <div className="w-full flex flex-row justify-between items-center mt-5">
                        <div className="w-[100px] flex flex-col justify-center items-center"><span className="text-[12px] font-medium">Dirty talk</span></div>
                        <div className="w-[120px] flex flex-col justify-center items-center"><SelectBox options={options1} className="text-[12px] font-bold h-[33px]" size="35px" /></div>
                        <div className="w-[100px] flex flex-col justify-center items-center"><InputText className="w-full text-[12px] font-bold" size="35px" /></div>
                        <div className="w-[100px] flex flex-col justify-center items-center"><span className="text-[12px] font-bold">{currency}</span></div>
                    </div>
                    <div className="w-full flex flex-row justify-between items-center mt-5">
                        <div className="w-[100px] flex flex-col justify-center items-center"><span className="text-[12px] font-medium">Duo with girl</span></div>
                        <div className="w-[120px] flex flex-col justify-center items-center"><SelectBox options={options1} className="text-[12px] font-bold h-[33px]" size="35px" /></div>
                        <div className="w-[100px] flex flex-col justify-center items-center"><InputText className="w-full text-[12px] font-bold" size="35px" /></div>
                        <div className="w-[100px] flex flex-col justify-center items-center"><span className="text-[12px] font-bold">{currency}</span></div>
                    </div>
                    <div className="w-full flex flex-row justify-between items-center mt-5">
                        <div className="w-[100px] flex flex-col justify-center items-center"><span className="text-[12px] font-medium">Erotic massage</span></div>
                        <div className="w-[120px] flex flex-col justify-center items-center"><SelectBox options={options1} className="text-[12px] font-bold h-[33px]" size="35px" /></div>
                        <div className="w-[100px] flex flex-col justify-center items-center"><InputText className="w-full text-[12px] font-bold" size="35px" /></div>
                        <div className="w-[100px] flex flex-col justify-center items-center"><span className="text-[12px] font-bold">{currency}</span></div>
                    </div>
                    <div className="w-full flex flex-row justify-between items-center mt-5">
                        <div className="w-[100px] flex flex-col justify-center items-center"><span className="text-[12px] font-medium">Findom</span></div>
                        <div className="w-[120px] flex flex-col justify-center items-center"><SelectBox options={options1} className="text-[12px] font-bold h-[33px]" size="35px" /></div>
                        <div className="w-[100px] flex flex-col justify-center items-center"><InputText className="w-full text-[12px] font-bold" size="35px" /></div>
                        <div className="w-[100px] flex flex-col justify-center items-center"><span className="text-[12px] font-bold">{currency}</span></div>
                    </div>
                    <div className="w-full flex flex-row justify-between items-center mt-5">
                        <div className="w-[100px] flex flex-col justify-center items-center"><span className="text-[12px] font-medium">Fingering</span></div>
                        <div className="w-[120px] flex flex-col justify-center items-center"><SelectBox options={options1} className="text-[12px] font-bold h-[33px]" size="35px" /></div>
                        <div className="w-[100px] flex flex-col justify-center items-center"><InputText className="w-full text-[12px] font-bold" size="35px" /></div>
                        <div className="w-[100px] flex flex-col justify-center items-center"><span className="text-[12px] font-bold">{currency}</span></div>
                    </div>
                    <div className="w-full flex flex-row justify-between items-center mt-5">
                        <div className="w-[100px] flex flex-col justify-center items-center"><span className="text-[12px] font-medium">Foot fetish</span></div>
                        <div className="w-[120px] flex flex-col justify-center items-center"><SelectBox options={options1} className="text-[12px] font-bold h-[33px]" size="35px" /></div>
                        <div className="w-[100px] flex flex-col justify-center items-center"><InputText className="w-full text-[12px] font-bold" size="35px" /></div>
                        <div className="w-[100px] flex flex-col justify-center items-center"><span className="text-[12px] font-bold">{currency}</span></div>
                    </div>
                    <div className="w-full flex flex-row justify-between items-center mt-5">
                        <div className="w-[100px] flex flex-col justify-center items-center"><span className="text-[12px] font-medium">French kissing</span></div>
                        <div className="w-[120px] flex flex-col justify-center items-center"><SelectBox options={options1} className="text-[12px] font-bold h-[33px]" size="35px" /></div>
                        <div className="w-[100px] flex flex-col justify-center items-center"><InputText className="w-full text-[12px] font-bold" size="35px" /></div>
                        <div className="w-[100px] flex flex-col justify-center items-center"><span className="text-[12px] font-bold">{currency}</span></div>
                    </div>
                    <div className="w-full flex flex-row justify-between items-center mt-5">
                        <div className="w-[100px] flex flex-col justify-center items-center"><span className="text-[12px] font-medium">GFE</span></div>
                        <div className="w-[120px] flex flex-col justify-center items-center"><SelectBox options={options1} className="text-[12px] font-bold h-[33px]" size="35px" /></div>
                        <div className="w-[100px] flex flex-col justify-center items-center"><InputText className="w-full text-[12px] font-bold" size="35px" /></div>
                        <div className="w-[100px] flex flex-col justify-center items-center"><span className="text-[12px] font-bold">{currency}</span></div>
                    </div>
                    <div className="w-full flex flex-row justify-between items-center mt-5">
                        <div className="w-[100px] flex flex-col justify-center items-center"><span className="text-[12px] font-medium">Golden shower</span></div>
                        <div className="w-[120px] flex flex-col justify-center items-center"><SelectBox options={options1} className="text-[12px] font-bold h-[33px]" size="35px" /></div>
                        <div className="w-[100px] flex flex-col justify-center items-center"><InputText className="w-full text-[12px] font-bold" size="35px" /></div>
                        <div className="w-[100px] flex flex-col justify-center items-center"><span className="text-[12px] font-bold">{currency}</span></div>
                    </div>
                    <div className="w-full flex flex-row justify-between items-center mt-5">
                        <div className="w-[100px] flex flex-col justify-center items-center"><span className="text-[12px] font-medium">Group sex</span></div>
                        <div className="w-[120px] flex flex-col justify-center items-center"><SelectBox options={options1} className="text-[12px] font-bold h-[33px]" size="35px" /></div>
                        <div className="w-[100px] flex flex-col justify-center items-center"><InputText className="w-full text-[12px] font-bold" size="35px" /></div>
                        <div className="w-[100px] flex flex-col justify-center items-center"><span className="text-[12px] font-bold">{currency}</span></div>
                    </div>
                    <div className="w-full flex flex-row justify-between items-center mt-5">
                        <div className="w-[100px] flex flex-col justify-center items-center"><span className="text-[12px] font-medium">Handjob</span></div>
                        <div className="w-[120px] flex flex-col justify-center items-center"><SelectBox options={options1} className="text-[12px] font-bold h-[33px]" size="35px" /></div>
                        <div className="w-[100px] flex flex-col justify-center items-center"><InputText className="w-full text-[12px] font-bold" size="35px" /></div>
                        <div className="w-[100px] flex flex-col justify-center items-center"><span className="text-[12px] font-bold">{currency}</span></div>
                    </div>
                    <div className="w-full flex flex-row justify-between items-center mt-5">
                        <div className="w-[100px] flex flex-col justify-center items-center"><span className="text-[12px] font-medium">Kamasutra</span></div>
                        <div className="w-[120px] flex flex-col justify-center items-center"><SelectBox options={options1} className="text-[12px] font-bold h-[33px]" size="35px" /></div>
                        <div className="w-[100px] flex flex-col justify-center items-center"><InputText className="w-full text-[12px] font-bold" size="35px" /></div>
                        <div className="w-[100px] flex flex-col justify-center items-center"><span className="text-[12px] font-bold">{currency}</span></div>
                    </div>
                    <div className="w-full flex flex-row justify-between items-center mt-5">
                        <div className="w-[100px] flex flex-col justify-center items-center"><span className="text-[12px] font-medium">Masturbation</span></div>
                        <div className="w-[120px] flex flex-col justify-center items-center"><SelectBox options={options1} className="text-[12px] font-bold h-[33px]" size="35px" /></div>
                        <div className="w-[100px] flex flex-col justify-center items-center"><InputText className="w-full text-[12px] font-bold" size="35px" /></div>
                        <div className="w-[100px] flex flex-col justify-center items-center"><span className="text-[12px] font-bold">{currency}</span></div>
                    </div>
                    <div className="w-full flex flex-row justify-between items-center mt-5">
                        <div className="w-[100px] flex flex-col justify-center items-center"><span className="text-[12px] font-medium">Swallowing</span></div>
                        <div className="w-[120px] flex flex-col justify-center items-center"><SelectBox options={options1} className="text-[12px] font-bold h-[33px]" size="35px" /></div>
                        <div className="w-[100px] flex flex-col justify-center items-center"><InputText className="w-full text-[12px] font-bold" size="35px" /></div>
                        <div className="w-[100px] flex flex-col justify-center items-center"><span className="text-[12px] font-bold">{currency}</span></div>
                    </div>
                    <div className="w-full flex flex-row justify-between items-center mt-5">
                        <div className="w-[100px] flex flex-col justify-center items-center"><span className="text-[12px] font-medium">Video with sex</span></div>
                        <div className="w-[120px] flex flex-col justify-center items-center"><SelectBox options={options1} className="text-[12px] font-bold h-[33px]" size="35px" /></div>
                        <div className="w-[100px] flex flex-col justify-center items-center"><InputText className="w-full text-[12px] font-bold" size="35px" /></div>
                        <div className="w-[100px] flex flex-col justify-center items-center"><span className="text-[12px] font-bold">{currency}</span></div>
                    </div>
                    <div className="w-full flex flex-row justify-between items-center mt-5">
                        <div className="w-[100px] flex flex-col justify-center items-center"><span className="text-[12px] font-medium">With 2 men</span></div>
                        <div className="w-[120px] flex flex-col justify-center items-center"><SelectBox options={options1} className="text-[12px] font-bold h-[33px]" size="35px" /></div>
                        <div className="w-[100px] flex flex-col justify-center items-center"><InputText className="w-full text-[12px] font-bold" size="35px" /></div>
                        <div className="w-[100px] flex flex-col justify-center items-center"><span className="text-[12px] font-bold">{currency}</span></div>
                    </div>
                </div>
                <div className="mt-14 w-full">
                   <Button onClick={handleSubmit} text="Submit>>" className="text-[#01195C] font-bold text-[23.4px]" />
                </div>
            </div>
        </div>
    );
}