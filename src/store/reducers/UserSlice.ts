/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

import defaultBG from 'assets/images/profile-bg.jpg';

import { User } from 'types';

const initialState: User = {
  avatar: 'https://i.imgur.com/mD71SmE.png',
  bgImage: defaultBG,
  username: 'Emma Jackson',
  email: 'emma_jackson@gmail.com',
  phone: '1234567890',
  weight: '125',
  height: '5.7',
  age: '25',
  country: 'USA',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    // can create multiple reducers here
    userUpdate: (state, action: { payload: User }) => {
      const { payload } = action;
      state.avatar = payload.avatar;
      state.bgImage = payload.bgImage;
      state.username = payload.username;
      state.email = payload.email;
      state.phone = payload.phone;
      state.weight = payload.weight;
      state.height = payload.height;
      state.age = payload.age;
      state.country = payload.country;
    },
  },
});

export default userSlice.reducer;
