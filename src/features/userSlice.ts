// userSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserState } from '../types/reduxTypes';

const initialState: UserState = {
    username: '',
    gender: '',
    avatar: ''
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUserData(state, action: PayloadAction<UserState>) {
            return { ...state, ...action.payload };
        },
    },
});


export const { setUserData } = userSlice.actions;
export { userSlice }
