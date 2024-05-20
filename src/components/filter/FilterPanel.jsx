import React, { useState } from 'react';
import { useGetEventsFilterQuery } from '../../redux/EventSlice';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { BiSolidSearchAlt2 } from 'react-icons/bi';
import {
  BtnArrow,
  BtnFilter,
  FilterBar,
  OptionForm,
  SelectText,
  WrapFilter,
  WrapList,
  WrapOrganizer,
} from './Filter.styled';
import { useSearchParams } from 'react-router-dom';
import FilterList from './FilterList';
import Loading from 'helper/Loading';

export default function FilterPanel({ organizers, location }) {
  const [isOpen, setIsOpen] = useState(false);
  const [organizer, setOrganizer] = useState('select');

  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');

  const { data, isLoading } = useGetEventsFilterQuery(query);

  const handleSelect = () => {
    setSearchParams({ query: organizer });
  };

  return (
    <FilterBar>
      {isLoading && <Loading />}
      <WrapFilter>
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
        <BtnFilter type="button" onClick={handleSelect}>
          <BiSolidSearchAlt2 className="icon-search" />
        </BtnFilter>
      </WrapFilter>
      <FilterList data={data} location={location} />
    </FilterBar>
  );
}
