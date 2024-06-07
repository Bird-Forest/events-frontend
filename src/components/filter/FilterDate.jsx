import React, { useState } from 'react';
import { IoIosArrowDown, IoIosArrowUp, IoMdDoneAll } from 'react-icons/io';
import {
  BtnArrow,
  SelectDateEnd,
  SelectDateStart,
  WrapEnd,
  WrapOptionsDate,
  WrapSelectDate,
  WrapStart,
} from './Filter.styled';
import CalendarListStart from 'components/calendar/CalendarListStart';
import CalendarListSEnd from 'components/calendar/CalendarListEnd';
import { useDispatch } from 'react-redux';
import { savePeriod } from '../../redux/filterSlice';
import Notification from 'helper/Notification';

export default function FilterDate() {
  const [startDay, setStartDay] = useState('');
  const [endDay, setEndDay] = useState('');
  const [period, setPeriod] = useState([]);
  const [isStart, setIsStart] = useState(false);
  const [isEnd, setIsEnd] = useState(false);
  const [note, setNote] = useState(false);
  const dispatch = useDispatch();

  const handleStartDateChange = event => {
    setStartDay(event.target.value);
  };

  const handleEndDateChange = event => {
    setEndDay(event.target.value);
  };

  const getPeriod = () => {
    const startDate = new Date(startDay).toISOString();
    const endDate = new Date(endDay).toISOString();
    if (startDate > endDate) {
      setNote(true);
    }
    setPeriod([startDate, endDate]);

    dispatch(savePeriod(period));
  };

  return (
    <WrapSelectDate>
      <WrapStart>
        <SelectDateStart
          placeholder="from"
          type="text"
          id="start-date"
          defaultValue={startDay}
          readOnly={startDay}
        />
        <BtnArrow onClick={() => setIsStart(!isStart)}>
          {isStart ? (
            <IoIosArrowDown className="icon-arrow" />
          ) : (
            <IoIosArrowUp className="icon-arrow" />
          )}
        </BtnArrow>
        <WrapOptionsDate
          style={{
            display: !isStart ? 'none' : 'block',
          }}
        >
          <CalendarListStart handleStartDateChange={handleStartDateChange} />
        </WrapOptionsDate>
      </WrapStart>
      <WrapEnd>
        <SelectDateEnd
          placeholder="to"
          type="text"
          id="end-date"
          defaultValue={endDay}
          readOnly={endDay}
        />
        <BtnArrow onClick={() => setIsEnd(!isEnd)}>
          {isEnd ? (
            <IoIosArrowDown className="icon-arrow" />
          ) : (
            <IoIosArrowUp className="icon-arrow" />
          )}
        </BtnArrow>
        <BtnArrow onClick={getPeriod}>
          <IoMdDoneAll className="icon-done" />
        </BtnArrow>
        <WrapOptionsDate
          style={{
            display: !isEnd ? 'none' : 'block',
          }}
        >
          <CalendarListSEnd handleEndDateChange={handleEndDateChange} />
        </WrapOptionsDate>
      </WrapEnd>
      {note && (
        <Notification
          message={'Ви не вірно обрали період'}
          onClose={() => setNote(false)}
        />
      )}
    </WrapSelectDate>
  );
}
