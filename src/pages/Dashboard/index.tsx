import ActivityIntake from 'features/Dashboard/ActivityIntake';
import DailyChecklist from 'features/Dashboard/DailyChecklist';
import Diary from 'features/Dashboard/Diary';
import FoodIntake from 'features/Dashboard/FoodIntake';
import HealthSuite from 'features/Dashboard/HealthSuite';
import WaterIntake from 'features/Dashboard/WaterIntake';
import { mobileComponents } from 'features/Dashboard/helpers';

import { useWindowDimensions } from 'hooks/custom/useWindowDimensions';

import MobileComponent from '../../features/Dashboard/MobileComponent';
import { StyledDashboard } from './styles';

export default function Dashboard() {
  const { isTablet } = useWindowDimensions();

  return isTablet ? (
    <div className="max-w-xl lg:max-w-2xl m-auto relative z-20">
      <ul>
        {mobileComponents.map((item) => (
          <MobileComponent key={item.title} item={item} />
        ))}
      </ul>
    </div>
  ) : (
    <StyledDashboard className="relative z-10">
      <div className="card row-span-3 xl:col-span-5 xxl:col-auto">
        <DailyChecklist />
      </div>
      <div className="card row-span-2 xl:col-span-2 xxl:col-auto">
        <FoodIntake />
      </div>
      <div className="card row-span-1 xl:col-span-2 xxl:col-auto">
        <WaterIntake />
      </div>
      <div className="card row-span-2">
        <Diary />
      </div>
      <div className="card xl:col-span-2 xxl:col-auto">
        <ActivityIntake />
      </div>
      <div className="card col-span-3 xl:col-span-5 xxl:col-span-3">
        <HealthSuite />
      </div>
    </StyledDashboard>
  );
}
