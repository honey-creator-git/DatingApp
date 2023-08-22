import React from 'react'

const DancerEntertainer = () => {
    const eventsandservicies = [
        {
            'id': 'eventsandservicies1',
            'value': 'Adult industry stars',
            'title': 'Adult industry stars',
            'checked': false
        },
        {
            'id': 'eventsandservicies2',
            'value': 'Bachelor Parties',
            'title': 'Bachelor Parties',
            'checked': false
        },
        {
            'id': 'eventsandservicies3',
            'value': 'Bachelorette Parties',
            'title': 'Bachelorette Parties',
            'checked': false
        },
        {
            'id': 'eventsandservicies4',
            'value': 'Male Review',
            'title': 'Male Review',
            'checked': false
        },
        {
            'id': 'eventsandservicies5',
            'value': 'Boat Party',
            'title': 'Boat Party',
            'checked': false
        },
        {
            'id': 'eventsandservicies6',
            'value': 'Pool Party',
            'title': 'Pool Party',
            'checked': false
        },
        {
            'id': 'eventsandservicies7',
            'value': 'Bottle Services',
            'title': 'Bottle Services',
            'checked': false
        },
        {
            'id': 'eventsandservicies8',
            'value': 'Football Parties',
            'title': 'Football Parties',
            'checked': false
        },
        {
            'id': 'eventsandservicies9',
            'value': 'Erotic Golf Caddies',
            'title': 'Erotic Golf Caddies',
            'checked': false
        },
        {
            'id': 'eventsandservicies10',
            'value': 'Sexy Bartender',
            'title': 'Sexy Bartender',
            'checked': false
        },
        {
            'id': 'eventsandservicies11',
            'value': 'Police Strippers',
            'title': 'Police Strippers',
            'checked': false
        },
        {
            'id': 'eventsandservicies12',
            'value': 'Sexy Pizza Delivery',
            'title': 'Sexy Pizza Delivery',
            'checked': false
        },
    ];
    return (
        <div className="main-container-other flex flex-col justify-start">
            <p className='text-[28px] md:text-[36px] text-center text-[#02227E] font-roboto-serif font-bold'>Dancer/Entertainer</p>
            <div className='bg-linear-gradient h-[27px]'></div>
            <div className='flex justify-center items-center max-[320px]:gap-2 gap-5 md:gap-7 py-2'>
                <div className="mb-[0.125rem] inline-block min-h-[1.5rem] flex items-center">
                    <input
                        className="w-[20px] h-[20px]"
                        type="radio"
                        name="dancerentertainer"
                        id="dancerentertainer1"
                        value="Dancer" />
                    <label
                        className="ml-2 inline-block text-[#02227E] text-[24px] font-bold font-roboto-serif hover:cursor-pointer"
                        htmlFor="dancerentertainer1"
                    >Dancer</label>
                </div>
                <div className="mb-[0.125rem] inline-block min-h-[1.5rem] flex items-center">
                    <input
                        className="w-[20px] h-[20px]"
                        type="radio"
                        name="dancerentertainer"
                        id="dancerentertainer2"
                        value="StripClub" />
                    <label
                        className="ml-2 inline-block text-[#02227E] text-[24px] font-bold font-roboto-serif hover:cursor-pointer"
                        htmlFor="dancerentertainer2"
                    >Strip Club</label>
                </div>
            </div>
            <div className='bg-linear-gradient h-[27px]'></div>
            <div>
                <p className='text-center text-[#02227E] text-[24px] font-bold font-roboto-serif'>Events and Servicies</p>
                <div className='w-full flex justify-center p-[10px_0px_40px_0px]'>
                    <div className='w-fit grid grid-cols-1 sm:grid-cols-2 sm:gap-x-7 sm:gap-y-2 md:grid-cols-3 md:gap-x-10 items-start'>
                        {eventsandservicies.map((de, index) => (
                            <div data-index={index} className="mb-[0.125rem] inline-block min-h-[1.5rem] flex items-center">
                                <input
                                    className="w-[15px] h-[15px]"
                                    type="radio"
                                    name="eventsandservicies"
                                    id={de.id}
                                    value={de.value} />
                                <label
                                    className="ml-2 inline-block text-[#000] text-[15px] font-bold font-roboto-serif hover:cursor-pointer"
                                    htmlFor={de.id}
                                >{de.title}</label>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DancerEntertainer
