import SpaceButton from 'components/SpaceButton';
import SpaceModal from 'components/SpaceModal';

import MEALS_MOCK_DATA from 'data/meals.json';

import { Meal, MealsData } from '../../types';
import Dish from './Dish';

const mealsData = MEALS_MOCK_DATA as MealsData;

type ModalProps = {
  cancel: () => void;
  isOpen: boolean;
  foodIntake: number;
  setFoodIntake: (value: number) => void;
};

export default function ModalFoodAction({
  cancel,
  isOpen,
  foodIntake,
  setFoodIntake,
}: ModalProps) {
  return (
    <SpaceModal cancel={cancel} isOpen={isOpen}>
      <header className="flex w-full items-center justify-center">
        <h3 className="text-xl font-semibold">Add your food</h3>
      </header>
      <ul
        className="flex flex-col w-full px-2 xl:px-0  xl:w-10/12 mx-auto flex-grow h-full overflow-auto py-8"
        onClick={() => setFoodIntake(foodIntake + 1)}
        style={{
          height: 'calc(100% - 160px)',
        }}
      >
        {mealsData.map((meal: Meal, index: number) => (
          <Dish
            dishQuantity={mealsData.length}
            key={meal.mealName}
            meal={meal}
            index={index}
          />
        ))}
      </ul>
      <div className="w-full flex flex-col md:flex-row md:w-11/12 mx-auto items-center justify-center gap-3 mt-3">
        <SpaceButton
          className="w-full"
          onClick={() => cancel()}
          disabled={foodIntake === 0}
        >
          Save
        </SpaceButton>
        <SpaceButton
          className="w-full"
          variant="outline"
          onClick={() => cancel()}
        >
          Cancel
        </SpaceButton>
      </div>
    </SpaceModal>
  );
}
