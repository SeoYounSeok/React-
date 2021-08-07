import React, { useState } from 'react';
import moment from 'moment'
import styled from 'styled-components';

// moment().toDate() : current time

const CalendarHeader = () => {
    const [selectDate, setselectDate] = useState(moment().toDate());
    return <div>
        hello world
    </div>
}

export default CalendarHeader;