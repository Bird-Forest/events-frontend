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
  const { t, i18n } = useTranslation();
  const arr = i18n.store.data.en.translation.listDescript;
  const lng = i18n.language;

  const id = item._id;
  const dateObj = new Date(item.date);
  const date = dateObj.toLocaleDateString();

  function translateContent(t) {
    if (lng !== 'uk') {
      const elem = arr.find(el => el.id === id);
      return t(`${elem.description}`);
    }
    return item.description;
  }
  const translatedDescription = translateContent(t);

  return (
    <ItemWrap>
      <WrapDate>
        <ItemOrgn> {item.organizer}</ItemOrgn>
        <ItemDate>{date}</ItemDate>
      </WrapDate>
      <ItemTitle>{item.title}</ItemTitle>
      <ItemDescript>{translatedDescription}</ItemDescript>
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
