import React from 'react';
import CustomDropdown from '../../../components/CustomDropdown/CustomDropodown';
import Button from '../../../components/Button';
import InputText from '../../../components/InputText';
import { useNavigate } from 'react-router-dom';
const publicPath = process.env.PUBLIC_URL;

export default function BusinessVAIAddiionPage() {

    const options = [1, 2, 3, 4]
    const navigate = useNavigate()

    const handleNext = () => {
        navigate('/client-subscription', {state:{business: true}})
    }
    
    return (
        <div className="main-container flex flex-col justify-between">
            <div className='flex-1'>
                <div className="mb-4">
                    <div className="flex flex-row justify-center mx-auto items-center w-max-370">
                        {/* <div className="w-max-175">
                            <img src={process.env.PUBLIC_URL + "/images/ChainPassId.png"} alt="Chain Pass ID" />
                        </div> */}
                        <div className='relative flex flex-col justify-start items-center'>
                            <div className='relative top-6'><img src={process.env.PUBLIC_URL + '/images/VectorLogo1.png'} alt="Vector Logo 1" /></div>
                            <div className='relative bottom-2 left-4'><img src={process.env.PUBLIC_URL + '/images/VectorLogo2.png'} alt="Vector Logo 2" /></div>
                        </div>
                    </div>
                </div>
                
                <div className="">
                    <div className="px-4 py-2 flex flex-col justify-center items-center bg-[#C1E4F2]">
                        <p>V.A.I. For Business 3 </p>                        
                        <p>Verification's Included Select additional</p>
                        <p>V.A.I.’s $25.00 Each</p>
                    </div>
                </div>
                <div className="flex-1">
                    <CustomDropdown options={options}/>
                </div>
            </div>
            <Button className="text-[#01195C] text-[23.4px] font-black mt-5" text="Next >" onClick={handleNext} />
        </div>
    );
}