import React, { useRef } from 'react';
import { WrapAuthPage } from './Page.styled';
import Registration from 'components/registration/Registration';
import { Link, useLocation, useParams } from 'react-router-dom';
import Loading from 'helper/Loading';
import { useGetEventByIdQuery } from '../redux/eventSlice';
import EmptyPage from 'helper/EmptyPage';
import { WrapGoBack } from 'components/registration/Register.styled';

export default function RegisterPage() {
  const location = useLocation();
  const backHref = useRef(location.state?.from ?? '/');

  const params = useParams();
  const id = params.id;
  const { data, error, isLoading } = useGetEventByIdQuery(id);
  return (
    <WrapAuthPage>
      <WrapGoBack>
        <Link to={backHref.current} className="back">
          Go Back
        </Link>
      </WrapGoBack>
      {isLoading ? <Loading /> : <Registration data={data} id={id} />}
      {error && (
        <EmptyPage message={'The service is temporarily unavailable.'} />
      )}
    </WrapAuthPage>
  );
}
