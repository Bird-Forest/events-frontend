import React from 'react';
import { WrapCategory } from './Filter.styled';
import FilterOrganizer from './FilterOrganizer';
import FilterSpeciality from './FilterSpeciality';
import getCategories from '../../helper/categories';
import { useGetEventsAllQuery } from '../../redux/EventSlice';

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
