import React from 'react';
import { useGetEventsAllQuery } from '../../redux/eventSlice';
import { BtnFilter, WrapBtn, WrapCategory, WrapFilter } from './Filter.styled';
import FilterOrganizer from './FilterOrganizer';
import FilterSpeciality from './FilterSpeciality';
import FilterDate from './FilterDate';
import { FaSearch, FaSearchMinus } from 'react-icons/fa';

function getCategories(items, itemName) {
  if (!items) return [];
  return items.reduce((acc, item) => {
    if (!acc.includes(item[itemName])) acc.push(item[itemName]);
    return acc.sort((a, b) => a.localeCompare(b));
  }, []);
}

export default function FilterPanel({ getParams }) {
  const { data } = useGetEventsAllQuery();
  const organizers = getCategories(data, 'organizer');
  const specialties = getCategories(data, 'title');

  return (
    <WrapFilter>
      <WrapCategory>
        <FilterOrganizer organizers={organizers} getParams={getParams} />
        <FilterSpeciality specialties={specialties} />
      </WrapCategory>
      <FilterDate />
      <WrapBtn>
        <BtnFilter type="button">
          <FaSearch className="icon-search" />
        </BtnFilter>
        <BtnFilter type="button">
          <FaSearchMinus className="icon-search" />
        </BtnFilter>
      </WrapBtn>
    </WrapFilter>
  );
}
