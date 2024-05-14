// types.ts
export type Meal = {
  mealName: string;
  mealType: 'breakfast' | 'lunch' | 'dinner' | 'snacks';
  servingSize: string;
  calories: number;
  carbs: number;
  fat: number;
  protein: number;
};

export type MealTime = {
  mealTime: string;
  icon: string;
};

export type MealsData = Meal[];
