import React from 'react';
import InputText from '../../components/InputText';
import SelectBox from '../../components/SelectBox';
import Button from '../../components/Button';
import { useNavigate } from 'react-router-dom';

export default function PersonalInformation() {
    const options1 = ['Age', '20', '30', '40'];
    const options2 = ['City', '20', '30', '40'];
    const options3 = ['Country', '20', '30', '40'];
    const options4 = ['Height', '20', '30', '40'];
    const options5 = ['Weight', '20', '30', '40'];
    const options6 = ['Ethinicity', '20', '30', '40'];
    const options7 = ['Travel', '20', '30', '40'];
    const options8 = ['Nationality', '20', '30', '40'];
    const options9 = ['Languages', '20', '30', '40'];
    const options10 = ['Hair Color', '20', '30', '40'];
    const options11 = ['Hair Length', '20', '30', '40'];
    const options12 = ['Breast Size', '20', '30', '40'];
    const options13 = ['Breast Type', '20', '30', '40'];
    const options14 = ['Available for', '20', '30', '40'];
    const options15 = ['Tatto', '20', '30', '40'];
    const options16 = ['Piercing', '20', '30', '40'];
    const options17 = ['Smoker', '20', '30', '40'];
    const options18 = ['Eye Color', 'blue', 'black', 'gray', 'yello'];
    const options19 = ['Orientation', '1', '2', '3', '4'];
    // const options20 = ['Meeting with', 'Friend', "Teacher", "Parent"];
    const navigate = useNavigate()
    const handleNext = () => {
        navigate('/mutual-contract-sign')
    }
    return (
        <div className="main-container">
            <div className="flex flex-col justify-center items-center pt-custom-26 mx-auto">
                <div className="flex-1"><span className="text-[30px] font-bold">Personal Information</span></div>
                <div className="flex-1 mt-1"><span className="text-[16px] font-bold">Orientation</span></div>
                <div className="w-full flex flex-row justify-between items-center mt-1">
                    <div className="mb-[0.125rem] mr-4 inline-block min-h-[1.5rem] pl-[1.5rem]">
                        <input
                            className="w-[15px] h-[15px] mr-1"
                            type="radio"
                            name="inlineRadioOptions"
                            id="inlineRadio1"
                            value="Female" />
                        <label
                            className="mt-px inline-block pl-[0.15rem] text-[20px] font-medium hover:cursor-pointer"
                            htmlFor="inlineRadio1"
                        >Female</label>
                    </div>
                    <div className="mb-[0.125rem] mr-4 inline-block min-h-[1.5rem] pl-[1.5rem]">
                        <input
                            className="w-[15px] h-[15px] mr-1"
                            type="radio"
                            name="inlineRadioOptions"
                            id="inlineRadio2"
                            value="Male" />
                        <label
                            className="mt-px inline-block pl-[0.15rem] text-[20px] font-medium hover:cursor-pointer"
                            htmlFor="inlineRadio2"
                        >Male</label>
                    </div>
                    <div className="mb-[0.125rem] mr-4 inline-block min-h-[1.5rem] pl-[1.5rem]">
                        <input
                            className="w-[15px] h-[15px] mr-1"
                            type="radio"
                            name="inlineRadioOptions"
                            id="inlineRadio3"
                            value="Trans" />
                        <label
                            className="mt-px inline-block pl-[0.15rem] text-[20px] font-medium hover:cursor-pointer"
                            htmlFor="inlineRadio3"
                        >Trans</label>
                    </div>
                </div>
                <div className="w-full flex-1 mt-custom-27">
                    <div className="grid grid-cols-2 gap-4">
                        <InputText type="text" placeholder="Site ID (Automatic)" size="37px" className="border-gray-100 rounded-full custom-border-width text-[16px] font-medium" />
                        <InputText type="text" placeholder="Age" size="37px" className="border-gray-100 rounded-full custom-border-width text-[16px] font-medium" />
                                                {/* <SelectBox options={options1} size="37px" borderColor='border-gray-100' /> */}
                        <SelectBox options={options2} size="37px" borderColor='border-gray-100' />
                        <SelectBox options={options3} size="37px" borderColor='border-gray-100' />
                        <SelectBox options={options4} size="37px" borderColor='border-gray-100' />
                        <SelectBox options={options5} size="37px" borderColor='border-gray-100' />
                        <SelectBox options={options6} size="37px" borderColor='border-gray-100' />
                        <SelectBox options={options7} size="37px" borderColor='border-gray-100' />
                        <SelectBox options={options8} size="37px" borderColor='border-gray-100' />
                        <SelectBox options={options9} size="37px" borderColor='border-gray-100' />
                        <SelectBox options={options10} size="37px" borderColor='border-gray-100' />
                        <SelectBox options={options11} size="37px" borderColor='border-gray-100' />
                        <SelectBox options={options12} size="37px" borderColor='border-gray-100' />
                        <SelectBox options={options13} size="37px" borderColor='border-gray-100' />
                        <SelectBox options={options14} size="37px" borderColor='border-gray-100' />
                        <SelectBox options={options15} size="37px" borderColor='border-gray-100' />
                        <SelectBox options={options16} size="37px" borderColor='border-gray-100' />
                        <SelectBox options={options17} size="37px" borderColor='border-gray-100' />
                        <SelectBox options={options18} size="37px" borderColor='border-gray-100' />
                        <SelectBox options={options19} size="37px" borderColor='border-gray-100' />
                        {/* <SelectBox options={options20} size="37px" borderColor='border-gray-100' /> */}
                    </div>
                </div>
                <div className="w-full mt-10">
                    <div className="text-custom-2 txt-custom-align-left">
                        <span>Description</span>
                    </div>
                    <textarea id="profile_description" rows="3"
                        className="mt-custom-10 block p-2.5 w-full text-[18px] text-gray-900 bg-transparent rounded-lg border-2  border-[#CFCFCF] focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                        placeholder="Share something that describes you">
                    </textarea>
                </div>
                <div className="flex-1 mt-custom-27 w-full flex flex-row justify-center items-center">
                    <Button onClick={handleNext} text="Skip>>" className="font-bold text-[23.4px] text-[#01195C] bg-transparent shadow-none focus:bg-transparent" />
                    <Button onClick={handleNext} text="Next>>" className="font-bold text-[23.4px] text-[#01195C] rounded-full" />
                </div>
            </div>
        </div>
    );
}