import React, { useRef } from 'react';
import { WrapGoBack, WrapPage } from './Page.styled';
import Loading from 'helper/Loading';
import { Link, useLocation } from 'react-router-dom';
import { WrapCharts } from 'components/charts/Chart.styled';
import ChartsOrganizer from 'components/charts/ChartsOrganizer';
import ChartsSpeciality from 'components/charts/ChartsSpeciality';
import { useGetEventsAllQuery } from '../redux/EventSlice';
import { useTranslation } from 'react-i18next';

export default function ChartPage() {
  const { t } = useTranslation();
  const location = useLocation();
  const backHref = useRef(location.state?.from ?? '/');
  const { data, isLoading } = useGetEventsAllQuery();

  return (
    <WrapPage>
      <WrapGoBack>
        <Link to={backHref.current} className="back">
          {t('back')}
        </Link>
      </WrapGoBack>
      {isLoading ? (
        <Loading />
      ) : (
        <WrapCharts>
          <ChartsOrganizer data={data} />
          <ChartsSpeciality data={data} />
        </WrapCharts>
      )}
    </WrapPage>
  );
}
