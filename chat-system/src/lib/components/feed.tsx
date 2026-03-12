"use client";

import { useRef } from "react";
import { Heart, MessageCircle, Send, Bookmark, MoreHorizontal } from "lucide-react";

export default function Feed() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount =
        direction === "left" ? scrollLeft - clientWidth / 2 : scrollLeft + clientWidth / 2;
      scrollRef.current.scrollTo({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const stories = [
    { id: 0, username: "You", img: "https://i.pravatar.cc/100?img=1", isOwn: true },
    { id: 1, username: "purna__rai", img: "https://i.pravatar.cc/100?img=2" },
    { id: 2, username: "cristiano", img: "https://i.pravatar.cc/100?img=3" },
    { id: 3, username: "realmadrid", img: "https://i.pravatar.cc/100?img=4" },
    { id: 4, username: "sayandesi", img: "https://i.pravatar.cc/100?img=5" },
    { id: 5, username: "worldofshi", img: "https://i.pravatar.cc/100?img=6" },
  ];

  return (
    <div className="flex-1 flex justify-center overflow-y-auto bg-gray-900">
      <div className="w-full max-w-xl px-4 py-4">

        {/* ---------------- STORIES ---------------- */}
        <div className="relative mb-6">
          {/* Scroll Buttons for Desktop */}
          <button
            onClick={() => scroll("left")}
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full z-10"
          >
            &#8592;
          </button>
          <button
            onClick={() => scroll("right")}
            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full z-10"
          >
            &#8594;
          </button>

          {/* Story List */}
          <div
            ref={scrollRef}
            className="flex space-x-4 overflow-x-auto px-2 scrollbar-hide py-2"
          >
            {stories.map((story) => (
              <div key={story.id} className="flex flex-col items-center min-w-[70px]">
                <div
                  className={`p-[2px] rounded-full ${
                    story.isOwn
                      ? "border-2 border-gray-500"
                      : "bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600"
                  }`}
                >
                  <div className="relative w-16 h-16 rounded-full overflow-hidden">
                    <img
                      src={story.img}
                      className="w-full h-full object-cover rounded-full"
                    />
                    {story.isOwn && (
                      <div className="absolute bottom-0 right-0 bg-blue-500 w-5 h-5 rounded-full flex items-center justify-center border-2 border-white text-white text-sm font-bold">
                        +
                      </div>
                    )}
                  </div>
                </div>
                <p className="text-xs mt-1 truncate w-16 text-center text-white">
                  {story.username}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ---------------- POST ---------------- */}
        <div className="bg-gray-800 rounded-md mb-6 shadow-md">
          {/* Post Header */}
          <div className="flex items-center justify-between p-3">
            <div className="flex items-center gap-3">
              <img
                src="https://i.pravatar.cc/100?img=8"
                className="w-8 h-8 rounded-full"
              />
              <div className="flex flex-col text-sm text-white">
                <span className="font-semibold">realmadrid</span>
                <span className="text-xs text-gray-400">2d</span>
              </div>
            </div>
            <MoreHorizontal size={20} className="text-white" />
          </div>

          {/* Post Image */}
          <img
            src="https://images.unsplash.com/photo-1522778526097-ce0a22ceb253"
            className="w-full object-cover"
          />

          {/* Post Actions */}
          <div className="flex justify-between px-3 py-2">
            <div className="flex gap-4">
              <Heart className="cursor-pointer hover:text-red-500" />
              <MessageCircle className="cursor-pointer" />
              <Send className="cursor-pointer" />
            </div>
            <Bookmark className="cursor-pointer" />
          </div>

          {/* Likes */}
          <p className="text-sm font-semibold px-3 text-white">23,400 likes</p>

          {/* Caption */}
          <p className="text-sm px-3 mt-1 text-white">
            <span className="font-semibold mr-2">realmadrid</span>
            Training session before the big match ⚽🔥
          </p>

          {/* View Comments */}
          <p className="text-sm text-gray-400 px-3 mt-1 cursor-pointer">
            View all 164 comments
          </p>

          {/* Time */}
          <p className="text-xs text-gray-500 px-3 mt-1 mb-3">2 DAYS AGO</p>
        </div>
      </div>
    </div>
  );
}