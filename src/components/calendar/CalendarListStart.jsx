import React, { useState } from 'react';
import { format } from 'date-fns';
import { Days, Panel, Week, WrapDays, WrapMonth } from './Calendar.styled';
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl';
import { period } from './date';
import { nanoid } from '@reduxjs/toolkit';
import { useTranslation } from 'react-i18next';
import { enGB, uk } from 'date-fns/locale';

export default function CalendarListStart({ handleStartDateChange }) {
  const [index, setIndex] = useState(1);
  const { t, i18n } = useTranslation();

  const lng = i18n.language;
  const locales = { enGB, uk };

  const getLocale = () => {
    if (lng === 'en') {
      return locales.enGB;
    }
    return locales.uk;
  };
  const locLng = getLocale();

  // ** функция для заполнения дней в календаре
  const getDaysArr = arr => {
    const daysArr = [];
    for (let i = 0; i < arr.length; i++) {
      let item = arr[i];
      let day = format(new Date(item), 'yyyy-MM-dd');
      daysArr.push(day);
    }
    return daysArr;
  };
  // ** массив дней недели
  const week = t('week', { returnObjects: true });

  // ** функция для определения месяцев в периоде
  const getMonthArr = arr => {
    const monthArr = [];
    for (let i = 0; i < arr.length; i++) {
      let item = arr[i];
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
  // ** це робоча змінна
  // const showMonth = months[index - 1];
  // ** встановлений липень, в якому відбуваються події
  const showMonth = months[2];
  const days = getDaysArr(showMonth);

  const monthName = format(new Date(showMonth[20]), 'MMMM, y', {
    locale: locLng,
  });

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
          {week.map(i => (
            <li key={nanoid()} className="week-day">
              {t(`${i}`)}
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
