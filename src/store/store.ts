import { combineReducers, configureStore } from '@reduxjs/toolkit';

import NotesSlice from './reducers/NotesSlice';
import ThemeSlice from './reducers/ThemeSlice';
import UserSlice from './reducers/UserSlice';

const rootReducer = combineReducers({
  theme: ThemeSlice,
  notes: NotesSlice,
  user: UserSlice,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = ReturnType<typeof setupStore>['dispatch'];
