import React, { useState } from 'react';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import {
  BtnArrow,
  OptionForm,
  SelectText,
  WrapList,
  WrapOrganizer,
} from './Filter.styled';

export default function FilterSpeciality({ specialties }) {
  const [isOpen, setIsOpen] = useState(false);
  const [speciality, setSpeciality] = useState('select');

  return (
    <WrapOrganizer>
      <SelectText
        type="text"
        id="organizer"
        name="organizer"
        value={speciality}
        readOnly={speciality}
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
        {specialties.map(item => (
          <OptionForm
            key={item}
            value={item}
            className="item-font"
            onClick={() => setSpeciality(item)}
          >
            {item}
          </OptionForm>
        ))}
      </WrapList>
    </WrapOrganizer>
  );
}
