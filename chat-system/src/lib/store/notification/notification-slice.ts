import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Status } from "../../types/global-type";
import { Notification, NotificationState } from "./notification-slice-types";
import { AppDispatch } from "../store";
import api from "../../http/api";

const initialState: NotificationState = {
  notifications: [],
  loading: Status.IDLE,
};

const notificationSlice = createSlice({
  name: "notification",
  initialState,
  reducers: {

    setNotifications(state, action: PayloadAction<Notification[]>) {
      state.notifications = action.payload;
    },

    markNotificationRead(state, action: PayloadAction<string>) {
      const notification = state.notifications.find(
        (n) => n._id === action.payload
      );

      if (notification) {
        notification.read = true;
      }
    },

    markAllNotificationsRead(state) {
      state.notifications.forEach((n) => {
        n.read = true;
      });
    },

    deleteNotification(state, action: PayloadAction<string>) {
      state.notifications = state.notifications.filter(
        (n) => n._id !== action.payload
      );
    },

    setLoading(state, action: PayloadAction<Status>) {
      state.loading = action.payload;
    },
  },
});

export const {
  setNotifications,
  markNotificationRead,
  markAllNotificationsRead,
  deleteNotification,
  setLoading,
} = notificationSlice.actions;

export default notificationSlice.reducer;


// fetch notifications
export function fetchNotifications() {
  return async function fetchNotificationsThunk(dispatch: AppDispatch) {
    try {
      dispatch(setLoading(Status.LOADING));

      const response = await api.get("/notifications");

      dispatch(setNotifications(response.data.data));

      dispatch(setLoading(Status.SUCCESS));
    } catch (error) {
      dispatch(setLoading(Status.ERROR));
    }
  };
}


// mark single notification read
export function readNotification(id: string) {
  return async function readNotificationThunk(dispatch: AppDispatch) {
    try {
      dispatch(setLoading(Status.LOADING));

      await api.put(`/notifications/${id}/read`);

      dispatch(markNotificationRead(id));

      dispatch(setLoading(Status.SUCCESS));
    } catch (error) {
      dispatch(setLoading(Status.ERROR));
    }
  };
}


// mark all notifications read
export function readAllNotifications() {
  return async function readAllNotificationsThunk(dispatch: AppDispatch) {
    try {
      dispatch(setLoading(Status.LOADING));

      await api.put("/notifications/read-all");

      dispatch(markAllNotificationsRead());

      dispatch(setLoading(Status.SUCCESS));
    } catch (error) {
      dispatch(setLoading(Status.ERROR));
    }
  };
}


// delete notification
export function removeNotification(id: string) {
  return async function removeNotificationThunk(dispatch: AppDispatch) {
    try {
      dispatch(setLoading(Status.LOADING));

      await api.delete(`/notifications/${id}`);

      dispatch(deleteNotification(id));

      dispatch(setLoading(Status.SUCCESS));
    } catch (error) {
      dispatch(setLoading(Status.ERROR));
    }
  };
}