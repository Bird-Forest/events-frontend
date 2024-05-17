import React from 'react';
import { WrapViewList } from './View.styled';
import ViewItem from './ViewItem';
import EmptyPage from 'helper/EmptyPage';
import { nanoid } from '@reduxjs/toolkit';

export default function ViewList({ data }) {
  const users = data.participants;
  const showArr = Array.isArray(users) && users.length !== 0;
  return (
    <WrapViewList>
      {showArr ? (
        users.map(item => <ViewItem key={nanoid()} item={item} />)
      ) : (
        <EmptyPage
          message={'The service is temporarily unavailable. Try later'}
        />
      )}
    </WrapViewList>
  );
}
