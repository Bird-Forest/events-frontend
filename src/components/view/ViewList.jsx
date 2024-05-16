import React from 'react';
import { WrapViewList } from './View.styled';
import ViewItem from './ViewItem';
import { nanoid } from 'nanoid';

export default function ViewList({ data }) {
  const users = data.participants;
  return (
    <WrapViewList>
      {users.map(item => (
        <ViewItem key={nanoid()} item={item} />
      ))}
    </WrapViewList>
  );
}
