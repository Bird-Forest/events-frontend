import React from 'react';
import getCategories from '../../helper/categories';
import { getOrganizerRatings } from './helpers';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { WrapChart } from './Chart.styled';

ChartJS.register(ArcElement, Tooltip, Legend);

export const options = {
  responsive: true,
  plugins: {
    height: '650px',
    legend: {
      position: 'top',
      labels: {
        font: {
          size: 14,
        },
        color: 'rgb(255, 255, 255)',
      },
    },
  },
};

export default function СircleOrganizer({ data }) {
  const labels = getCategories(data, 'organizer');
  const ratings = getOrganizerRatings(data, labels);

  const dough = {
    labels,
    datasets: [
      {
        label: 'Organizeries',
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
        ],
        borderWidth: 1,
      },
    ],
  };
  return (
    <WrapChart>
      <Doughnut options={options} data={dough} width="300" height="300" />;
    </WrapChart>
  );
}
