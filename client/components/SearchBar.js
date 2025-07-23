"use client";
export default function SearchBar() {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md my-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 border rounded bg-gray-100">
        <div className="flex items-center border-r ">
          <input
            type="text"
            placeholder="Java Developer"
            className="w-full focus:outline-none bg-gray-100 ml-2"
          />
        </div>
        <div className="flex items-center border-r ">
          <input
            type="text"
            placeholder="Felosa Drive, Los Angeles"
            className="w-full focus:outline-none bg-gray-100"
          />
        </div>
        <div className="flex items-center border-r bg-gray-100">
          <input
            type="text"
            placeholder="2+ Years Experience"
            className="w-full focus:outline-none bg-gray-100"
          />
        </div>
        <div className="flex items-center col-span-1 lg:col-span-1">
          <div className="w-full">
            <label className="text-gray-500 text-sm">
              Salary Range (Month) <span>৳5000</span> - <span>৳30000</span>
            </label>
            <input type="range" min="5000" max="300000" className="w-full" />
          </div>
        </div>
        <button className="bg-black text-white rounded-lg px-6 py-2 col-span-1 lg:col-span-1 border-none">
          Search
        </button>
      </div>
    </div>
  );
}
