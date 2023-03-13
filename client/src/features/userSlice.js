import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  id: '',
  mail: 'lala',
  password: '',
  token: '',
  errorMessage: '',
  lala: '',
  value: 0,
};

const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
  },
});

export const { increment } = userSlice.actions;
export default userSlice.reducer;
