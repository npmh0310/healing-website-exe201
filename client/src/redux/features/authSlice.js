import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {
    account: {},
    isLogin: false,
};

const authSlice = createSlice({
    name: 'auth',
    initialState: INITIAL_STATE,
    reducers: {
        userLoginSuccess(state, action) {
            state.account = action.payload;
            state.isLogin = true;
        },
        userLogout(state) {
            state.account = null;
            state.isLogin = false;
        }
    }
});

export const { userLoginSuccess, userLogout } = authSlice.actions;

export default authSlice.reducer;