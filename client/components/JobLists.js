"use client";
import { useEffect, useState } from "react";
import api from "../lib/api";
import Job from "./Job";
import Loader from "./Loader";

export default function JobLists() {
  const [jobs, setJobs] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [countdown, setCountdown] = useState(30);
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const { data } = await api.get("/jobs");
        setJobs(data);
      } catch (err) {
        setError("Failed to fetch jobs.");
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  if (loading) {
    return (
      <Loader
        countdown={countdown}
        setCountdown={setCountdown}
        loading={loading}
        setLoading={setLoading}
      />
    );
  }

  if (error) {
    return <div className="text-center p-8 text-red-500">{error}</div>;
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
      {jobs.length === 0 && (
        <div className="col-span-1 lg:col-span-2 xl:col-span-3 text-center p-8">
          <h2 className="text-xl font-bold">No Jobs Available</h2>
          <p className="text-gray-600">
            Check back later for new job postings.
          </p>
        </div>
      )}
      {jobs.map((job) => (
        <Job key={job._id} job={job} />
      ))}
    </div>
  );
}
