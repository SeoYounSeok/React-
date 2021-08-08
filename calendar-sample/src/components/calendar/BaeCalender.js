import React, { useState } from 'react';
import moment from 'moment'
// import './bae-calendar.scss';
import CalendarHeader from './Calendar-Header';
const BaeCalendar = () => {
  const [selectDate, setSelectDate] = useState(moment().toDate());
  return (
    <div>
      <CalendarHeader selectDate={selectDate}/>
    </div>
  );
};
export default BaeCalendar;