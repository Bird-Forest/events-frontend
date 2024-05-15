import React from 'react';
import {
  ItemDate,
  ItemDescript,
  ItemLink,
  ItemOrgn,
  ItemTitle,
  ItemWrap,
  WrapDate,
  WrapLink,
  WrapTime,
} from './Event.styled';

export default function Event({ item }) {
  const dateObj = new Date(item.data);
  const date = dateObj.toLocaleDateString();
  const hours = dateObj.getUTCHours();
  const minutes = dateObj.getMinutes();

  return (
    <ItemWrap>
      <ItemTitle>{item.title}</ItemTitle>
      <WrapDate>
        <ItemOrgn> {item.organizer}</ItemOrgn>
        <ItemDate>{date}</ItemDate>
        <WrapTime>
          <ItemDate>{hours}</ItemDate>
          <ItemDate>{':'}</ItemDate>
          <ItemDate>{minutes}</ItemDate>
        </WrapTime>
      </WrapDate>
      <ItemDescript>{item.description}</ItemDescript>
      <WrapLink>
        <ItemLink>Register</ItemLink>
        <ItemLink>View</ItemLink>
      </WrapLink>
    </ItemWrap>
  );
}
