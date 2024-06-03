import React, { useState } from 'react';
import {
  IoIosArrowDown,
  IoIosArrowUp,
  // IoMdClose,
  IoMdDoneAll,
} from 'react-icons/io';
// import { format } from 'date-fns';
// import { lightFormat } from 'date-fns';
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
  const [isOpen, setIsOpen] = useState(false);
  const [note, setNote] = useState(false);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   const period = [startDate, endDate];
  //   dispatch(savePeriod(period));
  //   return () => {};
  // }, [dispatch, startDate, endDate]);

  // const start = format(new Date(startDate), 'yyyy-MM-dd');
  // console.log(start);

  const handleStartDateChange = event => {
    setStartDay(event.target.value);
  };

  const handleEndDateChange = event => {
    setEndDay(event.target.value);
  };
  // const onClear = () => {
  //   setStartDate('');
  //   setEndDate('');
  // };
  const getPeriod = () => {
    const startDate = new Date(startDay).toISOString();
    const endDate = new Date(endDay).toISOString();
    if (startDate > endDate) {
      setNote(true);
    }

    setPeriod([startDate, endDate]);

    dispatch(savePeriod(period));
  };

  console.log(period);

  return (
    <WrapSelectDate>
      <WrapStart>
        {/* <WrapDates> */}
        <SelectDateStart
          placeholder="from"
          type="text"
          id="start-date"
          defaultValue={startDay}
          readOnly={startDay}
        />
        {/* </WrapDates> */}
        <WrapOptionsDate
          style={{
            display: !isOpen ? 'none' : 'block',
          }}
        >
          <CalendarListStart handleStartDateChange={handleStartDateChange} />
        </WrapOptionsDate>
      </WrapStart>
      <WrapEnd>
        {/* <WrapDates> */}
        <SelectDateEnd
          placeholder="to"
          type="text"
          id="end-date"
          defaultValue={endDay}
          readOnly={endDay}
        />
        {/* </WrapDates> */}
        <BtnArrow onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <IoIosArrowDown className="icon-arrow" />
          ) : (
            <IoIosArrowUp className="icon-arrow" />
          )}
        </BtnArrow>
        <BtnArrow onClick={getPeriod}>
          <IoMdDoneAll className="icon-done" />
        </BtnArrow>
        {/* <BtnArrow onClick={onClear}>
          <IoMdClose className="icon-clear" />
        </BtnArrow> */}
        <WrapOptionsDate
          style={{
            display: !isOpen ? 'none' : 'block',
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
