import React from 'react';
import { useState } from 'react';
import DateRangePicker from '@wojtekmaj/react-daterange-picker';
import '@wojtekmaj/react-daterange-picker/dist/DateRangePicker.css';

export default function CalendarRange() {
  const [value, onChange] = useState([new Date(), new Date()]);
  console.log(value);
  return (
    <div>
      <DateRangePicker onChange={onChange} value={value} />
    </div>
  );
}
