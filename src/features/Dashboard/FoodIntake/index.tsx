import { createPortal } from 'react-dom';
import { Tooltip } from 'react-tooltip';

import ProgressBar from 'components/ProgressBar';
import SpaceTooltip from 'components/SpaceTooltip';

import MEALS_MOCK_DATA from 'data/meals.json';

import { ReactComponent as IconArrow } from 'assets/icons/arrow.svg';
import { ReactComponent as DishIcon } from 'assets/icons/dish.svg';

import { DashboardComponent } from '../types';
import DoughnutChart from './DoughnutChart';
import FoodAction from './FoodAction';
import { MEALTIMELIST } from './helpers';
import { StyledFoodIntake } from './styles';
import { MealsData } from './types';

const mealsData = MEALS_MOCK_DATA as MealsData;

export default function FoodIntake({ cancel }: DashboardComponent) {
  return (
    <StyledFoodIntake className="flex flex-col relative rounded-xl">
      <header className="mb-4 flex items-center justify-between relative">
        <div className="p-5 block xl:hidden" onClick={() => cancel?.()}>
          <IconArrow className="arrow-icon" />
        </div>
        <h3
          className="text-lg font-semibold  absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 xl:relative xl:left-auto
          xl:top-auto xl:transform-none"
        >
          Food Intake
        </h3>
        <SpaceTooltip variant="info-expanded" id="food-info" offset={15}>
          <header>
            <h4>In space, there is no unlimited access to water.</h4>
          </header>
          <div>
            <p>
              Water is strictly limited on the spaceship, so keep an eye on your
              and your crew's water intake so you don't run out of water during
              the test.
            </p>
          </div>
        </SpaceTooltip>
      </header>
      <div className="dashboard-content-wrapper max-w-xl mx-auto w-full  xl:mt-0">
        <div className="progress-wrapper rounded-2xl p-4 mb-4 flex flex-col">
          <div className="pb-3 mb-3 border-solid border-b border-slate-300">
            <ProgressBar value="20" className="mb-2" />
            <div className="w-full flex justify-between">
              <span className="text-sm">16% of RDI</span>
              <span className="text-sm font-semibold">2300 Calories</span>
            </div>
          </div>

          <ul>
            <li className="flex justify-between mb-3 items-center">
              <span className="text-sm">Calories Consumed</span>
              <span className="text-sm font-semibold">380</span>
            </li>
            <li className="flex justify-between items-center">
              <span className="text-sm">Calories Remaining</span>
              <span className="text-sm font-semibold">1200</span>
            </li>
          </ul>
        </div>
        <h3 className="text-lg font-semibold mb-3">Food per day</h3>
        <ul className="mb-4">
          {MEALTIMELIST.map((mealtime) => (
            <FoodAction key={mealtime.mealTime} mealtime={mealtime} />
          ))}
        </ul>
        <h3 className="text-lg font-semibold mb-3">Summary:</h3>
        <div className="summary rounded-2xl p-4 mb-4">
          <div className="flex justify-between items-center w-full pb-5 border-solid border-b border-slate-100">
            <ul>
              <li className="flex items-center">
                <span className="dot" /> <span>Carbs: 49%</span>
              </li>
              <li className="flex items-center">
                <span className="dot" />
                <span className="text-md">Fat: 26%</span>
              </li>
              <li className="flex items-center">
                <span className="dot" /> <span>Protein: 25%</span>
              </li>
            </ul>
            <div className="h-20 w-20 chart-wrapper">
              <DoughnutChart />
            </div>
          </div>
          <ul className="summary-data w-full mt-4">
            <li>
              <p>Protein:</p>
              <span>0g</span>
            </li>
            <li>
              <p>Total Fat:</p>
              <span>0g</span>
            </li>
            <li className="extra">
              <p>Cholesterol</p>
              <span>0mg</span>
            </li>
            <li className="extra">
              <p>Sodium</p>
              <span>0mg</span>
            </li>
            <li>
              <p>Total Carbohydrate:</p>
              <span>0g</span>
            </li>
            <li className="extra">
              <p>Dietary Fiber:</p>
              <span>0g</span>
            </li>
            <li className="extra">
              <p>Sugars:</p>
              <span>0g</span>
            </li>
          </ul>
        </div>

        <h3 className="text-lg font-semibold mb-2">Food supplies:</h3>
        <ul className="food-supplies rounded-2xl p-4 w-full">
          {mealsData.map((meal, index) => (
            <li
              key={meal.mealName}
              className="flex justify-between items-center border-solid border-b border-slate-300 
            last:border-none py-3 first:pt-0 last:pb-0"
              data-tooltip-id={meal.mealName}
            >
              <div
                className="flex items-center"
                style={{
                  width: 'calc(100% - 35px)',
                }}
              >
                <DishIcon />
                <h4 className="ms-3 truncate w-40">{meal.mealName}</h4>
              </div>
              <span className="block">
                {index + 1}/{mealsData.length}
              </span>
              {createPortal(
                <Tooltip
                  id={meal.mealName}
                  place="bottom"
                  offset={10}
                  delayShow={700}
                >
                  <p className="p-3">{meal.mealName}</p>
                </Tooltip>,
                document.body
              )}
            </li>
          ))}
        </ul>
      </div>
    </StyledFoodIntake>
  );
}
