import React from 'react'

const AdditionalServices = () => {
    const additional_services = [
        {
            'id': 'additionalservices1',
            'value': 'Porn Star Experience',
            'title': 'Porn Star Experience',
            'checked': false
        },
        {
            'id': 'additionalservices2',
            'value': 'French kissing',
            'title': 'French kissing',
            'checked': false
        },
        {
            'id': 'additionalservices3',
            'value': 'Girlfriend Experience',
            'title': 'Girlfriend Experience',
            'checked': false
        },
        {
            'id': 'additionalservices4',
            'value': 'Cunnilingus',
            'title': 'Cunnilingus',
            'checked': false
        },
        {
            'id': 'additionalservices5',
            'value': 'BBBJ',
            'title': 'BBBJ',
            'checked': false
        },
        {
            'id': 'additionalservices6',
            'value': 'CBJ',
            'title': 'CBJ',
            'checked': false
        },
        {
            'id': 'additionalservices7',
            'value': 'Deepthroat',
            'title': 'Deepthroat',
            'checked': false
        },
        {
            'id': 'additionalservices8',
            'value': 'Cum in mouth',
            'title': 'Cum in mouth',
            'checked': false
        },
        {
            'id': 'additionalservices9',
            'value': 'Msog',
            'title': 'Msog',
            'checked': false
        },
        {
            'id': 'additionalservices10',
            'value': 'Swallowing',
            'title': 'Swallowing',
            'checked': false
        },
        {
            'id': 'additionalservices11',
            'value': 'Prostate play',
            'title': 'Prostate play',
            'checked': false
        },
        {
            'id': 'additionalservices12',
            'value': 'Anal',
            'title': 'Anal',
            'checked': false
        },
        {
            'id': 'additionalservices13',
            'value': 'Rimming',
            'title': 'Rimming',
            'checked': false
        },
        {
            'id': 'additionalservices14',
            'value': 'Fingering',
            'title': 'Fingering',
            'checked': false
        },
        {
            'id': 'additionalservices15',
            'value': '4 handed',
            'title': '4 handed',
            'checked': false
        },
        {
            'id': 'additionalservices16',
            'value': 'Pegging',
            'title': 'Pegging',
            'checked': false
        },
        {
            'id': 'additionalservices17',
            'value': 'Kamasutra',
            'title': 'Kamasutra',
            'checked': false
        },
        {
            'id': 'additionalservices18',
            'value': 'Erotic massage',
            'title': 'Erotic massage',
            'checked': false
        },
        {
            'id': 'additionalservices19',
            'value': 'Duo with girl',
            'title': 'Duo with girl',
            'checked': false
        },
        {
            'id': 'additionalservices20',
            'value': 'Couples',
            'title': 'Couples',
            'checked': false
        },
        {
            'id': 'additionalservices21',
            'value': 'Group sexg',
            'title': 'Group sexg',
            'checked': false
        },
        {
            'id': 'additionalservices22',
            'value': 'With 2 men',
            'title': 'With 2 men',
            'checked': false
        },
        {
            'id': 'additionalservices23',
            'value': 'Handjob',
            'title': 'Handjob',
            'checked': false
        },
        {
            'id': 'additionalservices24',
            'value': 'Foot Job',
            'title': 'Foot Job',
            'checked': false
        },
        {
            'id': 'additionalservices25',
            'value': 'Bdsm',
            'title': 'Bdsm',
            'checked': false
        },
        {
            'id': 'additionalservices26',
            'value': 'Foot fetish',
            'title': 'Foot fetish',
            'checked': false
        },
        {
            'id': 'additionalservices27',
            'value': 'Submissive',
            'title': 'Submissive',
            'checked': false
        },
        {
            'id': 'additionalservices28',
            'value': 'Femdom',
            'title': 'Femdom',
            'checked': false
        },
        {
            'id': 'additionalservices29',
            'value': 'Dirty talk',
            'title': 'Dirty talk',
            'checked': false
        },
        {
            'id': 'additionalservices30',
            'value': 'Masturbation',
            'title': 'Masturbation',
            'checked': false
        },
        {
            'id': 'additionalservices31',
            'value': '69 position',
            'title': '69 position',
            'checked': false
        },
        {
            'id': 'additionalservices32',
            'value': 'Cum in face',
            'title': 'Cum in face',
            'checked': false
        },
        {
            'id': 'additionalservices33',
            'value': 'Casual photos',
            'title': 'Casual photos',
            'checked': false
        },
        {
            'id': 'additionalservices34',
            'value': 'Cum on body',
            'title': 'Cum on body',
            'checked': false
        },
        {
            'id': 'additionalservices35',
            'value': 'Golden shower',
            'title': 'Golden shower',
            'checked': false
        },
        {
            'id': 'additionalservices36',
            'value': 'Video with sex',
            'title': 'Video with sex',
            'checked': false
        },
        {
            'id': 'additionalservices37',
            'value': 'Virtual Sessions',
            'title': 'Virtual Sessions',
            'checked': false
        },
        {
            'id': 'additionalservices38',
            'value': 'Only Fans ',
            'title': 'Only Fans ',
            'checked': false
        },
    ];
    return (
        <div className='py-3 py-2'>
            <div className='grid grid-cols-2 md:grid-cols-3 justify-between px-2 py-5 gap-x-2 gap-y-5'>
                {additional_services.map((as, index) => (
                    <div data-index={index} className="mb-[0.125rem] inline-block min-h-[1.5rem] flex items-center max-[320px]:pl-2 pl-5 sm:pl-7 md:pl-10">
                        <input
                            className="w-[14px] h-[14px]"
                            type="radio"
                            name="additionalservices"
                            id={as.id}
                            value={as.value} />
                        <label
                            className="ml-2.5 inline-block text-[#01195C] text-[14px] font-bold font-roboto-serif hover:cursor-pointer whitespace-wrap"
                            htmlFor={as.id}
                        >{as.title}</label>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default AdditionalServices
