import React from 'react';
import { format } from 'date-fns';
import { Days, Week, WrapDays } from './Calendar.styled';
import { nanoid } from '@reduxjs/toolkit';

export default function CalendarMonth({ month }) {
  const getDaysArr = arr => {
    const daysArr = [];
    for (let i = 0; i < arr.length; i++) {
      let item = arr[i];
      // console.log(item);
      daysArr.push(item);
    }
    return daysArr;
  };

  const handleRange = evt => {
    const start = evt.target.value;
    console.log(start);
  };

  const week = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];
  const days = getDaysArr(month);
  return (
    <WrapDays>
      <Week>
        {week.map(item => (
          <li key={nanoid()} className="week-day">
            {item}
          </li>
        ))}
      </Week>
      <Days>
        {days.map(item => (
          <li key={nanoid()}>
            <button
              type="button"
              value={item}
              onClick={handleRange}
              className="day"
            >
              {format(new Date(item), 'd')}
            </button>
          </li>
        ))}
      </Days>
    </WrapDays>
  );
}
