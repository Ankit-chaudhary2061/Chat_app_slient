const UserLoadingSkeleton = () => {
  return (
    <div className="space-y-3">
      {[1, 2, 3].map((item) => (
        <div
          key={item}
          className="bg-slate-800/30 p-4 rounded-lg animate-pulse"
        >
          <div className="flex items-center gap-3">
            
            {/* Avatar Skeleton */}
            <div className="w-12 h-12 bg-slate-700 rounded-full"></div>

            {/* Text Skeleton */}
            <div className="flex-1 space-y-2">
              <div className="h-4 bg-slate-700 rounded w-3/4"></div>
              <div className="h-3 bg-slate-700/70 rounded w-1/2"></div>
            </div>

          </div>
        </div>
      ))}
    </div>
  );
};

export default UserLoadingSkeleton;