import React, { useState } from 'react';
import { useGetEventsAllQuery } from '../../redux/EventSlice';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { BiSolidSearchAlt2 } from 'react-icons/bi';
import {
  BtnArrow,
  BtnFilter,
  FilterBar,
  OptionForm,
  SelectData,
  SelectText,
  WrapData,
  WrapFilter,
  WrapList,
  WrapOrganiser,
} from './Filter.styled';

function getCategories(items, itemName) {
  if (!items) return [];
  return items.reduce((acc, item) => {
    if (!acc.includes(item[itemName])) acc.push(item[itemName]);
    return acc.sort((a, b) => a.localeCompare(b));
  }, []);
}

export default function FilterPanel() {
  const [isOpen, setIsOpen] = useState(false);
  const [organizer, setOrganizer] = useState('Select');
  const { data } = useGetEventsAllQuery();
  const organizers = getCategories(data, 'organizer');
  console.log(organizers);
  return (
    <FilterBar>
      <WrapFilter>
        <WrapOrganiser>
          <SelectText
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
              display: isOpen ? 'none' : 'block',
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
        </WrapOrganiser>
        <BtnFilter type="button">
          <BiSolidSearchAlt2 className="icon-search" />
        </BtnFilter>
      </WrapFilter>
      <WrapFilter>
        <WrapData>
          <SelectData type="date" id="date" name="date" value={new Date()} />
        </WrapData>
        <BtnFilter type="button">
          <BiSolidSearchAlt2 className="icon-search" />
        </BtnFilter>
      </WrapFilter>
    </FilterBar>
  );
}
