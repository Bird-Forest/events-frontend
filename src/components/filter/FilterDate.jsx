import React, { useState } from 'react';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { BtnArrow, SelectText, WrapList, WrapOrganizer } from './Filter.styled';
import CalendarList from 'components/calendar/CalendarList';

export default function FilterDate() {
  const [isOpen, setIsOpen] = useState(false);
  const [period, setPeriod] = useState([]);

  return (
    <WrapOrganizer>
      <SelectText
        type="text"
        id="organizer"
        name="organizer"
        value={period}
        readOnly={period}
      />
      <BtnArrow onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? (
          <IoIosArrowDown className="icon-arrow" />
        ) : (
          <IoIosArrowUp className="icon-arrow" />
        )}
      </BtnArrow>
      <WrapList
        style={{
          display: !isOpen ? 'none' : 'block',
        }}
      >
        <CalendarList />
        {/* {organizers.map(item => (
          <OptionForm
            key={item}
            value={item}
            className="item-font"
            onClick={() => set(item)}
          >
            {item}
          </OptionForm>
        ))} */}
      </WrapList>
    </WrapOrganizer>
  );
}
