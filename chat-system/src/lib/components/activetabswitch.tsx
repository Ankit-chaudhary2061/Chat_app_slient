"use client";

import { setActiveTab } from "../store/chat/chat-slice";
import { useAppDispatch, useAppSelector } from "../store/hook";

const ActiveTabSwitch = () => {
  const dispatch = useAppDispatch();
  const activeTab = useAppSelector((store) => store.chat.activeTab);

  return (
    <div className="flex gap-2 p-2 m-2 bg-slate-800 rounded-lg">
      <button
        onClick={() => dispatch(setActiveTab("chats"))}
        className={`px-4 py-2 rounded-md text-sm font-medium transition ${
          activeTab === "chats"
            ? "bg-cyan-500/20 text-cyan-400"
            : "text-slate-400 hover:bg-slate-700"
        }`}
      >
        Chats
      </button>

      <button
        onClick={() => dispatch(setActiveTab("contacts"))}
        className={`px-4 py-2 rounded-md text-sm font-medium transition ${
          activeTab === "contacts"
            ? "bg-cyan-500/20 text-cyan-400"
            : "text-slate-400 hover:bg-slate-700"
        }`}
      >
        Contacts
      </button>
    </div>
  );
};

export default ActiveTabSwitch;