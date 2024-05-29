import React, { useState } from 'react';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import {
  BtnArrow,
  OptionForm,
  SelectText,
  WrapOptions,
  WrapSelect,
} from './Filter.styled';
// import { useSearchParams } from 'react-router-dom';

export default function FilterOrganizer({ organizers }) {
  const [isOpen, setIsOpen] = useState(false);
  const [organizer, setOrganizer] = useState('');

  // const [searchParams, setSearchParams] = useSearchParams();
  // const query = searchParams.get('query');
  // console.log(query);
  console.log(organizer);

  // const handleSelect = evt => {
  //   let item = evt.target.value;
  //   console.log(item);
  //   setOrganizer(item);
  //   setSearchParams({ query: organizer });
  // };
  // const getQuery = () => {
  //   setSearchParams({ query: organizer });
  // };

  return (
    <WrapSelect>
      <SelectText
        type="text"
        id="organizer"
        name="organizer"
        // value={organizer}
        defaultValue={organizer}
        readOnly={organizer}
        // onChange={organizer}
        placeholder="select"
      />
      <BtnArrow onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? (
          <IoIosArrowDown className="icon-arrow" />
        ) : (
          <IoIosArrowUp className="icon-arrow" />
        )}
      </BtnArrow>
      <WrapOptions
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
            // onClick={handleSelect}
          >
            {item}
          </OptionForm>
        ))}
      </WrapOptions>
    </WrapSelect>
  );
}
