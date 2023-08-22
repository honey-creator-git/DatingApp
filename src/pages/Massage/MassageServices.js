import React from 'react'
import { Link } from 'react-router-dom';
import AdditionalServices from '../../components/AdditionalServices/AdditionalServices';

const MassageServices = () => {
    const massage = [
        {
            'id': 'massage1',
            'value': 'Swedish',
            'title': 'Swedish',
            'checked': false
        },
        {
            'id': 'massage2',
            'value': 'Thai',
            'title': 'Thai',
            'checked': false
        },
        {
            'id': 'massage3',
            'value': 'Deep Tissue',
            'title': 'Deep Tissue',
            'checked': false
        },
        {
            'id': 'massage4',
            'value': 'Shaitsu',
            'title': 'Shaitsu',
            'checked': false
        },
    ]
    const sensual_massage = [
        {
            'id': 'SensualMassage1',
            'value': 'Body Rub',
            'title': 'Body Rub',
            'checked': false
        },
        {
            'id': 'SensualMassage2',
            'value': 'Tantra',
            'title': 'Tantra',
            'checked': false
        },
        {
            'id': 'SensualMassage3',
            'value': 'Dark tantra',
            'title': 'Dark tantra',
            'checked': false
        },
        {
            'id': 'SensualMassage4',
            'value': 'Prostate',
            'title': 'Prostate',
            'checked': false
        },
        {
            'id': 'SensualMassage5',
            'value': 'Lingam',
            'title': 'Lingam',
            'checked': false
        },
        {
            'id': 'SensualMassage6',
            'value': 'Yoni',
            'title': 'Yoni',
            'checked': false
        },
        {
            'id': 'SensualMassage7',
            'value': 'Nuru',
            'title': 'Nuru',
            'checked': false
        },
        {
            'id': 'SensualMassage8',
            'value': 'Erotic',
            'title': 'Erotic',
            'checked': false
        },
        {
            'id': 'SensualMassage9',
            'value': 'Foam',
            'title': 'Foam',
            'checked': false
        },
        {
            'id': 'SensualMassage10',
            'value': 'Esalen',
            'title': 'Esalen',
            'checked': false
        },
    ];
    const completion = [
        {
            'id': 'completion1',
            'value': 'Therapudic only',
            'title': 'Therapudic only',
            'checked': false
        },
        {
            'id': 'completion2',
            'value': 'Hand job',
            'title': 'Hand job',
            'checked': false
        },
        {
            'id': 'completion3',
            'value': 'Full Service',
            'title': 'Full Service',
            'checked': false
        },
        {
            'id': 'completion4',
            'value': 'BBBJ',
            'title': 'BBBJ',
            'checked': false
        },
        {
            'id': 'completion5',
            'value': 'Prostate',
            'title': 'Prostate',
            'checked': false
        },
        {
            'id': 'completion6',
            'value': 'CBJ',
            'title': 'CBJ',
            'checked': false
        },
        {
            'id': 'completion7',
            'value': 'Grinding',
            'title': 'Grinding',
            'checked': false
        },
        {
            'id': 'completion8',
            'value': 'Toys',
            'title': 'Toys',
            'checked': false
        },
    ];
    return (
        <div className="main-container-other flex flex-col justify-start">
            <p className='text-[26px] md:text-[30px] text-center text-[#040B47] font-inter font-bold'>Advanced Search</p>
            <p className='text-[24px] md:text-[28px] text-center text-[#000] font-roboto-serif font-bold'>Massage</p>
            <div className='bg-linear-gradient h-[27px]'></div>
            <div>
                <p className='text-[#02227E] text-[20px] text-center font-bold font-roboto pt-px pb-2'>Massage</p>
                <div className='flex justify-center'>
                    <div className='grid grid-cols-2 w-[350px] gap-x-2 sm:gap-x-4 md:gap-x-7 pl-5 mr-[-35px]'>
                        {massage.map((massages, index) => (
                            <div data-index={index} className="mb-[0.125rem] inline-block min-h-[1.5rem] flex items-center">
                                <input
                                    className="w-[14px] h-[14px]"
                                    type="radio"
                                    name="Massage"
                                    id={massages.id}
                                    value={massages.value} />
                                <label
                                    className="ml-2 inline-block text-[#02227E] text-[18px] font-semibold font-roboto hover:cursor-pointer"
                                    htmlFor={massages.id}
                                >{massages.title}</label>
                            </div>
                        ))}
                    </div>
                </div>
                <p className='text-[#02227E] text-[20px] text-center font-bold font-roboto pt-px pb-2'>Sensual Massage</p>
                <div className='flex justify-center'>
                    <div className='grid grid-cols-2 w-[350px] gap-x-2 sm:gap-x-4 md:gap-x-7 pl-5 mr-[-35px]'>
                        {sensual_massage.map((sm, index) => (
                            <div data-index={index} className="mb-[0.125rem] inline-block min-h-[1.5rem] flex items-center">
                                <input
                                    className="w-[15px] h-[15px]"
                                    type="radio"
                                    name="SensualMassage"
                                    id={sm.id}
                                    value={sm.value} />
                                <label
                                    className="ml-2 inline-block text-[#02227E] text-[18px] font-semibold font-roboto hover:cursor-pointer"
                                    htmlFor={sm.id}
                                >{sm.title} </label>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className='bg-linear-gradient h-[27px]'></div>
            <p className='text-[#02227E] text-[20px] text-center font-bold font-roboto pt-px pb-2'>Completion</p>
            <div className='flex justify-center'>
                <div className='grid grid-cols-2 w-[350px] gap-x-2 sm:gap-x-4 md:gap-x-7 pl-5 mr-[-35px]'>
                    {completion.map((com, index) => (
                        <div data-index={index} className="mb-[0.125rem] inline-block min-h-[1.5rem] flex items-center">
                            <input
                                className="w-[14px] h-[14px]"
                                type="radio"
                                name="Completion"
                                id={com.id}
                                value={com.value} />
                            <label
                                className="ml-2 inline-block text-[#02227E] text-[18px] font-semibold font-roboto hover:cursor-pointer"
                                htmlFor={com.id}
                            >{com.title}</label>
                        </div>
                    ))}
                </div>
            </div>
            <div className='flex justify-center pt-5'>
                <Link to="/additional-services" className='bg-[#02227E] text-[20px] text-[#fff] font-bold font-roboto py-1 px-3 rounded-xl w-fit'>Additional Services</Link>
            </div>

            <AdditionalServices/>

            <div className='flex justify-center pt-5'>
                <Link to="/personal-information-orientation" className='text-[#02227E] text-[20px] font-bold font-roboto px-5 py-px w-fit bg-[#05B7FD] border-2 border-[#02227E] rounded-xl cursor-pointer'>Search and Save To Favorites</Link>
            </div>
            <div className='flex justify-center pt-5 pb-5'>
                <Link to="" className='text-[#02227E] text-[20px] font-bold font-roboto px-5 py-px w-fit bg-[#05B7FD] border-2 border-[#02227E] rounded-xl cursor-pointer'>Search</Link>
            </div>
        </div>
    )
}

export default MassageServices
