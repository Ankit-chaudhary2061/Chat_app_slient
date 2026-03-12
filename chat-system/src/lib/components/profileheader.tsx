"use client";

import { useEffect, useRef } from "react";
import { useAppDispatch, useAppSelector } from "../store/hook";
import { fetchMyProfile, updateProfile } from "../store/user/user-slice";

const ProfileHeader = () => {
  const dispatch = useAppDispatch();
  const { currentUser } = useAppSelector((store) => store.user);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    dispatch(fetchMyProfile());
  }, [dispatch]);

  // Trigger file input click
  const handleAvatarClick = () => {
    fileInputRef.current?.click();
  };

  // Handle selected file
const handleFileChange =  async(event: React.ChangeEvent<HTMLInputElement>) => {
  const file = event.target.files?.[0];
  if (file) {
   await dispatch(updateProfile({ image: file }))
    dispatch(fetchMyProfile());; // Pass as object
  }
}; 

  return (
    <div className="p-6 border-b border-slate-700/50">
      <div className="flex items-center gap-4">
        {/* Avatar */}
        <button
          onClick={handleAvatarClick}
          className="relative w-14 h-14 rounded-full overflow-hidden group"
        >
          <img
            src={currentUser?.profileImage?.url || "/avatar.png"}
            alt="profile"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition">
            <span className="text-white text-xs">Change</span>
          </div>
        </button>

        {/* Hidden file input */}
        <input
          type="file"
          accept="image/*"
          ref={fileInputRef}
          className="hidden"
          onChange={handleFileChange}
        />

        {/* User Info */}
        <div className="flex flex-col">
          <h3 className="text-slate-200 font-medium text-base max-w-[180px] truncate">
            {currentUser?.username || "Username"}
          </h3>
          <p className="text-slate-400 text-xs">Online</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;