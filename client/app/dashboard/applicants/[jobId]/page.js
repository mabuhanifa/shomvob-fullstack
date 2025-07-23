"use client";

import ResumeModal from "@/components/ResumeModal";
import api from "@/lib/api";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function ApplicantsPage() {
  const { jobId } = useParams();
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [showResumeModal, setShowResumeModal] = useState(false);
  const [selectedResumeUrl, setSelectedResumeUrl] = useState("");

  useEffect(() => {
    const fetchJobAndApplicants = async () => {
      if (!jobId) return;
      try {
        setLoading(true);
        const { data } = await api.get(`/jobs/${jobId}`);
        setJob(data);
      } catch (err) {
        setError("Failed to load job details and applicants.");
      } finally {
        setLoading(false);
      }
    };

    fetchJobAndApplicants();
  }, [jobId]);

  const handleViewResume = (resumeUrl) => {
    setSelectedResumeUrl(resumeUrl);
    setShowResumeModal(true);
  };

  if (loading) {
    return <div className="container mx-auto p-8 text-center">Loading...</div>;
  }

  if (error) {
    return (
      <div className="container mx-auto p-8 text-center text-red-500">
        {error}
      </div>
    );
  }

  if (!job) {
    return (
      <div className="container mx-auto p-8 text-center">
        <h1 className="text-2xl font-bold">Job not found</h1>
        <Link
          href="/dashboard"
          className="text-indigo-600 hover:text-indigo-800 mt-4 inline-block"
        >
          Back to Dashboard
        </Link>
      </div>
    );
  }

  const applicants = job.applicants || [];

  return (
    <div className="container mx-auto p-8">
      <div className="mb-6">
        <Link
          href="/dashboard"
          className="text-indigo-600 hover:text-indigo-800 flex items-center"
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
          Back to Dashboard
        </Link>
      </div>
      <h1 className="text-3xl font-bold mb-2">Applicants for {job.title}</h1>
      <p className="text-gray-600 mb-6">
        {job.company} &middot; {job.location}
      </p>

      <div className="bg-white p-6 rounded-lg shadow-lg">
        {applicants.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Email
                  </th>
                  <th scope="col" className="relative px-6 py-3">
                    <span className="sr-only">Resume</span>
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {applicants.map((applicant) => (
                  <tr key={applicant._id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {applicant.name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {applicant.email}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <button
                        onClick={() => handleViewResume(applicant.resume)}
                        className="text-indigo-600 hover:text-indigo-900"
                      >
                        View Resume
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p className="text-center text-gray-500 py-8">
            No applicants for this job yet.
          </p>
        )}
      </div>
      {showResumeModal && (
        <ResumeModal
          resumeUrl={selectedResumeUrl}
          onClose={() => setShowResumeModal(false)}
        />
      )}
    </div>
  );
}
