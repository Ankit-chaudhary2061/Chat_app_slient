import { createSlice } from "@reduxjs/toolkit";
import { Status } from "../../types/global-type";
import { AuthState, User } from "./auth-slice-types";


const initialState:AuthState ={
user :{} as User,
status:Status.LOADING
}


const authSlice = createSlice({
    name:'auth',
    initialState,
    reducers:{

    }
})

export default authSlice.reducer