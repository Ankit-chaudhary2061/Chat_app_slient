import { Status } from "../../types/global-type";

export interface NotificationSender {
  _id: string;
  username: string;
  email: string;
}

export interface Notification {
  _id: string;
  sender: NotificationSender;
  recipient: string;
  type: string;
  message: string;
  relatedId?: string;
  read: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface NotificationState {
  notifications: Notification[];
  loading: Status;
}