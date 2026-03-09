import { Status } from "../../types/global-type";

export interface Message {
  _id: string;
  text: string;
  sender: {
    _id: string;
    username: string;
    profileImage?: { url: string };
  };
  image?: {
    url: string;
  };
  createdAt: string;
  seenBy: string[];
}

export interface Conversation {
  conversationId: string;
  user: {
    _id: string;
    username: string;
    profileImage?: { url: string };
  };
  lastMessage?: Message;
}

export interface ChatState {
  conversations: Conversation[];
  messages: Message[];
  activeConversation: string | null;
status:Status
}