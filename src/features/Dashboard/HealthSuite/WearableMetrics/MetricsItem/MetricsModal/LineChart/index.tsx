import {
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { colors } from 'styles/theme';

import { useAppSelector } from 'hooks/store/useAppSelector';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function LineChart() {
  const isLightTheme = useAppSelector((state) => state.theme.isLightTheme);
  const options = {
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          font: {
            size: 16,
            weight: '400',
          },
          color: isLightTheme ? (colors.themeTextColor as string) : '#fff',
        },
      },
      y: {
        suggestedMin: 30,
        suggestedMax: 200,
        ticks: {
          font: {
            size: 14,
            weight: '400',
          },
          color: isLightTheme ? (colors.themeTextColor as string) : '#fff',
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  const labels = ['January', 'February', 'March', 'April'];

  const data = {
    labels,
    datasets: [
      {
        data: [80, 50, 180, 80],
        borderColor: colors.orange as string,
      },
    ],
  };

  return <Line options={options} data={data} />;
}
