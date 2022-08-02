import { createSlice } from '@reduxjs/toolkit';

export const todoSlice = createSlice({
  name: '@TODOS',
  initialState: {
    items: [],
  },
  reducers: {
    addNewItem: (state, action) => {
      return { ...state, items: [...state.item, action.payload] };
    },
  },
});

export const { addNewItem } = todoSlice.actions;
const todoReducers = todoSlice.reducer;

export default todoReducers;
