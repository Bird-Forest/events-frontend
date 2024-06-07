import React from 'react';
import { WrapCartSpeciality } from './Chart.styled';
import BarSpeciality from './BarSpeciality';
import CircleSpeciality from './CircleSpeciality';

export default function ChartsSpeciality({ data }) {
  return (
    <WrapCartSpeciality>
      <BarSpeciality data={data} />
      <CircleSpeciality data={data} />
    </WrapCartSpeciality>
  );
}
