import React, { useState } from 'react';
import { nanoid } from 'nanoid';
// import events from '../../data/events.json';
import Event from './Event';
import { ListWrap } from './Event.styled';
import Pagination from 'components/pagination/Pagination';

export default function EventList({ events }) {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 4; // Количество элементов на странице
  const totalCount = 60; // Общее количество элементов

  const handlePageChange = newPage => {
    setCurrentPage(newPage);
    // Здесь вы можете обновить данные, например, загрузить новую порцию данных с сервера
  };

  return (
    <ListWrap>
      {events.map(item => (
        <Event key={nanoid()} item={item} />
      ))}
      <Pagination
        totalCount={totalCount}
        currentPage={currentPage}
        pageSize={pageSize}
        onPageChange={handlePageChange}
      />
    </ListWrap>
  );
}
