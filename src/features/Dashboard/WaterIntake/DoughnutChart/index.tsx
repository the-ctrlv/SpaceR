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
        labels: ['Drank today', 'Total drank', 'Residual'],
        datasets: [
          {
            data: [2, 22, 18],
            backgroundColor: [
              colors.violet as string,
              '#8890BA',
              colors.spaceBlue as string,
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
