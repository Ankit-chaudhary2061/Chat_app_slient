"use client";

import { Home, Search, Heart, PlusCircle, MessageSquare, Video, Menu, Grid } from "lucide-react";

const stories = [
  { username: "eesnehag", image: "/profile1.jpg" },
  { username: "purna__rai", image: "/profile2.jpg" },
  { username: "cristiano", image: "/profile3.jpg" },
  { username: "realmadrid", image: "/profile4.jpg" },
  { username: "sayandesigns", image: "/profile5.jpg" },
  { username: "worldofshi", image: "/profile6.jpg" },
];

const posts = [
  {
    id: 1,
    username: "realmadrid",
    userImage: "/profile4.jpg",
    postImage: "/post1.jpg",
    likes: 1200,
    description: "Training session today! ⚽",
    timestamp: "24m",
  },
  {
    id: 2,
    username: "cristiano",
    userImage: "/profile3.jpg",
    postImage: "/post2.jpg",
    likes: 2200,
    description: "Workout complete!",
    timestamp: "1h",
  },
];

const suggestions = [
  { username: "united cultural club", followedBy: "supriyapaudle" },
  { username: "Nena khadgi", followedBy: "Suggested for you" },
  { username: "Karan Khadayat", followedBy: "hatake_suzits00" },
  { username: "pallo_gharko_dae", followedBy: "aaryashuu" },
];

export default function InstaClone() {
  return (
    <div className="flex min-h-screen bg-slate-900 text-white">
      
      {/* Left Sidebar */}
      <div className="hidden md:flex flex-col w-16 items-center py-4 space-y-6 border-r border-slate-700">
        <Home className="w-6 h-6 cursor-pointer" />
        <Video className="w-6 h-6 cursor-pointer" />
        <MessageSquare className="w-6 h-6 cursor-pointer relative">
          <span className="absolute -top-2 -right-2 bg-red-500 text-xs w-4 h-4 rounded-full flex items-center justify-center">5</span>
        </MessageSquare>
        <Search className="w-6 h-6 cursor-pointer" />
        <Heart className="w-6 h-6 cursor-pointer" />
        <PlusCircle className="w-6 h-6 cursor-pointer" />
        <img src="/profile1.jpg" className="w-8 h-8 rounded-full cursor-pointer border-2 border-pink-500" />
      </div>

      {/* Main Feed */}
      <div className="flex-1 max-w-2xl mx-auto p-4 space-y-6">
        
        {/* Stories */}
        <div className="flex space-x-4 overflow-x-auto py-2">
          {stories.map((story) => (
            <div key={story.username} className="flex flex-col items-center">
              <img
                src={story.image}
                className="w-16 h-16 rounded-full border-2 border-pink-500 object-cover"
              />
              <span className="text-xs mt-1 truncate w-16 text-center">{story.username}</span>
            </div>
          ))}
        </div>

        {/* Posts */}
        {posts.map((post) => (
          <div key={post.id} className="bg-slate-800 rounded-xl border border-slate-700 overflow-hidden shadow-md">
            
            {/* Post Header */}
            <div className="flex items-center justify-between p-4">
              <div className="flex items-center gap-3">
                <img
                  src={post.userImage}
                  className="w-10 h-10 rounded-full object-cover border-2 border-pink-500"
                />
                <span className="font-semibold">{post.username}</span>
              </div>
              <div className="cursor-pointer text-slate-400">...</div>
            </div>

            {/* Post Image */}
            <img src={post.postImage} className="w-full object-cover" />

            {/* Actions */}
            <div className="flex justify-between p-4">
              <div className="flex space-x-4">
                <Heart className="w-6 h-6 cursor-pointer" />
                <MessageSquare className="w-6 h-6 cursor-pointer" />
                <Video className="w-6 h-6 cursor-pointer" />
              </div>
              <Grid className="w-6 h-6 cursor-pointer" />
            </div>

            {/* Post Details */}
            <div className="px-4 pb-4">
              <p className="font-semibold">{post.likes} likes</p>
              <p>
                <span className="font-semibold">{post.username}</span> {post.description}
              </p>
              <p className="text-slate-500 text-sm">{post.timestamp}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Right Sidebar */}
      <div className="hidden lg:flex flex-col w-80 px-4 py-6 space-y-6">
        {/* Profile Info */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/profile1.jpg" className="w-12 h-12 rounded-full" />
            <div>
              <p className="font-semibold">ahhhn_kit</p>
              <p className="text-sm text-slate-400">ankit Chaudhary</p>
            </div>
          </div>
          <button className="text-blue-500 text-sm">Switch</button>
        </div>

        {/* Suggestions */}
        <div className="flex flex-col space-y-3">
          <p className="text-slate-400 font-semibold text-sm">Suggested for you</p>
          {suggestions.map((s) => (
            <div key={s.username} className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img src="/profile2.jpg" className="w-8 h-8 rounded-full" />
                <div className="flex flex-col">
                  <span className="text-sm font-semibold">{s.username}</span>
                  <span className="text-xs text-slate-500">{s.followedBy}</span>
                </div>
              </div>
              <button className="text-blue-500 text-sm">Follow</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}