"use client";

import Link from "next/link";
import { Home, Send, Bell, Search, MoreHorizontal } from "lucide-react";

export default function Sidebar() {
  const menuItems = [
    { name: "Home", href: "/feed", icon: <Home size={24} /> },
    { name: "Messages", href: "/feed/message", icon: <Send size={24} /> },
    { name: "Notifications", href: "/feed/notification", icon: <Bell size={24} /> },
    { name: "Search", href: "/feed/search", icon: <Search size={24} /> },
    { name: "More", href: "/feed/more", icon: <MoreHorizontal size={24} /> },
  ];

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden md:flex bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-700 w-20 hover:w-64 transition-all duration-300 flex-col justify-between h-screen sticky top-0 p-4">
        
        {/* Logo */}
        <div className="flex items-center justify-center hover:justify-start mb-6">
          <span className="text-2xl font-bold text-slate-900 dark:text-white">Friends Book</span>
        </div>

        {/* Menu */}
        <nav className="flex flex-col space-y-4">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="group relative flex items-center p-2 rounded-md text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              <span>{item.icon}</span>
              <span className="ml-4 opacity-0 group-hover:opacity-100 whitespace-nowrap transition-opacity text-sm font-medium">
                {item.name}
              </span>
            </Link>
          ))}
        </nav>

        {/* Profile */}
        <div className="mt-auto flex items-center">
          <Link
            href="/profile"
            className="group relative flex items-center p-2 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            <img src="/default-profile.png" alt="Profile" className="w-8 h-8 rounded-full" />
            <span className="ml-4 opacity-0 group-hover:opacity-100 text-sm font-medium text-slate-900 dark:text-white whitespace-nowrap">
              Your Profile
            </span>
          </Link>
        </div>
      </aside>

      {/* Mobile/Tablet Bottom Navbar */}
      <nav className="fixed bottom-0 left-0 right-0 md:hidden bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-700 flex justify-around items-center h-16 z-50">
        {menuItems.map((item) => (
          <Link key={item.name} href={item.href} className="flex flex-col items-center justify-center text-slate-700 dark:text-slate-200">
            {item.icon}
            <span className="text-xs mt-1">{item.name}</span>
          </Link>
        ))}
      </nav>
    </>
  );
}