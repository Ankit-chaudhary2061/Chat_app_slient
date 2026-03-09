import { MessageCircle } from "lucide-react";

export default function Suggestions() {
  const suggestedUsers = [
    { username: "united cultural club", desc: "Followed by supriyapaudle" },
    { username: "Nena khadgi", desc: "Suggested for you" },
    { username: "Karan Khadayat", desc: "Followed by hatake_suzits00" },
    { username: "pallo_gharko_dae", desc: "Followed by aaryashuu" },
    { username: "Manuska", desc: "Followed by ssskkiidj + 2 mo" },
  ];

  return (
    <>
      {/* Suggestions Panel */}
      <div className="w-64 hidden lg:block p-4">
        {/* User Info */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <img
              src="https://via.placeholder.com/40"
              alt="user"
              className="rounded-full w-10 h-10"
            />
            <div>
              <p className="font-semibold">ahhhn_kit</p>
              <p className="text-sm text-gray-400">Ankit Chaudhary</p>
            </div>
          </div>
          <button className="text-blue-500 text-sm font-semibold">Switch</button>
        </div>

        {/* Suggestions Title */}
        <p className="text-gray-400 font-semibold mb-2">Suggested for you</p>

        {/* Suggested Users */}
        <div className="space-y-2">
          {suggestedUsers.map((user, index) => (
            <div key={index} className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <img
                  src="https://via.placeholder.com/32"
                  alt={user.username}
                  className="rounded-full w-8 h-8"
                />
                <div>
                  <p className="text-sm font-semibold">{user.username}</p>
                  <p className="text-xs text-gray-400">{user.desc}</p>
                </div>
              </div>
              <button className="text-blue-500 text-sm font-semibold">Follow</button>
            </div>
          ))}
        </div>
      </div>

      {/* Floating Messages Button */}
      <div className="fixed bottom-4 right-4 bg-gray-800 text-white rounded-full p-4 flex items-center space-x-2 shadow-lg hover:bg-gray-700 transition-colors">
        <MessageCircle size={24} />
        <span className="hidden sm:inline">Messages</span>
      </div>
    </>
  );
}