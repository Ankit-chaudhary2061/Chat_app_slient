import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../store/hook";
import { fetchContactlist, selectUser } from "../store/chat/chat-slice";
import { Status } from "../types/global-type";
import UserLoadingSkeleton from "./usewrloadingsekeleton";

const ContactList = () => {
  const dispatch = useAppDispatch();
  const { conversations, status } = useAppSelector((store) => store.chat);

  useEffect(() => {
    dispatch(fetchContactlist());
  }, [dispatch]);

  if (status === Status.LOADING) return <UserLoadingSkeleton />;

  if (!conversations.length)
    return (
      <p className="text-slate-400 text-center p-4">
        No contacts found.
      </p>
    );

  return (
    <div className="space-y-2 p-2">
      {conversations.map((chat) => (
        <div
          key={chat.conversationId}
          className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-800 cursor-pointer transition"
          onClick={() => dispatch(selectUser(chat.user._id))}
        >
          <img
            src={chat.user?.profileImage?.url || "/avatar.png"}
            alt={chat.user?.username || "user"}
            className="w-10 h-10 rounded-full"
          />
          <div className="flex-1">
            <p className="text-sm font-semibold text-white">
              {chat.user?.username}
            </p>
            <p className="text-xs text-slate-400 truncate">
              {chat.lastMessage?.text || "Start conversation"}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContactList;