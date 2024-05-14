import { createSlice } from '@reduxjs/toolkit';

import { INotes } from 'types';

const initialState: INotes[] = [];

export const notesSlice = createSlice({
  name: 'Notes',
  initialState,
  reducers: {
    addNote: (state, action: { payload: INotes }) => {
      state.push(action.payload);
    },
    editNote: (state, action: { payload: INotes }) => {
      const { title, body, image, id } = action.payload;
      const diaryNote = state.find((note) => note.id === id);
      if (diaryNote) {
        diaryNote.image = image;
        diaryNote.title = title;
        diaryNote.body = body;
      }
    },
    deleteNote: (state, action: { payload: { id: string } }) => {
      const { id } = action.payload;
      return state.filter((note) => note.id !== id);
    },
  },
});

export default notesSlice.reducer;
