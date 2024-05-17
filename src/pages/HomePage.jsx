import EventList from '../components/events/EventList';
import React from 'react';
import { WrapPage } from './Page.styled';

export default function HomePage() {
  return (
    <WrapPage>
      <EventList />
    </WrapPage>
  );
}
