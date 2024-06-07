import React from 'react';
import { format } from 'date-fns';
import { Days, Week, WrapDays } from './Calendar.styled';
import { nanoid } from '@reduxjs/toolkit';

export default function CalendarMonth({ month, handleSelect }) {
  const getDaysArr = arr => {
    const daysArr = [];
    for (let i = 0; i < arr.length; i++) {
      let item = arr[i];
      daysArr.push(item);
    }
    return daysArr;
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
              onClick={handleSelect}
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
