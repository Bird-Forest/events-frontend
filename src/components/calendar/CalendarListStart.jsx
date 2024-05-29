import React, { useState } from 'react';
import { format } from 'date-fns';
import { Days, Panel, Week, WrapDays, WrapMonth } from './Calendar.styled';
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl';
import { period } from './date';
import { nanoid } from '@reduxjs/toolkit';

export default function CalendarListStart({ handleStartDateChange }) {
  const [index, setIndex] = useState(1);

  // ** функция для заполнения дней в календаре
  const getDaysArr = arr => {
    const daysArr = [];
    for (let i = 0; i < arr.length; i++) {
      let item = arr[i];
      // console.log(item);
      // let day = format(new Date(item), 'yyyy, MM, dd');
      let day = format(new Date(item), 'yyyy-MM-dd');
      // console.log(day);
      daysArr.push(day);
    }
    return daysArr;
  };
  // ** массив дней недели
  const week = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];
  // ** функция для определения месяцев в периоде
  const getMonthArr = arr => {
    const monthArr = [];
    for (let i = 0; i < arr.length; i++) {
      let item = arr[i];
      // console.log(item);
      monthArr.push(item);
    }
    return monthArr;
  };
  const months = getMonthArr(period);
  // ** определяет индекс месяца в периоде для показа
  const onChangeValue = value => {
    setIndex(prevIndex => prevIndex + value);
  };
  const total = months.length;
  const showMonth = months[index - 1];
  const days = getDaysArr(showMonth);

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
                onClick={handleStartDateChange}
                className="day"
              >
                {format(new Date(item), 'd')}
              </button>
            </li>
          ))}
        </Days>
      </WrapDays>
    </WrapMonth>
  );
}
