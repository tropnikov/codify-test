import React from 'react';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  LogarithmicScale,
} from 'chart.js';

import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Tooltip
);

const options = {
  animation: {
    duration: 2000,
  },
  layout: {
    padding: {
      top: 20,
      bottom: 20,
    },
  },
  plugins: {
    legend: {
      display: false,
      labels: {
        font: {
          family: 'var(--font-manrope)',
        },
      },
    },
    customCanvasBackgroundColor: {
      color: 'lightGreen',
    },
    tooltip: {
      position: 'average',
      xAlign: 'center',
      yAlign: 'bottom',
      backgroundColor: '#65FF8E',
      bodyColor: '#000000',
      displayColors: false,
      padding: { x: 8, y: 0 },
      cornerRadius: 6,
      footerMarginTop: 0,
      footerSpacing: 0,
      boxPadding: 0,
      boxHeight: 24,
      bodyFont: {
        size: '16px',
        weight: '400',
        lineHeight: '24px',
      },
      caretSize: 0,
      callbacks: {
        label: function (context) {
          return context.parsed.y;
        },
        title: function (context) {
          return null;
        },
      },
    },
  },
  scales: {
    x: {
      border: {
        display: false,
      },
      grid: {
        display: false,
      },
      ticks: {
        color: '#000',
        font: {
          size: '20px',
          weight: '400',
          lineHeight: '30px',
        },
        callback: function (value, index, values) {
          if (values && values.length >= 30) {
            return !(value % 5) ? value : null;
          } else return this.getLabelForValue(value);
        },
      },
    },
    y: {
      offset: true,
      min: 0,
      border: {
        display: false,
      },
      grid: {
        display: false,
      },
      beginAtZero: true,
      ticks: {
        color: '#000',
        font: {
          size: '20px',
          weight: '400',
          lineHeight: '30px',
        },
        crossAlign: 'far',

        callback: function (value, index, values) {
          return value.toLocaleString('ru-RU');
        },
        maxTicksLimit: 7,
      },
    },
  },
};

const Charts = ({ data }) => {
  return (
    <div className="w-full h-[400px] flex justify-center bg-graph-bg rounded-[27px]">
      <Bar
        data={{
          labels: data?.labels,
          datasets: [
            {
              data: data?.datasets,
              backgroundColor: '#000AFF',
              borderRadius: 4,
              barThickness: 16,
              borderSkipped: false,
            },
          ],
        }}
        options={options}
      />
    </div>
  );
};

export default Charts;
