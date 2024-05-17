import React from 'react';
import { WrapEmpty } from './Helper.styled';
import { GiSpiderWeb } from 'react-icons/gi';

export default function EmptyPage({ message }) {
  return (
    <WrapEmpty>
      <GiSpiderWeb className="icon-empty" />
      <h2 className="empty-title">{message}</h2>
    </WrapEmpty>
  );
}
