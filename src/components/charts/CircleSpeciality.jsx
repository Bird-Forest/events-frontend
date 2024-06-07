import React from 'react';
import getCategories from '../../helper/categories';
import { getSpecialityRatings } from './helpers';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { WrapChart } from './Chart.styled';

ChartJS.register(ArcElement, Tooltip, Legend);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
      labels: {
        font: {
          size: 10,
        },
        color: 'rgb(255, 255, 255)',
      },
    },
  },
};

export default function CircleSpeciality({ data }) {
  const labels = getCategories(data, 'title');
  const ratings = getSpecialityRatings(data, labels);

  const dough = {
    labels,
    datasets: [
      {
        label: 'Specialities',
        data: ratings.map(el => el),
        backgroundColor: [
          '#ffeb3b',
          '#b388ff',
          '#ff8a65',
          '#00e676',
          '#ff80ab',
          '#cfd8dc',
          '#ffb74d',
          '#8c9eff',
          '#ffeb3b',
          '#b388ff',
          '#ff8a65',
          '#00e676',
          '#ff80ab',
          '#cfd8dc',
        ],
        borderWidth: 1,
      },
    ],
  };
  return (
    <WrapChart>
      <Doughnut options={options} data={dough} width="300px" height="450px" />;
    </WrapChart>
  );
}
