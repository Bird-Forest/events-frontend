import ViewList from 'components/view/ViewList';
import React, { useRef } from 'react';
import { WrapPage } from './Page.styled';
import { useGetEventByIdQuery } from '../redux/EventSlice';
import Loading from 'helper/Loading';
import EmptyPage from 'helper/EmptyPage';
import { Link, useLocation, useParams } from 'react-router-dom';

export default function ViewPage() {
  const location = useLocation();
  const backHref = useRef(location.state?.from ?? '/');

  const params = useParams();
  const id = params.id;
  const { data, error, isLoading } = useGetEventByIdQuery(id);
  return (
    <WrapPage>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="wrap">
          <Link to={backHref.current} className="back">
            Go Back
          </Link>
          <ViewList data={data} />
        </div>
      )}
      {error && (
        <EmptyPage
          message={'The service is temporarily unavailable. Try later'}
        />
      )}
    </WrapPage>
  );
}
