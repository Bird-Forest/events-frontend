import React, { useEffect, useState } from 'react';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
// import { format } from 'date-fns';
// import { lightFormat } from 'date-fns';
import {
  BtnArrow,
  SelectDate,
  WrapDates,
  WrapEnd,
  WrapOptionsDate,
  WrapSelectDate,
  WrapStart,
} from './Filter.styled';
import CalendarListStart from 'components/calendar/CalendarListStart';
import CalendarListSEnd from 'components/calendar/CalendarListEnd';
import { useDispatch } from 'react-redux';
import { savePeriod } from '../../redux/filterSlice';

export default function FilterDate() {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const period = [startDate, endDate];
    dispatch(savePeriod(period));
    return () => {};
  }, [dispatch, startDate, endDate]);

  // const start = format(new Date(startDate), 'yyyy-MM-dd');
  // console.log(start);

  const handleStartDateChange = event => {
    setStartDate(event.target.value);
  };

  const handleEndDateChange = event => {
    setEndDate(event.target.value);
  };

  console.log('START', startDate);
  console.log('END', endDate);

  // const handleSelect = () => {
  //   // Здесь вы можете обработать выбранный период
  //   console.log('Выбранный период:', startDate, endDate);
  // };

  return (
    <WrapSelectDate>
      <WrapStart>
        <WrapDates>
          <SelectDate
            placeholder="from"
            type="text"
            id="start-date"
            defaultValue={startDate}
            readOnly={startDate}
          />
        </WrapDates>
        <WrapOptionsDate
          style={{
            display: !isOpen ? 'none' : 'block',
          }}
        >
          <CalendarListStart handleStartDateChange={handleStartDateChange} />
        </WrapOptionsDate>
      </WrapStart>
      <WrapEnd>
        <WrapDates>
          <SelectDate
            placeholder="to"
            type="text"
            id="end-date"
            defaultValue={endDate}
            readOnly={endDate}
          />
        </WrapDates>
        <BtnArrow onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <IoIosArrowDown className="icon-arrow" />
          ) : (
            <IoIosArrowUp className="icon-arrow" />
          )}
        </BtnArrow>
        <WrapOptionsDate
          style={{
            display: !isOpen ? 'none' : 'block',
          }}
        >
          <CalendarListSEnd handleEndDateChange={handleEndDateChange} />
        </WrapOptionsDate>
      </WrapEnd>
    </WrapSelectDate>
  );
}
