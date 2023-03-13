import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  id: '',
  mail: '',
  password: '',
  token: '',
  errorMessage: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    login: (state) => {
      state.token = 'coucou';
    },
    disconnect: (state) => {
      state.token = '';
    },
  },
});

export const { increment, login, disconnect } = userSlice.actions;
export default userSlice.reducer;
