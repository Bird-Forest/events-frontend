import EventList from '../components/events/EventList';
import React from 'react';
import { WrapPage } from './Page.styled';
import { useLocation } from 'react-router-dom';
import FilterPanel from 'components/filter/FilterPanel';
// import { useSearchParams } from 'react-router-dom';

export default function HomePage() {
  const location = useLocation();
  // const [searchParams, setSearchParams] = useSearchParams();
  // const query = searchParams.get('query');

  // const handleSelect = () => {
  //   setSearchParams({ query: organizer });
  // };

  return (
    <WrapPage>
      <FilterPanel />
      <EventList location={location} />
    </WrapPage>
  );
}
