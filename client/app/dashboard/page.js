"use client";

import CreateJobForm from "@/components/CreateJobForm";
import DeleteConfirmationModal from "@/components/DeleteModal";
import EditJobForm from "@/components/EditJobForm";
import api from "@/lib/api";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function DashboardPage() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [showEditForm, setShowEditForm] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);

  const fetchJobs = async () => {
    try {
      setLoading(true);
      const { data } = await api.get("/jobs");
      setJobs(data);
    } catch (err) {
      setError("Failed to load jobs.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  const handleAddJob = async (newJob) => {
    try {
      await api.post("/jobs", newJob);
      setShowCreateForm(false);
      fetchJobs();
    } catch (err) {
      alert("Failed to create job.");
    }
  };

  const handleEditClick = (job) => {
    setSelectedJob(job);
    setShowEditForm(true);
  };

  const handleUpdateJob = async (updatedJob) => {
    try {
      await api.put(`/jobs/${updatedJob._id}`, updatedJob);
      setShowEditForm(false);
      setSelectedJob(null);
      fetchJobs();
    } catch (err) {
      alert("Failed to update job.");
    }
  };

  const handleDeleteClick = (job) => {
    setSelectedJob(job);
    setShowDeleteModal(true);
  };

  const handleDeleteJob = async () => {
    if (selectedJob) {
      try {
        await api.delete(`/jobs/${selectedJob._id}`);
        setShowDeleteModal(false);
        setSelectedJob(null);
        fetchJobs();
      } catch (err) {
        alert("Failed to delete job.");
      }
    }
  };

  if (loading)
    return <div className="text-center p-8">Loading dashboard...</div>;
  if (error) return <div className="text-center p-8 text-red-500">{error}</div>;

  return (
    <div className="container mx-auto p-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>
        <button
          onClick={() => setShowCreateForm(true)}
          className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-lg"
        >
          Create New Job
        </button>
      </div>

      {showCreateForm && (
        <CreateJobForm
          onAddJob={handleAddJob}
          onClose={() => setShowCreateForm(false)}
        />
      )}

      {showEditForm && selectedJob && (
        <EditJobForm
          job={selectedJob}
          onUpdateJob={handleUpdateJob}
          onClose={() => {
            setShowEditForm(false);
            setSelectedJob(null);
          }}
        />
      )}

      {showDeleteModal && selectedJob && (
        <DeleteConfirmationModal
          onConfirm={handleDeleteJob}
          onClose={() => {
            setShowDeleteModal(false);
            setSelectedJob(null);
          }}
        />
      )}

      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">Published Jobs</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Title
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Company
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Location
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {jobs.map((job) => (
                <tr key={job._id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {job.title}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {job.company}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {job.location}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <div className="flex items-center justify-end space-x-4">
                      <Link
                        href={`/dashboard/applicants/${job._id}`}
                        className="text-green-600 hover:text-green-900"
                      >
                        See Applicants
                      </Link>
                      <button
                        onClick={() => handleEditClick(job)}
                        className="text-indigo-600 hover:text-indigo-900"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDeleteClick(job)}
                        className="text-red-600 hover:text-red-900"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
