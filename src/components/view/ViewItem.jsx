import React from 'react';
import { ViewText, WrapItem } from './View.styled';

export default function ViewItem({ item }) {
  return (
    <WrapItem>
      <ViewText>{item.name}</ViewText>
      <ViewText>{item.email}</ViewText>
    </WrapItem>
  );
}
