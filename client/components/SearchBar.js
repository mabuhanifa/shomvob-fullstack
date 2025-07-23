export default function SearchBar() {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md my-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 border rounded">
        <div className="flex items-center border-r">
          <i className="fas fa-search text-gray-400 mx-2"></i>
          <input
            type="text"
            placeholder="Java Developer"
            className="w-full focus:outline-none"
          />
        </div>
        <div className="flex items-center border-r">
          <i className="fas fa-map-marker-alt text-gray-400 mx-2"></i>
          <input
            type="text"
            placeholder="Felosa Drive, Los Angeles"
            className="w-full focus:outline-none"
          />
        </div>
        <div className="flex items-center border-r">
          <i className="fas fa-briefcase text-gray-400 mx-2"></i>
          <input
            type="text"
            placeholder="2+ Years Experience"
            className="w-full focus:outline-none"
          />
        </div>
        <div className="flex items-center col-span-1 lg:col-span-1">
          <div className="w-full">
            <label className="text-gray-500 text-sm">
              Salary Range (Month)
            </label>
            <input type="range" min="2400" max="8000" className="w-full" />
            <div className="flex justify-between text-xs text-gray-500">
              <span>$2400</span>
              <span>$8000</span>
            </div>
          </div>
        </div>
        <button className="bg-black text-white rounded-lg px-6 py-2 col-span-1 lg:col-span-1 border-none">
          Search
        </button>
      </div>
    </div>
  );
}
