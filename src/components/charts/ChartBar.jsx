import React from 'react';
import getCategories from '../../helper/categories';
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
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Chart.js Bar Chart',
    },
  },
};
// const range = [
//   1, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95,
//   100,
// ];
// const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export default function ChartBar({ data }) {
  const arr = data;

  const counterUsers = name => {
    // console.log(arr);
    let counter = 0;
    for (const item of arr) {
      if (item.organizer === name) {
        let count = Number(item.participants.length);
        // console.log(count);
        counter += count;
        // console.log(counter);
      }
    }
    return counter;
  };
  const beetroot = counterUsers('Beetroot');
  console.log(beetroot);
  const goit = counterUsers('GoIT');
  console.log(goit);
  const hillel = counterUsers('Hillel');
  console.log(hillel);
  const itstep = counterUsers('IT STEP');
  console.log(itstep);
  const itvdn = counterUsers('ITVDN');
  console.log(itvdn);
  const mate = counterUsers('Mate academy');
  console.log(mate);
  const octen = counterUsers('OKTEN');
  console.log(octen);
  const web = counterUsers('Web Academy');
  console.log(web);

  const range = [beetroot, goit, hillel, itstep, itvdn, mate, octen, web];

  const labels = getCategories(data, 'organizer');
  console.log(labels);

  const bar = {
    labels,
    datasets: [
      {
        label: 'Dataset 1',
        // data: labels.map(() => range.datatype.number({ min: 0, max: 100 })),
        data: range.map(el => el),

        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  };
  return <Bar options={options} data={bar} />;
}
