"use client";

import CreateJobForm from "@/components/CreateJobForm";
import DeleteModal from "@/components/DeleteModal";
import EditJobForm from "@/components/EditJobForm";
import { jobs as initialJobs } from "@/components/JobLists";
import { useState } from "react";

export default function DashboardPage() {
  const [jobs, setJobs] = useState(initialJobs);
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [showEditForm, setShowEditForm] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);

  const handleAddJob = (newJob) => {
    setJobs((prevJobs) => [
      ...prevJobs,
      {
        ...newJob,
        id: prevJobs.length + 1,
        detailsLink: `/jobs/${prevJobs.length + 1}`,
      },
    ]);
    setShowCreateForm(false);
  };

  const handleEditClick = (job) => {
    console.log("Editing job:", job);
    setSelectedJob(job);
    setShowEditForm(true);
  };

  const handleUpdateJob = (updatedJob) => {
    setJobs((prevJobs) =>
      prevJobs.map((job) => (job.id === updatedJob.id ? updatedJob : job))
    );
    setShowEditForm(false);
    setSelectedJob(null);
  };

  const handleDeleteClick = (job) => {
    console.log("Deleting job:", job);
    setSelectedJob(job);
    setShowDeleteModal(true);
  };

  const handleDeleteJob = () => {
    if (selectedJob) {
      setJobs((prevJobs) =>
        prevJobs.filter((job) => job.id !== selectedJob.id)
      );
      setShowDeleteModal(false);
      setSelectedJob(null);
    }
  };

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
        <DeleteModal
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
                <th scope="col" className="relative px-6 py-3">
                  <span className="sr-only">Actions</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {jobs.map((job) => (
                <tr key={job.id}>
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
                    {/* Removed relative and z-10 from this div to fix button clicking */}
                    <div className="flex items-center justify-end space-x-4">
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
