import React from 'react';
import { WrapPage } from './Page.styled';
import FilterPanel from '../components/filter/FilterPanel';
import { useGetEventsAllQuery } from '../redux/EventSlice';
import { useLocation } from 'react-router-dom';

function getCategories(items, itemName) {
  if (!items) return [];
  return items.reduce((acc, item) => {
    if (!acc.includes(item[itemName])) acc.push(item[itemName]);
    return acc.sort((a, b) => a.localeCompare(b));
  }, []);
}

export default function FilterPage() {
  const location = useLocation();

  const { data } = useGetEventsAllQuery();
  const organizers = getCategories(data, 'organizer');
  return (
    <WrapPage>
      <FilterPanel organizers={organizers} location={location} />
    </WrapPage>
  );
}
