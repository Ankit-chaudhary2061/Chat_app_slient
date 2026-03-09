export default function Feed() {
    const stories = [
  { username: "eesnehag...", img: "https://via.placeholder.com/50" },
  { username: "purna__rai", img: "https://via.placeholder.com/50" },
  { username: "cristiano", img: "https://via.placeholder.com/50" },
  { username: "realmadrid", img: "https://via.placeholder.com/50" },
  { username: "sayandesi...", img: "https://via.placeholder.com/50" },
  { username: "worldofshi...", img: "https://via.placeholder.com/50" },
];
  return (
      <div className="flex-1 overflow-y-auto p-4">
        {/* Stories */}
        <div className="flex space-x-4 mb-6 overflow-x-auto">
          {stories.map((story, index) => (
            <div key={index} className="flex flex-col items-center w-20">
              <img
                src={story.img}
                alt={story.username}
                className="w-16 h-16 rounded-full border-2 border-pink-500 p-[2px]"
              />
              <p className="text-xs truncate w-full text-center">{story.username}</p>
            </div>
          ))}
        </div>

        {/* Post */}
        <div className="bg-gray-800 rounded-md p-4 mb-6">
          <div className="flex items-center mb-4">
            <img
              src="https://via.placeholder.com/40"
              alt="user"
              className="rounded-full w-10 h-10 mr-2"
            />
            <span className="font-semibold">realmadrid</span>
          </div>
          <img
            src="https://via.placeholder.com/600x400"
            alt="post"
            className="w-full rounded-md"
          />
        </div>
      </div>

  );
}