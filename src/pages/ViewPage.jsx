import ViewList from 'components/view/ViewList';
import React from 'react';
import { WrapPage } from './Page.styled';
import { useGetEventByIdQuery } from '../redux/EventSlice';
import Loading from 'helper/Loading';
import EmptyPage from 'helper/EmptyPage';
import { useParams } from 'react-router-dom';

export default function ViewPage() {
  const params = useParams();
  const id = params.id;
  const { data, error, isLoading } = useGetEventByIdQuery(id);
  return (
    <WrapPage>
      {isLoading ? <Loading /> : <ViewList data={data} />}
      {error && (
        <EmptyPage
          message={'The service is temporarily unavailable. Try later'}
        />
      )}
    </WrapPage>
  );
}
