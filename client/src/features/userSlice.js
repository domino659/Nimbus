import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import useLogin from '../hooks/useLogin';
import useRegister from '../hooks/useRegister';

const initialState = {
  id: '',
  fistName: '',
  lastName: '',
  email: '',
  token: '',
  errorMessage: '',
};

export const loginUser = createAsyncThunk(
  'user/loginUser',
  async (infosConnexion) => {
    const login = useLogin();
    return login(infosConnexion.email, infosConnexion.password).then(
      (res) => res
    );
  }
);

export const registerUser = createAsyncThunk(
  'user/registerUser',
  async (infosRegister) => {
    const register = useRegister();
    return register(
      infosRegister.firstName,
      infosRegister.lastName,
      infosRegister.email,
      infosRegister.password,
      infosRegister.passwordConfirm
    ).then((res) => res);
  }
);

const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    login: (state, action) => {
      console.log(action);
      state.token = action.payload;
    },
    disconnect: (state) => {
      state.token = '';
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.firstName = action.payload.user.firstName;
      state.lastName = action.payload.user.lastName;
      state.token = action.payload.token;
    });
    builder.addCase(registerUser.fulfilled, (state, action) => {
      state.firstName = action.payload.user.firstName;
      state.lastName = action.payload.user.lastName;
      state.token = action.payload.token;
    });
  },
});

export const { increment, login, disconnect } = userSlice.actions;
export default userSlice.reducer;
