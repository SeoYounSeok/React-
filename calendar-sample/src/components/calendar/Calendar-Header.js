import React from 'react';
import moment from 'moment'

const CalendarHeader = ({ selectDate }) => {
  return (
    <div className="bae-calendar-header">
      <div className="left-container">
        <h1>{moment(selectDate).format('dddd')}</h1>
        <h1>{moment(selectDate).format('MMMM Do')}</h1>
      </div>
      <div className="right-container">
        <h3>{moment(selectDate).year()}</h3>
      </div>
    </div>
  );
};
export default CalendarHeader;