import { MapPin } from "lucide-react";

export default function Header() {
  return (
    <header className="flex justify-between items-center pb-2">
      <div className="flex items-center">
        <div className="w-8 h-8 bg-black rounded-full mr-2"></div>
        <h1 className="text-2xl font-bold">Jobseeker</h1>
      </div>
      <div className="hidden md:flex items-center space-x-8 font-semibold">
        <a href="#" className="text-gray-600 flex">
          <MapPin />
          Felosa Drive, Los Angeles
        </a>
        <a href="#" className="text-gray-600">
          Find Job
        </a>
        <a href="#" className="text-gray-600">
          My Jobs <i className="fas fa-chevron-down text-xs"></i>
        </a>
        <a href="#" className="text-gray-600">
          Hiring
        </a>
      </div>
      <div className="flex items-center space-x-4">
        <button className="p-2 rounded-full hover:bg-gray-200">
          <i className="fas fa-cog"></i>
        </button>
        <button className="p-2 rounded-full hover:bg-gray-200">
          <i className="fas fa-bell"></i>
        </button>
        <img
          src="https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png"
          alt="User"
          className="w-10 h-10 rounded-full"
        />
      </div>
    </header>
  );
}
