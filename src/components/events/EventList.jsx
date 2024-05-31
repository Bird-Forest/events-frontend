import React, { useState } from 'react';
import Event from './Event';
import {
  BtnPagin,
  ListWrap,
  MainWrap,
  TextWrap,
  WrapBtn,
} from './Event.styled';
import { useGetEventsQuery } from '../../redux/eventSlice';
import Loading from '../../helper/Loading';
import EmptyPage from '../../helper/EmptyPage';
import { nanoid } from '@reduxjs/toolkit';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import {
  selectOrganizer,
  selectPeriod,
  selectSpeciality,
} from '../../redux/selectors';

export default function EventList({ location }) {
  const [page, setPage] = useState(1);

  const param1 = useSelector(selectOrganizer);
  const param2 = useSelector(selectSpeciality);
  const param3 = useSelector(selectPeriod);
  console.log(param1, param2, param3);

  const { data, isLoading } = useGetEventsQuery({ param1, page });

  // const res = data;
  console.log(data);
  const events = data?.result;
  const totalItems = Number(data?.totalItem);
  console.log(totalItems);
  // const totalItems = 60;
  const limit = 4;

  let totalPage = Math.ceil(totalItems / limit);
  const showArr = Array.isArray(events) && events.length !== 0;
  return (
    <MainWrap>
      {isLoading && <Loading />}
      {showArr ? (
        <>
          <ListWrap>
            {events.map(item => (
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
        <EmptyPage message={'The service is temporarily unavailable.'} />
      )}
    </MainWrap>
  );
}

// const events = res?.result;
