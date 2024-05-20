import EventList from '../components/events/EventList';
import React from 'react';
import { WrapPage } from './Page.styled';
import { useLocation } from 'react-router-dom';

export default function HomePage() {
  const location = useLocation();

  return (
    <WrapPage>
      <EventList location={location} />
    </WrapPage>
  );
}
