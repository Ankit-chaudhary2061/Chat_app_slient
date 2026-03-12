import BorderAnimation from "@/src/lib/components/bodyanimators";
import ChatInfo from "@/src/lib/components/chatinfo";
import MessageList from "@/src/lib/components/messagelist";

export default function MessagesPage() {
  return (
    
    <div className="relative w-full max-w-6xl h-[800px]">

      {/* MESSAGE LIST */}
      <BorderAnimation>
      <div className="w-80 bg-slate-800/50 backdrop-blur-sm flex flex-col">
      <ProfleHeader/>
       
         <ChatInfo />
      </div>

      {/* RIGHT PANEL */}
      <div className="hidden lg:block w-80 p-6">
        <MessageList />
      </div>
</BorderAnimation>
    </div>
  );
}