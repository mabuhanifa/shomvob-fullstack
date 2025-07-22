import { Bookmark, Github } from "lucide-react";

export default function Job({ bg }) {
  return (
    <div
      className={`${bg} p-6 rounded-lg shadow-md flex flex-col justify-between`}
    >
      <div className="flex justify-between items-start">
        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
          <Github />
        </div>
        <button>
          <Bookmark />
        </button>
      </div>
      <h3 className="text-lg font-bold mt-4">Java Developer</h3>
      <p className="text-sm text-gray-600 mt-2 flex-grow">
        Build cutting-edge web applications from start to finish, utilizing your
        expertise in both front-end and back-end technologies.
      </p>
      <div className="flex space-x-2 mt-4">
        <span className="bg-white text-xs px-2 py-1 rounded-md border border-gray-100">
          Full Time
        </span>
        <span className="bg-white text-xs px-2 py-1 rounded-md border border-gray-100">
          Mid Level
        </span>
      </div>
      <div className="flex space-x-4 mt-6">
        <button className="w-full border border-gray-400 text-gray-800 py-2 rounded-lg">
          Details
        </button>
        <button className="w-full bg-black text-white py-2 rounded-lg">
          Apply Now
        </button>
      </div>
    </div>
  );
}
