"use client";
import React from "react";

const BorderAnimation = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative p-[2px] rounded-xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-border">
      <div className="rounded-xl bg-white dark:bg-black p-4 h-full w-full">
        {children}
      </div>
    </div>
  );
};

export default BorderAnimation;
// "use client";
// import React from "react";

// const BorderAnimation = ({ children }: { children: React.ReactNode }) => {
//   return (
//     <div className="relative p-[2px] rounded-xl overflow-hidden">

//       {/* Glow layer */}
//       <div className="absolute inset-0 blur-xl opacity-70 animate-border-spin bg-[conic-gradient(#3b82f6,#a855f7,#ec4899,#22c55e,#06b6d4,#3b82f6)]" />

//       {/* Main border */}
//       <div className="absolute inset-0 animate-border-spin bg-[conic-gradient(#3b82f6,#a855f7,#ec4899,#22c55e,#06b6d4,#3b82f6)]" />

//       {/* Content */}
//       <div className="relative rounded-xl bg-white dark:bg-black p-4 h-full w-full">
//         {children}
//       </div>

//     </div>
//   );
// };

// export default BorderAnimation;