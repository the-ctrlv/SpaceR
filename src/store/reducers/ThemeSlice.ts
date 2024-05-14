import { createSlice } from '@reduxjs/toolkit';

interface IThemeState {
  isLightTheme: boolean;
}

const initialState: IThemeState = {
  isLightTheme: true,
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      // eslint-disable-next-line no-param-reassign
      state.isLightTheme = !state.isLightTheme;
    },
  },
});

export default themeSlice.reducer;
