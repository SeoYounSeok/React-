import React, { useState } from 'react';
import moment from 'moment'
import './seo-calendar.scss';
import CalendarHeader from './components/Calendar-Header';

const SeoCalendar = () => {
  const [selectDate, setSelectDate] = useState(moment().toDate());
  return (
    <div>
    <div className={`seo-calendar-container salmon-theme`}>
      <CalendarHeader selectDate={selectDate}/>
    </div>
    </div>
  );
};
export default SeoCalendar;