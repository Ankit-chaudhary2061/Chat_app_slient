import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppDispatch } from "../store";
import api from "../../http/api";
import { Status } from "../../types/global-type";
import { ChatState, Conversation, Message } from "./chat-slice-types";



const initialState: ChatState = {
  conversations: [],
  messages: [],
  activeConversation: null,
 status:Status.IDLE
};

const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    setConversations: (state: ChatState, action: PayloadAction<Conversation[]>) => {
      state.conversations = action.payload;
    },

    setMessages: (state: ChatState, action: PayloadAction<Message[]>) => {
      state.messages = action.payload;
    },

    addMessage: (state: ChatState, action: PayloadAction<Message>) => {
      state.messages.push(action.payload);
    },

    setActiveConversation: (state: ChatState, action: PayloadAction<string>) => {
      state.activeConversation = action.payload;
    },

    setLoading: (state: ChatState, action: PayloadAction<Status>) => {
      state.status = action.payload;
    },

    clearMessages: (state) => {
      state.messages = [];
    },

 
    removeMessage: (state: ChatState, action: PayloadAction<string>) => {
      state.messages = state.messages.filter(
        (msg) => msg._id !== action.payload
      );
    },

   
    editMessage: (state: ChatState, action: PayloadAction<Message>) => {
      const index = state.messages.findIndex(
        (msg) => msg._id === action.payload._id
      );

      if (index !== -1) {
        state.messages[index] = action.payload;
      }
    },
  },
});

export const {
  setConversations,
  setMessages,
  addMessage,
  setActiveConversation,
  setLoading,
  clearMessages,
  removeMessage,
  editMessage
} = chatSlice.actions;

export default chatSlice.reducer;


// ========================================
// CREATE CONVERSATION
// ========================================

export function createConversation(data: { receiverId: string }) {
  return async function createConversationThunk(dispatch: AppDispatch) {
    try {
      dispatch(setLoading(Status.SUCCESS));

      const response = await api.post("/conversation", data);

      const conversation = response.data.data;

      dispatch(setActiveConversation(conversation._id));

    } catch (error) {
      console.log("Create conversation error:", error);
    } finally {
      dispatch(setLoading(Status.ERROR));
    }
  };
}


// ========================================
// FETCH CONVERSATIONS
// ========================================

export function fetchConversations() {
  return async function fetchConversationsThunk(dispatch: AppDispatch) {
    try {
      dispatch(setLoading(Status.SUCCESS));

      const response = await api.get("/conversation");

      dispatch(setConversations(response.data.data));

    } catch (error) {
      console.log("Fetch conversations error:", error);
    } finally {
      dispatch(setLoading(Status.SUCCESS));
    }
  };
}


// ========================================
// FETCH MESSAGES
// ========================================

export function fetchMessages(conversationId: string) {
  return async function fetchMessagesThunk(dispatch: AppDispatch) {
    try {
      dispatch(setLoading(Status.SUCCESS));

      const response = await api.get(`/messages/${conversationId}`);

      dispatch(setMessages(response.data.messages));

    } catch (error) {
      console.log("Fetch messages error:", error);
    } finally {
      dispatch(setLoading(Status.ERROR));
    }
  };
}


// ========================================
// SEND MESSAGE
// ========================================

export function sendMessage(conversationId: string, text: string) {
  return async function sendMessageThunk(dispatch: AppDispatch) {
    try {

      const response = await api.post(`/send/${conversationId}`, {
        text,
      });

      dispatch(addMessage(response.data.data));

    } catch (error) {
      console.log("Send message error:", error);
    }
  };
}

// ========================================
// contact list
// ========================================
export function fetchContactlist() {
  return async function fetchContactListThunk(dispatch: AppDispatch) {
    try {
      dispatch(setLoading(Status.SUCCESS));

      const response = await api.get("/chat-partners");

      dispatch(setConversations(response.data.data));

    } catch (error) {
      console.log("Fetch conversations error:", error);
    } finally {
      dispatch(setLoading(Status.SUCCESS));
    }
  };
}
// ========================================
// delete message 
// ========================================
export function deleteMessage(messageId: string) {
  return async function deleteMessageThunk(dispatch: AppDispatch) {
    try {

      dispatch(setLoading(Status.LOADING));

      await api.delete(`/delete/${messageId}`);

      dispatch(removeMessage(messageId));

      dispatch(setLoading(Status.SUCCESS));

    } catch (error) {

      console.log("Delete message error:", error);
      dispatch(setLoading(Status.ERROR));

    }
  };
}
// ========================================
// update message 
// ========================================
export function updateMessage(id: string, text: string) {
  return async function updateMessageThunk(dispatch: AppDispatch) {
    try {

      dispatch(setLoading(Status.LOADING));

      const response = await api.patch(`/update/${id}`, {
        text,
      });

      dispatch(editMessage(response.data.data));

      dispatch(setLoading(Status.SUCCESS));

    } catch (error) {

      console.log("Update message error:", error);
      dispatch(setLoading(Status.ERROR));

    }
  };
}
// ========================================
// seen message 
// ========================================
export function markMessagesSeen(conversationId: string) {
  return async function markMessagesSeenThunk(dispatch: AppDispatch) {
    try {

      await api.patch(`/seen/${conversationId}`);

    } catch (error) {
      console.log("Mark seen error:", error);
    }
  };
}


