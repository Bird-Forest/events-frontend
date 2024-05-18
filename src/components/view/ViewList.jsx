import React, { useState } from 'react';
import { ViewFilterWrap, WrapViewList } from './View.styled';
import ViewItem from './ViewItem';
import EmptyPage from 'helper/EmptyPage';
import { nanoid } from '@reduxjs/toolkit';
import { BiSolidSearchAlt2 } from 'react-icons/bi';

import {
  BtnFilter,
  SearchInput,
  WrapInput,
  WrapSearch,
} from 'components/filter/Filter.styled';

export default function ViewList({ data }) {
  const [search, setSearch] = useState(null);
  const [users, setUsers] = useState(data.participants);

  const getArr = () => {
    if (search !== null) {
      const arr = users.filter(user =>
        user.name.toLowerCase().includes(search)
      );
      setUsers(arr);
    }
  };

  const showArr = Array.isArray(users) && users.length !== 0;
  return (
    <ViewFilterWrap>
      <WrapSearch>
        <WrapInput>
          <SearchInput
            name="name"
            type="text"
            placeholder="search name ..."
            onChange={evt => setSearch(evt.target.value)}
          />
        </WrapInput>
        <BtnFilter type="button" onClick={getArr}>
          <BiSolidSearchAlt2 className="icon-search" />
        </BtnFilter>
      </WrapSearch>
      <WrapViewList>
        {showArr ? (
          users.map(item => <ViewItem key={nanoid()} item={item} />)
        ) : (
          <EmptyPage
            message={'The service is temporarily unavailable. Try later'}
          />
        )}
      </WrapViewList>
    </ViewFilterWrap>
  );
}
