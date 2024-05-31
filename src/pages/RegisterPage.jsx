import React, { useRef } from 'react';
import { WrapPage } from './Page.styled';
import Registration from 'components/registration/Registration';
import { Link, useLocation, useParams } from 'react-router-dom';
import Loading from 'helper/Loading';
import { useGetEventByIdQuery } from '../redux/eventSlice';
import EmptyPage from 'helper/EmptyPage';

export default function RegisterPage() {
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
          <Registration data={data} id={id} />
        </div>
      )}
      {error && (
        <EmptyPage message={'The service is temporarily unavailable.'} />
      )}
    </WrapPage>
  );
}
