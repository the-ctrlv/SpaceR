import { useState } from 'react';

import { ReactComponent as PlusIcon } from 'assets/icons/plus.svg';

import { MealTime } from '../types';
import ModalFoodAction from './Modal';
import { StyledFoodAction } from './styles';

export default function FoodAction({ mealtime }: { mealtime: MealTime }) {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [foodIntake, setFoodIntake] = useState<number>(0);
  return (
    <>
      <ModalFoodAction
        isOpen={isModalOpen}
        cancel={() => setIsModalOpen(false)}
        foodIntake={foodIntake}
        setFoodIntake={setFoodIntake}
      />
      <StyledFoodAction
        className="flex justify-between rounded-2xl py-5 px-4 list-none cursor-pointer mb-2 last:mb-0"
        onClick={() => setIsModalOpen(true)}
      >
        <div className="flex">
          <img src={mealtime.icon} alt={mealtime.mealTime} />
          <h4 className="font-semibold ms-2">{mealtime.mealTime}</h4>
        </div>
        <div className="flex items-center">
          <span className="block me-2 font-semibold">
            {foodIntake === 0 ? null : foodIntake}
          </span>
          <PlusIcon />
        </div>
      </StyledFoodAction>
    </>
  );
}
