import React, { useState } from 'react';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import {
  BtnArrow,
  OptionForm,
  SelectText,
  WrapList,
  WrapOrganizer,
} from './Filter.styled';

export default function FilterOrganizer({ organizers }) {
  const [isOpen, setIsOpen] = useState(false);
  const [organizer, setOrganizer] = useState('select');

  return (
    <WrapOrganizer>
      <SelectText
        type="text"
        id="organizer"
        name="organizer"
        value={organizer}
        readOnly={organizer}
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
        {organizers.map(item => (
          <OptionForm
            key={item}
            value={item}
            className="item-font"
            onClick={() => setOrganizer(item)}
          >
            {item}
          </OptionForm>
        ))}
      </WrapList>
    </WrapOrganizer>
  );
}
