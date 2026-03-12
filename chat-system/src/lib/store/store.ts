import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./auth/auths-slice";
import userReducer from "./user/user-slice";
import replyReducer from "./reply/reply-slice";
import notificationReducer from "./notification/notification-slice";
import postReducer from './post/post-slice'
import storyReducer from './story/story-slice'
import commentReducer from './comment/comment-slice'

const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
    reply: replyReducer,
    notification: notificationReducer,
    post:postReducer,
    story:storyReducer,
    comment:commentReducer

  },
});

export default store;


// types for redux
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;