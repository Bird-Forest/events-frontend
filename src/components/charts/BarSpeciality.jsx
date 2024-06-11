import React from 'react';
import getCategories from '../../helper/categories';
import { getSpecialityRatings } from './helpers';
import { useTranslation } from 'react-i18next';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { WrapChart } from './Chart.styled';
ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend
);

// export const options = {
//   indexAxis: 'y',
//   elements: {
//     bar: {
//       borderWidth: 1,
//     },
//   },
//   responsive: true,
//   plugins: {
//     legend: {
//       position: 'top',
//       labels: {
//         font: {
//           size: 14,
//         },
//         color: 'rgb(255, 255, 255)',
//       },
//     },
//     title: {
//       display: true,
//       text: 'Registered participants by speciality',
//       color: 'rgb(255, 255, 255)',
//       font: {
//         size: 16,
//       },
//     },
//   },
// };

export default function BarSpeciality({ data }) {
  const { t } = useTranslation();
  const labels = getCategories(data, 'title');
  const ratings = getSpecialityRatings(data, labels);

  const options = {
    indexAxis: 'y',
    elements: {
      bar: {
        borderWidth: 1,
      },
    },
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          font: {
            size: 14,
          },
          color: 'rgb(255, 255, 255)',
        },
      },
      title: {
        display: true,
        text: `${t('chart.title2')}`,
        color: 'rgb(255, 255, 255)',
        font: {
          size: 16,
        },
      },
    },
  };

  const bar = {
    labels,
    datasets: [
      {
        label: `${t('chart.label2')}`,
        data: ratings.map(el => el),
        backgroundColor: '#64dd17',
        borderWidth: 1,
        borderColor: ' #ffffff',
      },
    ],
  };

  return (
    <WrapChart>
      <Bar options={options} data={bar} width="300px" height="450px" />
    </WrapChart>
  );
}
