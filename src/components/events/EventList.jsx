import React, { useState } from 'react';
import Event from './Event';
import {
  BtnPagin,
  ListWrap,
  MainWrap,
  TextWrap,
  WrapBtn,
} from './Event.styled';
import { useGetEventsQuery } from '../../redux/EventSlice';
import Loading from '../../helper/Loading';
import EmptyPage from '../../helper/EmptyPage';
import { nanoid } from '@reduxjs/toolkit';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

export default function EventList({ location }) {
  const [page, setPage] = useState(1);
  const { data, isLoading } = useGetEventsQuery(page);
  const totalItems = 60;
  const limit = 4;
  let totalPage = Math.ceil(totalItems / limit);
  const showArr = Array.isArray(data) && data.length !== 0;
  return (
    <MainWrap>
      {isLoading && <Loading />}
      {showArr ? (
        <>
          <ListWrap>
            {data.map(item => (
              <Event key={nanoid()} item={item} location={location} />
            ))}
          </ListWrap>
          <WrapBtn>
            <BtnPagin onClick={() => setPage(page - 1)} disabled={page === 1}>
              <FaArrowLeft className="btn-icon" />
            </BtnPagin>
            <TextWrap>
              <p className="text">{page}</p>
              <p className="text">/</p>
              <p className="text">{totalPage}</p>
            </TextWrap>
            <BtnPagin
              onClick={() => setPage(page + 1)}
              disabled={page === totalPage}
            >
              <FaArrowRight className="btn-icon" />
            </BtnPagin>
          </WrapBtn>
        </>
      ) : (
        <EmptyPage
          message={'The service is temporarily unavailable. Try later'}
        />
      )}
    </MainWrap>
  );
}
