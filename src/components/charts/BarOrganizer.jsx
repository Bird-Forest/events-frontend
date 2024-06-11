import React from 'react';
import getCategories from '../../helper/categories';
import { getOrganizerRatings } from './helpers';
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
//       borderWidth: 2,
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
//       text: 'Registered participants by organizer',
//       color: 'rgb(255, 255, 255)',
//       font: {
//         size: 16,
//       },
//     },
//     // options: {
//     //   scales: {
//     //     color: ['#ffffff', '#ffffff'],
//     //     y: {
//     //       color: '#ffffff',
//     //     },
//     //   },
//     // },
//   },
// };

export default function BarOrganizer({ data }) {
  const { t } = useTranslation();
  const labels = getCategories(data, 'organizer');
  const ratings = getOrganizerRatings(data, labels);

  const options = {
    indexAxis: 'y',
    elements: {
      bar: {
        borderWidth: 2,
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
        text: `${t('chart.title1')}`,
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
        label: `${t('chart.label1')}`,
        data: ratings.map(el => el),
        backgroundColor: '#ffb74d',
        borderWidth: 1,
        borderColor: ' #ffffff',
      },
    ],
  };

  return (
    <WrapChart>
      <Bar options={options} data={bar} width="300" height="300" />
    </WrapChart>
  );
}

// CategoryScale,
// LinearScale,

// const counterUsers = name => {
//   let counter = 0;
//   for (const item of arr) {
//     if (item.organizer === name) {
//       let count = Number(item.participants.length);
//       counter += count;
//     }
//   }
//   return counter;
// };
// const beetroot = counterUsers('Beetroot');
// const goit = counterUsers('GoIT');
// const hillel = counterUsers('Hillel');
// const itstep = counterUsers('IT STEP');
// const itvdn = counterUsers('ITVDN');
// const mate = counterUsers('Mate academy');
// const octen = counterUsers('OKTEN');
// const web = counterUsers('Web Academy');
// const range = [beetroot, goit, hillel, itstep, itvdn, mate, octen, web];
