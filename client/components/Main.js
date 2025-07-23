"use client";
import JobLists from "./JobLists";

export default function Main() {
  return (
    <div className="flex flex-col md:flex-row gap-8">
      <aside className="w-full md:w-1/4">
        <h2 className="text-2xl font-bold mb-4">Filters</h2>

        <div className="space-y-6">
          <div>
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-semibold">Job Type</h3>
              <button className="text-sm text-gray-500">Clear All</button>
            </div>
            <div className="space-y-2">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="job_type"
                  className="form-radio"
                  defaultChecked
                />
                <span className="ml-2">All (1143)</span>
              </label>
              <label className="flex items-center">
                <input type="radio" name="job_type" className="form-radio" />
                <span className="ml-2">Full-Time (510)</span>
              </label>
              <label className="flex items-center">
                <input type="radio" name="job_type" className="form-radio" />
                <span className="ml-2">Part-Time (324)</span>
              </label>
              <label className="flex items-center">
                <input type="radio" name="job_type" className="form-radio" />
                <span className="ml-2">Remote (234)</span>
              </label>
              <label className="flex items-center">
                <input type="radio" name="job_type" className="form-radio" />
                <span className="ml-2">Internship (65)</span>
              </label>
              <label className="flex items-center">
                <input type="radio" name="job_type" className="form-radio" />
                <span className="ml-2">Contract (10)</span>
              </label>
            </div>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Work Type</h3>
            <div className="space-y-2">
              <label className="flex items-center">
                <input type="radio" name="work_type" className="form-radio" />
                <span className="ml-2">On-Site</span>
              </label>
              <label className="flex items-center">
                <input type="radio" name="work_type" className="form-radio" />
                <span className="ml-2">Remote</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="work_type"
                  className="form-radio"
                  defaultChecked
                />
                <span className="ml-2">Hybrid</span>
              </label>
            </div>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Employment Type</h3>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Job Functions</h3>
          </div>
        </div>
      </aside>

      <main className="w-full md:w-3/4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">
            Java Developer Search Result (1143)
          </h2>
          <div className="flex items-center">
            <span className="text-gray-600 mr-2">Sort by:</span>
            <select className="rounded-lg border-gray-300">
              <option>Popular</option>
              <option>Recent</option>
            </select>
          </div>
        </div>
        <JobLists />
      </main>
    </div>
  );
}
