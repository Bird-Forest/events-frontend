import React, { useState } from 'react';
import CalendarMonth from './CalendarMonth';
import { format } from 'date-fns';
import { Panel, WrapMonth } from './Calendar.styled';
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl';
import { period } from './date';

export default function CalendarList() {
  const [index, setIndex] = useState(1);

  const getMonthArr = arr => {
    const monthArr = [];
    for (let i = 0; i < arr.length; i++) {
      let item = arr[i];
      monthArr.push(item);
    }
    return monthArr;
  };
  const months = getMonthArr(period);

  const onChangeValue = value => {
    setIndex(prevIndex => prevIndex + value);
  };
  const total = months.length;
  const showMonth = months[index - 1];

  const monthName = format(new Date(showMonth[20]), 'MMMM, y');

  return (
    <WrapMonth>
      <Panel>
        <button
          disabled={index === 1}
          onClick={() => onChangeValue(-1)}
          className="btn"
        >
          <SlArrowLeft className="icon" />
        </button>
        <h4 className="title">{monthName}</h4>
        <button
          disabled={index === total}
          onClick={() => onChangeValue(+1)}
          className="btn"
        >
          <SlArrowRight className="icon" />
        </button>
      </Panel>
      <CalendarMonth month={showMonth} />
    </WrapMonth>
  );
}
