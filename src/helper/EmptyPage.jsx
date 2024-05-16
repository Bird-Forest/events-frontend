import React from 'react';
import { GiSherlockHolmes } from 'react-icons/gi';
import { WrapEmpty } from './Helper.styled';

export default function EmptyPage({ message }) {
  return (
    <WrapEmpty>
      <h2 className="empty-title">{message}</h2>
      <GiSherlockHolmes className="icon-empty" />
    </WrapEmpty>
  );
}
