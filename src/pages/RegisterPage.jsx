import React, { useRef } from 'react';
import { WrapGoBack, WrapPage } from './Page.styled';
import Registration from 'components/registration/Registration';
import { Link, useLocation, useParams } from 'react-router-dom';
import Loading from 'helper/Loading';
import EmptyPage from 'helper/EmptyPage';
import { useGetEventByIdQuery } from '../redux/EventSlice';
import { useTranslation } from 'react-i18next';

export default function RegisterPage() {
  const { t } = useTranslation();
  const location = useLocation();
  const backHref = useRef(location.state?.from ?? '/');

  const params = useParams();
  const id = params.id;
  const { data, error, isLoading } = useGetEventByIdQuery(id);
  return (
    <WrapPage>
      <WrapGoBack>
        <Link to={backHref.current} className="back">
          {t('back')}
        </Link>
      </WrapGoBack>
      {isLoading ? <Loading /> : <Registration data={data} id={id} />}
      {error && <EmptyPage message={t('message')} />}
    </WrapPage>
  );
}
