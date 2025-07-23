"use client";
import JobApplyForm from "@/components/JobApplyForm";
import { jobs } from "@/components/JobLists";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useState } from "react";

export default function JobDetailsPage() {
  const { id } = useParams();
  const job = jobs.find((j) => j.id === Number(id));
  const [showApply, setShowApply] = useState(false);

  if (!job) return <div className="p-8">Job not found.</div>;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto p-4 sm:p-6 lg:p-8">
        <div className="mb-6">
          <Link
            href="/"
            className="text-indigo-600 hover:text-indigo-800 transition duration-300 ease-in-out flex items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                clipRule="evenodd"
              />
            </svg>
            Back to all jobs
          </Link>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            {job.title}
          </h1>
          <div className="text-gray-600 mb-6 flex flex-wrap items-center gap-x-4 gap-y-2">
            <span className="font-semibold text-lg">{job.company}</span>
            <span className="text-gray-400 hidden sm:inline">&middot;</span>
            <span className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-1 text-gray-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                  clipRule="evenodd"
                />
              </svg>
              {job.location}
            </span>
          </div>
          <div className="border-t border-gray-200 my-6"></div>
          <div className="prose max-w-none text-gray-700">
            <p>{job.fullDescription}</p>
          </div>
          <div className="mt-8">
            <button
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold px-6 py-3 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 shadow-md"
              onClick={() => setShowApply(true)}
            >
              Apply Now
            </button>
          </div>
        </div>
        {showApply && (
          <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div
              className="absolute inset-0 bg-black bg-opacity-40 backdrop-blur-sm"
              onClick={() => setShowApply(false)}
            />
            <div className="relative bg-white rounded-lg shadow-lg p-8 z-10 min-w-[300px] md:min-w-[500px]">
              <button
                className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 text-2xl"
                onClick={() => setShowApply(false)}
              >
                &times;
              </button>
              <h2 className="text-xl font-bold mb-4">Apply for {job.title}</h2>
              <JobApplyForm onClose={() => setShowApply(false)} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
