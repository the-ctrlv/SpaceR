import ActivityIntake from 'features/Dashboard/ActivityIntake';
import DailyChecklist from 'features/Dashboard/DailyChecklist';
import Diary from 'features/Dashboard/Diary';
import FoodIntake from 'features/Dashboard/FoodIntake';
import HealthSuite from 'features/Dashboard/HealthSuite';
import WaterIntake from 'features/Dashboard/WaterIntake';

import { ReactComponent as IconActivityIntake } from 'assets/icons/mob-activity-intake.svg';
import { ReactComponent as IconChecklist } from 'assets/icons/mob-checklist.svg';
import { ReactComponent as IconDiary } from 'assets/icons/mob-diary.svg';
import { ReactComponent as IconFoodIntake } from 'assets/icons/mob-food-intake.svg';
import { ReactComponent as IconHealthSuite } from 'assets/icons/mob-health-suite.svg';
import { ReactComponent as IconWaterIntake } from 'assets/icons/mob-water-intake.svg';

export const mobileComponents = [
  {
    icon: IconChecklist,
    title: 'Daily Checklist',
    component: DailyChecklist,
  },
  {
    icon: IconFoodIntake,
    title: 'Food Intake',
    component: FoodIntake,
  },
  {
    icon: IconWaterIntake,
    title: 'Water Intake',
    component: WaterIntake,
  },
  {
    icon: IconDiary,
    title: 'My Diary',
    component: Diary,
  },
  {
    icon: IconActivityIntake,
    title: 'Activity Intake',
    component: ActivityIntake,
  },
  {
    icon: IconHealthSuite,
    title: 'Health Suite',
    component: HealthSuite,
  },
];
