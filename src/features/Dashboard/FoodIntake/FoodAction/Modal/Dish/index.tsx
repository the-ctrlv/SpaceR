import { useState } from 'react';
import { SlideDown } from 'react-slidedown';
import 'react-slidedown/lib/slidedown.css';
import { Tooltip } from 'react-tooltip';

import SpaceCheckbox from 'components/SpaceCheckbox';

import { ReactComponent as ArrowIcon } from 'assets/icons/arrow-down.svg';
import { ReactComponent as DishIcon } from 'assets/icons/dish.svg';

import { Meal } from '../../../types';
import { StyledDish } from './styles';

export default function Dish({
  meal,
  index,
  dishQuantity,
}: {
  meal: Meal;
  index: number;
  dishQuantity: number;
}) {
  const [isDishChecked, setIsDishChecked] = useState<{
    [key: string]: boolean;
  }>({});
  const [isExpanded, setIsExpanded] = useState<{ [key: string]: boolean }>({});
  const currentDish = `dish-${meal.mealType}-${meal.mealName}`;
  const handleExpand = () => {
    setIsExpanded({
      ...isExpanded,
      [currentDish]: !isExpanded[currentDish],
    });
  };

  return (
    <StyledDish
      className="list-none relative mb-5 last:mb-0"
      key={meal.mealName}
    >
      <div className="w-full flex items-center justify-between">
        <div className="flex flex-grow cursor-pointer">
          <label htmlFor={currentDish} className="pt-2 cursor-pointer">
            <SpaceCheckbox
              id={currentDish}
              name={currentDish}
              className={`me-3 block transition-all duration-200 ${
                isExpanded[currentDish] ? 'opacity-0' : 'opacity-100'
              }`}
              checked={
                isDishChecked[`dish-${meal.mealType}-${meal.mealName}`] || false
              }
              onChange={() =>
                setIsDishChecked({
                  ...isDishChecked,
                  [currentDish]: !isDishChecked[currentDish],
                })
              }
            />
          </label>

          <div
            onClick={() => handleExpand()}
            data-tooltip-id={meal.mealName}
            className={`flex flex-grow dish-wrapper
            ${
              isExpanded[`dish-${meal.mealType}-${meal.mealName}`]
                ? 'rotate'
                : ''
            }`}
          >
            <DishIcon />
            <div className="dish-title-wrapper ms-3 flex flex-col justify-center">
              <h2 className="font-semibold text-lg truncate">
                {meal.mealName}
              </h2>
              <p className="text-sm">
                Serving size:{' '}
                <span className="font-semibold">{meal.servingSize}</span>
              </p>
            </div>
          </div>
        </div>
        <div
          className="flex absolute right-0 top-2"
          onClick={() => handleExpand()}
        >
          <span className="hidden xl:block font-semibold text-lg">{`${
            index + 1
          }/${dishQuantity}`}</span>
          <div
            className={`arrow-wrapper rounded-full h-8 w-8 flex items-center justify-center cursor-pointer
            ms-4 ${isExpanded[currentDish] && 'rotate'}`}
          >
            <ArrowIcon />
          </div>
        </div>
      </div>

      <SlideDown className="w-full">
        {isExpanded[currentDish] ? (
          <ul className="dish-accordion justify-between flex flex-wrap w-full pt-6 pb-3 relative">
            <li className="mb-2">
              <p>Calories:</p>
              <span>{meal.calories}</span>
            </li>
            <li className="mb-2">
              <p>Carbs:</p>
              <span>{meal.carbs}</span>
            </li>
            <li>
              <p>Fat:</p>
              <span>{meal.fat}</span>
            </li>
            <li>
              <p>Protein:</p>
              <span>{meal.protein}</span>
            </li>
          </ul>
        ) : null}
      </SlideDown>
      {isExpanded[currentDish] && (
        <Tooltip id={meal.mealName} place="top" offset={20} delayShow={700}>
          <p className="p-3 text-sm">{meal.mealName}</p>
        </Tooltip>
      )}
    </StyledDish>
  );
}
