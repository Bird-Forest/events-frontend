import React from 'react';
import { WrapCategory } from './Filter.styled';
import FilterOrganizer from './FilterOrganizer';
import FilterSpeciality from './FilterSpeciality';
import { useGetEventsAllQuery } from '../../redux/eventSlice';

function getCategories(items, itemName) {
  if (!items) return [];
  return items.reduce((acc, item) => {
    if (!acc.includes(item[itemName])) acc.push(item[itemName]);
    return acc.sort((a, b) => a.localeCompare(b));
  }, []);
}

export default function FilterCategory() {
  const { data } = useGetEventsAllQuery();
  const organizers = getCategories(data, 'organizer');
  const specialties = getCategories(data, 'title');
  return (
    <WrapCategory>
      <FilterOrganizer organizers={organizers} />
      <FilterSpeciality specialties={specialties} />
    </WrapCategory>
  );
}
