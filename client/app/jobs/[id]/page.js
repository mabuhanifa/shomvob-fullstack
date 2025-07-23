"use client";
import JobApplyForm from "@/components/JobApplyForm";
import { jobs } from "@/components/JobLists";
import { useParams } from "next/navigation";
import { useState } from "react";

export default function JobDetailsPage() {
  const { id } = useParams();
  const job = jobs.find((j) => j.id === Number(id));
  const [showApply, setShowApply] = useState(false);

  if (!job) return <div className="p-8">Job not found.</div>;

  return (
    <div className="max-w-xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-2">{job.title}</h1>
      <div className="text-gray-700 mb-2">
        <span className="font-semibold">{job.company}</span> &middot;{" "}
        <span>{job.location}</span>
      </div>
      <p className="mb-6 text-gray-800">{job.fullDescription}</p>
      <button
        className="bg-black text-white px-4 py-2 rounded-lg"
        onClick={() => setShowApply(true)}
      >
        Apply
      </button>
      {showApply && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div
            className="absolute inset-0 bg-black bg-opacity-40 backdrop-blur-sm"
            onClick={() => setShowApply(false)}
          />
          <div className="relative bg-white rounded-lg shadow-lg p-8 z-10 min-w-[300px]">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
              onClick={() => setShowApply(false)}
            >
              ×
            </button>
            <h2 className="text-xl font-bold mb-4">Apply for {job.title}</h2>
            <JobApplyForm onClose={() => setShowApply(false)} />
          </div>
        </div>
      )}
    </div>
  );
}
