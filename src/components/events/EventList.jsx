import React, { useState } from 'react';
import { nanoid } from 'nanoid';
// import events from '../../data/events.json';
import Event from './Event';
import { ListWrap } from './Event.styled';
import { useGetEventsQuery } from '../../redux/EventSlice';
import Loading from '../../helper/Loading';
import EmptyPage from '../../helper/EmptyPage';
// import Pagination from 'components/pagination/Pagination';

export default function EventList() {
  const [page, setPage] = useState(1);
  const { data, error, isLoading } = useGetEventsQuery(page);
  console.log(data);
  const totalItems = 60;
  const limit = 4;
  let totalPage = Math.ceil(totalItems / limit);

  // const prevPage = () => {

  //   if (page === 1) return
  //   setPage(page - 1)
  //   useGetEventsQuery(page);
  // }
  //  const nextPage = () => {

  //    if (page < totalPage) {
  //      setPage(page + 1)
  //       useGetEventsQuery(page);
  //    }
  //  };

  return (
    <ListWrap>
      {isLoading ? (
        <Loading />
      ) : (
        <div>
          {data.map(item => (
            <Event key={nanoid()} item={item} />
          ))}
          <button onClick={() => setPage(page - 1)} disabled={page === 1}>
            Previous
          </button>
          <button
            onClick={() => setPage(page + 1)}
            disabled={page === totalPage}
          >
            Next
          </button>
        </div>
      )}
      {error && (
        <EmptyPage
          message={'The service is temporarily unavailable. Try later'}
        />
      )}
    </ListWrap>
  );
}
