import Feed from "@/src/lib/components/feed";
import Suggestions from "@/src/lib/components/suggestion";


export default function FeedPage() {
  return (
    <div className="flex flex-1">

      {/* FEED */}
      <div className="flex-1 max-w-2xl mx-auto p-6">
        <Feed />
      </div>

      {/* RIGHT PANEL */}
      <div className="hidden lg:block w-80 p-6">
        <Suggestions />
      </div>

    </div>
  );
}