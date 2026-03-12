"use client";

import { MessageCircle, X } from "lucide-react";
import { useAppDispatch, useAppSelector } from "../store/hook";
import { useEffect, useState } from "react";
import { fetchMyProfile } from "../store/user/user-slice";
import { useRouter } from "next/navigation";

export default function Suggestions() {
  const dispatch = useAppDispatch();
  const { currentUser } = useAppSelector((store) => store.user);
  const [showSidebar, setShowSidebar] = useState(false); // mobile toggle
 const router = useRouter();
  
const handleEditClick = () => {
  router.push("/updateprofile");
};
  useEffect(() => {
    dispatch(fetchMyProfile());
  }, [dispatch]);

  const suggestedUsers = [
    { username: "united cultural club", desc: "Followed by supriyapaudle" },
    { username: "Nena khadgi", desc: "Suggested for you" },
    { username: "Karan Khadayat", desc: "Followed by hatake_suzits00" },
    { username: "pallo_gharko_dae", desc: "Followed by aaryashuu" },
    { username: "Manuska", desc: "Followed by ssskkiidj + 2 mo" },
  ];

  return (
    <>
      {/* Sidebar for desktop */}
      <div className="hidden lg:block w-80 p-4">
        <div className="sticky top-20 space-y-6">
          {/* Current User */}
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-3">
              <img
                src={currentUser?.profileImage?.url || "https://via.placeholder.com/40"}
                alt="user"
                className="rounded-full w-12 h-12 border-2 border-pink-500 p-0.5"
              />
              <div>
                <p className="font-semibold text-sm">{currentUser?.username || "username"}</p>
                <p className="text-xs text-gray-400 truncate max-w-[150px]">
                  {currentUser?.bio || "Your bio"}
                </p>
              </div>
            </div>
         <button
  onClick={handleEditClick}
  className="text-blue-500 text-xs font-semibold hover:text-blue-600 transition"
>
  Edit
</button>
          </div>

          {/* Suggestions Header */}
          <div className="flex justify-between mb-3">
            <p className="text-gray-400 text-sm font-semibold">Suggested for you</p>
            <button className="text-xs font-semibold text-gray-600 hover:text-gray-800 transition">
              See all
            </button>
          </div>

          {/* Suggested Users */}
          <div className="space-y-3 max-h-[400px] overflow-y-auto">
            {suggestedUsers.map((user, index) => (
              <div
                key={index}
                className="flex items-center justify-between hover:bg-gray-800 p-2 rounded-lg transition cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <img
                    src={`https://i.pravatar.cc/100?img=${index + 1}`}
                    alt={user.username}
                    className="rounded-full w-10 h-10 border border-gray-600"
                  />
                  <div>
                    <p className="text-sm font-semibold">{user.username}</p>
                    <p className="text-xs text-gray-400">{user.desc}</p>
                  </div>
                </div>
                <button className="text-blue-500 text-xs font-semibold hover:text-blue-600 transition">
                  Follow
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile floating sidebar toggle */}
      <div className="lg:hidden fixed bottom-6 right-6 z-50 flex flex-col gap-2 items-end">
        <button
          className="bg-gradient-to-tr from-pink-500 to-yellow-400 text-white rounded-full px-4 py-3 flex items-center gap-2 shadow-xl hover:scale-105 transform transition"
          onClick={() => setShowSidebar(true)}
        >
          <MessageCircle size={20} />
          <span className="text-sm font-semibold">Messages</span>
        </button>
      </div>

      {/* Mobile sidebar */}
      {showSidebar && (
        <div className="fixed inset-0 bg-black/70 z-40 flex justify-end">
          <div className="bg-gray-900 w-80 p-4 flex flex-col space-y-6 overflow-y-auto">
            <div className="flex justify-end mb-4">
              <button onClick={() => setShowSidebar(false)}>
                <X size={24} className="text-white" />
              </button>
            </div>

            {/* Current User */}
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-3">
                <img
                  src={currentUser?.profileImage?.url || "https://via.placeholder.com/40"}
                  alt="user"
                  className="rounded-full w-12 h-12 border-2 border-pink-500 p-0.5"
                />
                <div>
                  <p className="font-semibold text-sm">{currentUser?.username || "username"}</p>
                  <p className="text-xs text-gray-400 truncate max-w-[120px]">
                    {currentUser?.bio || "Your bio"}
                  </p>
                </div>
              </div>
              <button className="text-blue-500 text-xs font-semibold hover:text-blue-600 transition">
                Edit
              </button>
            </div>

            {/* Suggestions */}
            <div className="flex justify-between mb-3">
              <p className="text-gray-400 text-sm font-semibold">Suggested for you</p>
              <button className="text-xs font-semibold text-gray-600 hover:text-gray-800 transition">
                See all
              </button>
            </div>

            <div className="space-y-3">
              {suggestedUsers.map((user, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between hover:bg-gray-800 p-2 rounded-lg transition cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <img
                      src={`https://i.pravatar.cc/100?img=${index + 1}`}
                      alt={user.username}
                      className="rounded-full w-10 h-10 border border-gray-600"
                    />
                    <div>
                      <p className="text-sm font-semibold">{user.username}</p>
                      <p className="text-xs text-gray-400">{user.desc}</p>
                    </div>
                  </div>
                  <button className="text-blue-500 text-xs font-semibold hover:text-blue-600 transition">
                    Follow
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}