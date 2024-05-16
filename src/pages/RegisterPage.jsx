import React from 'react';
import { WrapPage } from './Page.styled';
import Registration from 'components/registration/Registration';
import { useParams } from 'react-router-dom';
import Loading from 'helper/Loading';
import { useGetEventByIdQuery } from '../redux/EventSlice';
import EmptyPage from 'helper/EmptyPage';

export default function RegisterPage() {
  const params = useParams();
  const id = params.id;
  const { data, error, isLoading } = useGetEventByIdQuery(id);
  return (
    <WrapPage>
      {isLoading ? <Loading /> : <Registration data={data} id={id} />}
      {error && (
        <EmptyPage
          message={'The service is temporarily unavailable. Try later'}
        />
      )}
    </WrapPage>
  );
}
