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
import { useSelector } from 'react-redux';

import {
  selectOrganizer,
  selectPeriod,
  selectSpeciality,
} from '../../redux/selectors';
import { useTranslation } from 'react-i18next';

export default function EventList() {
  const { t } = useTranslation();
  const [page, setPage] = useState(1);

  const param1 = useSelector(selectOrganizer);
  const param2 = useSelector(selectSpeciality);
  const param3 = useSelector(selectPeriod);

  const { data, isLoading, error } = useGetEventsQuery({
    param1,
    param2,
    param3,
    page,
  });

  const events = data?.result;
  const totalItems = Number(data?.totalItem);
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
              <Event key={nanoid()} item={item} />
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
        <EmptyPage message={t('empty')} />
      )}
      {error && <EmptyPage message={t('message')} />}
    </MainWrap>
  );
}

// const events = res?.result;
