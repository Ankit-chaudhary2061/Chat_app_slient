import ChatInfo from "@/src/lib/components/chatinfo";
import MessageList from "@/src/lib/components/messagelist";

export default function MessagesPage() {
  return (
    <div className="flex flex-1">

      {/* MESSAGE LIST */}
      <div className="flex-1 max-w-2xl mx-auto p-6">
       
         <ChatInfo />
      </div>

      {/* RIGHT PANEL */}
      <div className="hidden lg:block w-80 p-6">
        <MessageList />
      </div>

    </div>
  );
}