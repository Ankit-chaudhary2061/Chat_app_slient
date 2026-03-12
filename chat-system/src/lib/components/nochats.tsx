import { setActiveTab } from "../store/chat/chat-slice";
import { useAppDispatch, useAppSelector } from "../store/hook";

const NoChatsFound = () => {
  const dispatch = useAppDispatch();
  const { activeTab } = useAppSelector((store) => store.chat);

  return (
    <div className="flex flex-col items-center justify-center p-6 text-center text-slate-400">
      <div className="w-20 h-20 mb-4 rounded-full bg-slate-700 flex items-center justify-center">
        <span className="text-3xl">💬</span>
      </div>

      <h3 className="text-sm font-semibold">No Chats Found</h3>
      <p className="text-xs mt-1">Start a conversation by selecting a contact!</p>

      <button
        onClick={() => dispatch(setActiveTab("contacts"))} // ✅ wrap in arrow function
        className="mt-3 px-4 py-2 bg-cyan-500 text-white rounded-md text-sm hover:bg-cyan-600 transition"
      >
        Find Contacts
      </button>
    </div>
  );
};

export default NoChatsFound;