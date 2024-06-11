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
import { useTranslation } from 'react-i18next';

export default function Event({ item }) {
  const { t } = useTranslation();
  // const eventLng = i18n.language;
  // console.log(eventLng);
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
          <ItemLink>{t('event.auth')}</ItemLink>
        </Link>
        <Link to={`${id}/view`}>
          <ItemLink>{t('event.view')}</ItemLink>
        </Link>
      </WrapLink>
    </ItemWrap>
  );
}
// state={{ from: location }}
