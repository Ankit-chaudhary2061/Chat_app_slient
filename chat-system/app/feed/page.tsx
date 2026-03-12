"use client";

import Feed from "@/src/lib/components/feed";
import Suggestions from "@/src/lib/components/suggestion";

export default function FeedPage() {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-gray-900 text-white">

      {/* FEED + STORIES */}
      <div className="flex-1 lg:max-w-2xl mx-auto w-full p-4 sm:p-6">
        <Feed />
      </div>

      {/* RIGHT PANEL / SUGGESTIONS */}
      <div className="w-full lg:w-80 p-4 sm:p-6 mt-6 lg:mt-0">
        <div className="lg:sticky lg:top-20">
          <Suggestions />
        </div>
      </div>
    </div>
  );
}