import React from 'react';
import { useGetEventsAllQuery } from '../../redux/EventSlice';
import { BiSolidSearchAlt2 } from 'react-icons/bi';
import { BtnFilter, FilterBar, WrapFilter } from './Filter.styled';
import FilterOrganizer from './FilterOrganizer';
import FilterSpeciality from './FilterSpeciality';
import FilterDate from './FilterDate';

function getCategories(items, itemName) {
  if (!items) return [];
  return items.reduce((acc, item) => {
    if (!acc.includes(item[itemName])) acc.push(item[itemName]);
    return acc.sort((a, b) => a.localeCompare(b));
  }, []);
}

export default function FilterPanel() {
  const { data } = useGetEventsAllQuery();
  const organizers = getCategories(data, 'organizer');
  const specialties = getCategories(data, 'title');

  return (
    <FilterBar>
      <WrapFilter>
        <FilterOrganizer organizers={organizers} />
        <FilterSpeciality specialties={specialties} />
        <FilterDate />
        <BtnFilter type="button">
          <BiSolidSearchAlt2 className="icon-search" />
        </BtnFilter>
      </WrapFilter>
    </FilterBar>
  );
}
