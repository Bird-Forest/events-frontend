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

export default function Event({ item, location }) {
  const id = item._id;

  const dateObj = new Date(item.date);
  const date = dateObj.toLocaleDateString();
  const hours = dateObj.getUTCHours();
  const minutes = dateObj.getMinutes();

  return (
    <ItemWrap>
      <WrapDate>
        <ItemOrgn> {item.organizer}</ItemOrgn>
        <ItemDate>{date}</ItemDate>
        <WrapTime>
          <ItemDate>{hours}</ItemDate>
          <ItemDate>{':'}</ItemDate>
          <ItemDate>{minutes}</ItemDate>
        </WrapTime>
      </WrapDate>
      <ItemTitle>{item.title}</ItemTitle>
      <ItemDescript>{item.description}</ItemDescript>
      <WrapLink>
        <ItemLink state={{ from: location }} to={`${id}/register`}>
          Register
        </ItemLink>
        <ItemLink state={{ from: location }} to={`${id}/view`}>
          View
        </ItemLink>
      </WrapLink>
    </ItemWrap>
  );
}
