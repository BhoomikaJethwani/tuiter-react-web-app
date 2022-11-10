import { createSlice } from "@reduxjs/toolkit";
import profile from './profile.json';


const profileSlice = createSlice({
    name: 'profile',
    initialState: profile,
    reducers: {
        editProfile(state, action) {
            state.unshift({
                ...action.payload,
                _id: (new Date()).getTime(),
            })
        }

    }
});

export const {editProfile} = profile.actions;
export default profileSlice.reducer;