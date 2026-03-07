import { LoaderIcon } from "lucide-react";

const PageLoader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/20 backdrop-blur-sm z-50">
      <LoaderIcon className="animate-spin w-12 h-12 text-white" />
    </div>
  );
};

export default PageLoader;