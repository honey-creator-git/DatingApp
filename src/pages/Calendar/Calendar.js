import React, {Children, cloneElement, useState} from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import { useNavigate } from "react-router-dom";

// import React from "react";
// import { Calendar, momentLocalizer } from "react-big-calendar";
// import moment from "moment";
// import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";
// import "react-big-calendar/lib/addons/dragAndDrop/styles.css";
// import "react-big-calendar/lib/css/react-big-calendar.css";

import Button from "../../components/Button";
import Modal from 'react-modal';
import DatePicker from "react-datepicker";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-regular-svg-icons";
import { Select, MenuItem } from "@mui/material";
import "react-datepicker/dist/react-datepicker.css";
import "react-big-calendar/lib/css/react-big-calendar.css";

const locales = {
    "en-US": require("date-fns/locale/en-US")
};
const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales
});
const myEventsList = [
    {
      'title': 'All Day Event very long title',
      'allDay': true,
      'start': new Date(2023, 6, 0),
      'end': new Date(2023, 6, 1)
    },
    {
      'title': 'Long Event',
      'start': new Date(2023, 6, 7),
      'end': new Date(2023, 6, 10)
    },
  
    {
      'title': 'DTS STARTS',
      'start': new Date(2023, 6, 13, 0, 0, 0),
      'end': new Date(2023, 6, 20, 0, 0, 0)
    },
  
    {
      'title': 'DTS ENDS',
      'start': new Date(2023, 6, 6, 0, 0, 0),
      'end': new Date(2023, 6, 13, 0, 0, 0)
    },
  
    {
      'title': 'Some Event',
      'start': new Date(2023, 6, 9, 0, 0, 0),
      'end': new Date(2023, 6, 9, 0, 0, 0)
    },
    {
      'title': 'Conference',
      'start': new Date(2023, 6, 11),
      'end': new Date(2023, 6, 13),
      desc: 'Big conference for important people'
    },
    {
      'title': 'Meeting',
      'start': new Date(2023, 6, 12, 10, 30, 0, 0),
      'end': new Date(2023, 6, 12, 12, 30, 0, 0),
      desc: 'Pre-meeting meeting, to prepare for the meeting'
    },
    {
      'title': 'Lunch',
      'start': new Date(2023, 6, 12, 12, 0, 0, 0),
      'end': new Date(2023, 6, 12, 13, 0, 0, 0),
      desc: 'Power lunch'
    },
    {
      'title': 'Meeting',
      'start': new Date(2023, 6, 12, 14, 0, 0, 0),
      'end': new Date(2023, 6, 12, 15, 0, 0, 0)
    },
    {
      'title': 'Happy Hour',
      'start': new Date(2023, 6, 12, 17, 0, 0, 0),
      'end': new Date(2023, 6, 12, 17, 30, 0, 0),
      desc: 'Most important meal of the day'
    },
    {
      'title': 'Dinner',
      'start': new Date(2023, 6, 12, 20, 0, 0, 0),
      'end': new Date(2023, 6, 12, 21, 0, 0, 0)
    },
    {
      'title': 'Birthday Party',
      'start': new Date(2023, 3, 13, 7, 0, 0),
      'end': new Date(2023, 3, 13, 10, 30, 0)
    },
    {
      'title': 'Birthday Party 2',
      'start': new Date(2023, 6, 13, 7, 0, 0),
      'end': new Date(2023, 6, 13, 10, 30, 0)
    },
    {
      'title': 'Birthday Party 3',
      'start': new Date(2023, 6, 13, 7, 0, 0),
      'end': new Date(2023, 6, 13, 10, 30, 0)
    },
    {
      'title': 'Late Night Event',
      'start': new Date(2023, 6, 17, 19, 30, 0),
      'end': new Date(2023, 6, 18, 2, 0, 0)
    },
    {
      'title': 'Multi-day Event',
      'start': new Date(2023, 6, 20, 19, 30, 0),
      'end': new Date(2023, 6, 22, 2, 0, 0)
    }
]

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      backgroundColor: '#3760CB',
      width: '90vw',
      height: '421px',
      zIndex: 20,
      borderRadius: '30px',
      border: '2px solid black',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'start',
      padding: '20px 15px',
      overflow: 'auto',
    },
};

