import { createSlice } from '@reduxjs/toolkit'

const authSlice = createSlice({
  name: 'auth',
  initialState : { isLoggedin : false, user: null },
  reducers: {
    login(state, action) {
      state.isLoggedin = true;
      state.user = action.payload.user;
      //console.log(state)
    },
    logout(state) {
      state.isLoggedin = false
      //console.log(state)
    }
  },
});

export const authActions = authSlice.actions;
export default authSlice;


