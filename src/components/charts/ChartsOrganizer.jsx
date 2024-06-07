import React from 'react';
import { WrapCartOrganizer } from './Chart.styled';
import BarOrganizer from './BarOrganizer';
import СircleOrganizer from './СircleOrganizer';
export default function ChartsOrganizer({ data }) {
  return (
    <WrapCartOrganizer>
      <BarOrganizer data={data} />
      <СircleOrganizer data={data} />
    </WrapCartOrganizer>
  );
}
