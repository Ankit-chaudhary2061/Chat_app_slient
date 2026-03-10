import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Status } from "../../types/global-type";
import { FriendRequest, User, UserState } from "./user-slice-types";


const initialState: UserState = {
  currentUser: null,
  friends: [],
  recommendedUsers: [],
  friendRequests: [],
  loading: Status.IDLE,

};

const userSlice = createSlice({
    name:'user',
    initialState,
    reducers :{
        setCurrentUser(state:UserState, action:PayloadAction<User>){
            state.currentUser = action.payload
        },
        setFriends(state:UserState, action: PayloadAction<User[]>) {
      state.friends = action.payload;
    },
    setRecommendedUsers(state:UserState, action: PayloadAction<User[]>) {
      state.recommendedUsers = action.payload;
    },
    setFriendRequests(state:UserState, action: PayloadAction<FriendRequest[]>) {
      state.friendRequests = action.payload;
    },
    setLoading(state:UserState, action : PayloadAction<Status>){
        state.loading = action.payload
    }
    }

})



export const {
  setCurrentUser,
  setLoading,

  setFriends,
  setRecommendedUsers,
  setFriendRequests,

} = userSlice.actions;

export default userSlice.reducer;

export function fetchFriends(){
    return async function fetchFriendsThunk( dispatch:)
}




