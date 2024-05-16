import EventList from 'components/events/EventList';
import React from 'react';
import { WrapPage } from './Page.styled';
import { useGetEventsQuery } from '../redux/EventSlice';
import Loading from 'helper/Loading';
import EmptyPage from 'helper/EmptyPage';

export default function HomePage() {
  const { data: events, error, isLoading } = useGetEventsQuery();
  console.log(events);
  return (
    <WrapPage>
      {isLoading ? <Loading /> : <EventList events={events} />}
      {error && (
        <EmptyPage
          message={'The service is temporarily unavailable. Try later'}
        />
      )}
    </WrapPage>
  );
}
