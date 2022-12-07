import { createSlice } from "@reduxjs/toolkit";

import {UsersData} from '../FaceData';

export const userSlice = createSlice({
    name: "users",
    initialState: { value: UsersData },
    reducers: {
        addUser: (state, action) =>{
        },
    },
});