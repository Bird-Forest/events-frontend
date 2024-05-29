import React from 'react';
import {
  ItemDate,
  ItemDescript,
  ItemLink,
  ItemOrgn,
  ItemTitle,
  ItemWab,
  ItemWrap,
  WrapDate,
  WrapLink,
} from './Event.styled';
import { Link } from 'react-router-dom';

export default function Event({ item, location }) {
  const id = item._id;

  const dateObj = new Date(item.date);
  const date = dateObj.toLocaleDateString();

  return (
    <ItemWrap>
      <WrapDate>
        <ItemOrgn> {item.organizer}</ItemOrgn>
        <ItemDate>{date}</ItemDate>
      </WrapDate>
      <ItemTitle>{item.title}</ItemTitle>
      <ItemDescript>{item.description}</ItemDescript>
      <ItemWab href={item.web} target="_blank" rel="noopener noreferrer">
        {item.web}
      </ItemWab>
      <WrapLink>
        <Link to={`${id}/register`}>
          <ItemLink>Register</ItemLink>
        </Link>
        <Link to={`${id}/view`}>
          <ItemLink>View </ItemLink>
        </Link>
      </WrapLink>
    </ItemWrap>
  );
}
// state={{ from: location }}
