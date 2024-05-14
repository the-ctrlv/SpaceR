import { ArcElement, Chart as ChartJS, Tooltip } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { colors } from 'styles/theme';

import { useAppSelector } from 'hooks/store/useAppSelector';

ChartJS.register(ArcElement, Tooltip);

export default function DoughnutChart() {
  const isLightTheme = useAppSelector((state) => state.theme.isLightTheme);

  return (
    <Doughnut
      data={{
        labels: ['Carbs', 'Fat', 'Protein'],
        datasets: [
          {
            data: [49, 26, 25],
            backgroundColor: [
              colors.lightOrange as string,
              colors.orange as string,
              colors.red as string,
            ],
            borderWidth: 1,
            borderColor: [
              isLightTheme ? (colors.modalOverlay as string) : '#fff',
            ],
          },
        ],
      }}
      options={{
        plugins: {
          legend: {
            display: false,
          },
        },
      }}
    />
  );
}
