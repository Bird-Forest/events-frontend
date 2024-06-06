import React from 'react';
import { WrapChartPage } from './Page.styled';
import ChartBar from 'components/charts/ChartBar';
import { useGetEventsAllQuery } from '../redux/eventSlice';
import Loading from 'helper/Loading';

export default function ChartPage() {
  const { data, isLoading } = useGetEventsAllQuery();
  return (
    <WrapChartPage>
      {isLoading ? <Loading /> : <ChartBar data={data} />}
    </WrapChartPage>
  );
}