// const localizer = momentLocalizer(moment);
// const DnDCalendar = withDragAndDrop(Calendar);

const TouchCellWrapper = ({ children, value, onSelectSlot }) =>
  cloneElement(Children.only(children), {
    onTouchEnd: () => onSelectSlot({ action: "click", slots: [value] }),
    style: {
      className: `${children}`
    }
});

Modal.setAppElement('#root');

export default function CalendarSchedules() {
    const [isOpen, setIsOpen ] = useState(false);
    const [startDate, setStartDate] = useState(new Date());
    const [status, setStatus] = useState(2);
    const navigate = useNavigate();
    // let events = [{ start: new Date(), end: new Date(), title: "special event" }];
    // const onEventResize = (data) => {
    //     console.log("Event Resize => ", data);
    //     const { start, end } = data;
    //     events[0].start = start;
    //     events[0].end = end;
    //     return {events: events};
    // };
    // const onEventDrop = (data) => {
    //     console.log(data);
    // };
    const onSelectSlot = ({ action, slots /*, ...props */ }) => {
      if (action === "click") {
        console.log("click");
      }
      return false;
    };
    const handleSelectEvent = (props) => {
      console.log("Handle for Selection of Event => ", props);
      openModal();
    }
    const openModal = () => {
      setIsOpen(true);
    }
    const closeModal = () => {
      setIsOpen(false);
    }
    const navigateToSchedule = () => {
      navigate("/schedule");
    }
    const CustomInput = (props) => {
        return (
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                onClick={props.onClick}
                value={props.value}
                onChange={props.onChange}
              />
              <div className="input-group-append">
                <span className="input-group-text">
                  <FontAwesomeIcon icon={faCalendar} />
                </span>
              </div>
            </div>
        );
    }
    return (
        <div className='main-container'>
            <div className='w-full mx-auto flex flex-col justify-center items-center pt-6'>
                <div className="w-full mx-auto flex flex-row justify-center items-center">
                    <div className=''><button><div className='w-[50px] h-[50px] rounded-full bg-white flex justify-center items-center'><img src={process.env.PUBLIC_URL + '/images/CalendarBurger.png'} alt="Calendar Burger" /></div></button></div>
                    <div className='w-full mx-auto flex flex-col justify-center items-center'>
                        <div className='w-full mx-auto flex justify-center items-center'><img src={process.env.PUBLIC_URL + '/images/CalendarSugar.png'} alt="Calendar Sugar" className='mr-2' /><span className='font-bold text-[18px] text-white'>Sugar ID</span><span className='font-normal text-[18px] text-white'># </span><span className='font-bold text-[18px] text-white ml-2'>87UY895</span></div>
                        <div><span className='font-bold text-[18px] text-white'>MY VAI</span><span className='font-normal text-[18px] text-white'>RIFY </span><span className='font-bold text-[18px] text-white'> CALENDAR</span></div>   
                    </div>
                </div>
                <div className='w-[100vw] h-[2px] bg-white mt-6'></div>
                <div className="mt-6 bg-white">
                    <Calendar
                        components={{
                            dateCellWrapper: (props) => (
                            <TouchCellWrapper {...props} onSelectSlot={onSelectSlot} />
                            )
                        }}
                        localizer={localizer}
                        events={myEventsList}
                        startAccessor="start"
                        endAccessor="end"
                        style={{ height: 650 }}
                        resizable
                        selectable
                        onSelectSlot={onSelectSlot}
                        onSelectEvent={event => handleSelectEvent(event)}
                    />
                    {/* <DnDCalendar
                        defaultDate={moment().toDate()}
                        defaultView="month"
                        events={events}
                        localizer={localizer}
                        onEventDrop={onEventDrop}
                        onEventResize={onEventResize}
                        resizable
                        style={{ height: "100vh" }}
                    /> */}
                    <Modal
                        isOpen={isOpen}
                        onRequestClose={closeModal}
                        style={customStyles}
                        contentLabel="Example Modal"
                    >
                        <div className="w-full mx-auto flex flex-col justify-start items-center">
                            <div className="w-full mx-auto flex flex-row justify-start items-center px-8">
                                <div className="flex flex-col justify-center items-start"><div><span className="font-bold text-[18px] text-white">Appt ID# 87UY895</span></div><div><span className="font-bold text-[18px] text-white">Escort</span></div></div>
                                <div className="ml-8 w-[100px]">
                                    <Select value={status} className="w-[90px] h-[43px] flex justify-center items-center select-radius bg-white" >
                                        <MenuItem onClick={() => setStatus(1)} value={1}><div className="mx-auto flex justify-center items-center w-[19px] h-[19px] rounded-full bg-red-600"></div></MenuItem>
                                        <MenuItem onClick={() => setStatus(2)} value={2}><div className="mx-auto flex justify-center items-center w-[19px] h-[19px] rounded-full bg-green-600"></div></MenuItem>
                                        <MenuItem onClick={() => setStatus(3)} value={3}><div className="mx-auto flex justify-center items-center w-[19px] h-[19px] rounded-full bg-yellow-600"></div></MenuItem>
                                        <MenuItem onClick={() => setStatus(4)} value={4}><div className="mx-auto flex justify-center items-center w-[19px] h-[19px] rounded-full bg-blue-600"></div></MenuItem>
                                        <MenuItem onClick={() => setStatus(5)} value={5}><div className="mx-auto flex justify-center items-center w-[19px] h-[19px] rounded-full bg-black"></div></MenuItem>
                                    </Select>
                                </div>
                            </div>
                            <div className="w-full mx-auto h-[3px] bg-[#F5F6F7] mt-6"></div>
                            <div className="w-full mx-auto flex flex-row justify-start items-center px-8 py-6">
                                <button><div className="flex justify-start items-center"><img src={process.env.PUBLIC_URL + '/images/CalendarModalLocation.png'} alt="Calendar Modal Location" /></div></button>
                                <div className="ml-6"><span className="font-bold text-[16px] text-white">Incall</span></div>
                            </div>
                            <div className="w-full mx-auto h-[3px] bg-[#F5F6F7]"></div>
                            <div className="w-full mx-auto flex flex-row justify-between items-center relative px-7 py-6">
                                <DatePicker
                                    showIcon                                    
                                    showTimeSelect
                                    dateFormat="P"   
                                    selected={startDate}
                                    onChange={(date) => setStartDate(date)}
                                    customInput={<CustomInput  />}
                                />
                                <div className="calendar-picker-divider"></div>
                                <DatePicker
                                    showIcon
                                    showTimeSelect
                                    dateFormat="p"              
                                    selected={startDate}
                                    onChange={(date) => setStartDate(date)}
                                    customInput={<CustomInput  />}
                                />
                            </div>
                            <div className="w-full mx-auto h-[3px] bg-[#F5F6F7]"></div>
                            <div className="w-full mx-auto flex flex-row justify-start items-center relative px-7 py-6">
                                <img src={process.env.PUBLIC_URL + '/images/CalendarPersons.png'} alt="Calendar Persons" />
                                <span className="ml-6 font-bold text-[16px] text-white">Poppa Murphy #87UY89 Escort-Xtra ,Msog,GFE</span>
                            </div>
                            <div className="w-full mx-auto h-[3px] bg-[#F5F6F7]"></div>
                            <div className="w-full mx-auto flex flex-row justify-start items-center relative px-7 py-6">
                                <img src={process.env.PUBLIC_URL + '/images/CalendarEditIcon.png'} alt="Calendar Edit Icons" />
                                <span className="ml-6 font-bold text-[16px] text-white">Regular Wear Heels</span>
                            </div>
                            <div className="w-full mx-auto flex flex-row justify-between items-center px-10 py-4">
                                <Button onClick={() => navigateToSchedule()} className={'font-exrabold text-[16x] text-[#02227E] px-6'} text="View/Edit Appointment" />
                                <Button onClick={() => setIsOpen(false)} className={'font-exrabold text-[16x] text-[#02227E] px-6 ml-4'} text="Back to Calendar" />
                            </div>
                        </div>
                    </Modal>
                </div>
                <div className="mt-6 w-[218px]">
                    <Button text="Calendar" className='font-bold text-[23.4px] text-[#040C50]'/>
                </div>
            </div>
        </div>
    )
}