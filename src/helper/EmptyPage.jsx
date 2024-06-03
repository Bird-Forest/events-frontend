import React from 'react';
import { WrapEmpty } from './Helper.styled';

export default function EmptyPage({ message }) {
  return (
    <WrapEmpty>
      <h2 className="empty-title">{message}</h2>
    </WrapEmpty>
  );
}
