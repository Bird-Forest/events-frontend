import React, { useRef } from 'react';
import { WrapGoBack, WrapPage } from './Page.styled';
import { useGetEventsAllQuery } from '../redux/eventSlice';
import Loading from 'helper/Loading';

import { Link, useLocation } from 'react-router-dom';
import { WrapCharts } from 'components/charts/Chart.styled';
import ChartsOrganizer from 'components/charts/ChartsOrganizer';
import ChartsSpeciality from 'components/charts/ChartsSpeciality';

export default function ChartPage() {
  const location = useLocation();
  const backHref = useRef(location.state?.from ?? '/');
  const { data, isLoading } = useGetEventsAllQuery();

  return (
    <WrapPage>
      <WrapGoBack>
        <Link to={backHref.current} className="back">
          Go Back
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
