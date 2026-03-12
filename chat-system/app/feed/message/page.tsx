"use client";

import ActiveTabSwitch from "@/src/lib/components/activetabswitch";
import ChatList from "@/src/lib/components/chatlist";
import ContactList from "@/src/lib/components/contactlist";
import ProfileHeader from "@/src/lib/components/profileheader";
import ChatContainer from "@/src/lib/components/chatContainer";
import NoConversationPlaceholder from "@/src/lib/components/noconversationPlacholder";
import { useAppSelector } from "@/src/lib/store/hook";

export default function MessagesPage() {
  const { selectedUser, activeTab } = useAppSelector((state) => state.chat);

  return (
    <div className="flex justify-center w-full h-screen p-6">
      <div className="flex w-full max-w-6xl h-[750px] bg-slate-900 rounded-xl overflow-hidden">

        {/* LEFT PANEL */}
        <div className="w-80 border-r border-slate-700 flex flex-col bg-slate-800/50 backdrop-blur-sm">
          <ProfileHeader />
          <ActiveTabSwitch />

          <div className="flex-1 overflow-y-auto p-4 space-y-2">
            {activeTab === "chats" ? <ChatList /> : <ContactList />}
          </div>
        </div>

        {/* RIGHT PANEL */}
        <div className="flex-1 flex flex-col bg-slate-900/50 backdrop-blur-sm">
          {selectedUser ? <ChatContainer /> : <NoConversationPlaceholder />}
        </div>
      </div>
    </div>
  );
}