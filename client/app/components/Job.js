import { Bookmark, Github, X } from "lucide-react";
import { useState } from "react";
import JobApplyForm from "./JobApplyForm";

export default function Job({ bg }) {
  const [showModal, setShowModal] = useState(false);
  const [showDetailsModal, setShowDetailsModal] = useState(false);

  return (
    <>
      <div
        className={`${bg} p-6 rounded-lg shadow-md flex flex-col justify-between`}
      >
        <div className="flex justify-between items-start">
          <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
            <Github />
          </div>
          <button>
            <Bookmark />
          </button>
        </div>
        <h3 className="text-lg font-bold mt-4">Java Developer</h3>
        <p className="text-sm text-gray-600 mt-2 flex-grow">
          Build cutting-edge web applications from start to finish, utilizing
          your expertise in both front-end and back-end technologies.
        </p>
        <div className="flex space-x-2 mt-4">
          <span className="bg-white text-xs px-2 py-1 rounded-md border border-gray-100">
            Full Time
          </span>
          <span className="bg-white text-xs px-2 py-1 rounded-md border border-gray-100">
            Mid Level
          </span>
        </div>
        <div className="flex space-x-4 mt-6">
          <button
            className="w-full border border-gray-400 text-gray-800 py-2 rounded-lg"
            onClick={() => setShowDetailsModal(true)}
          >
            Details
          </button>
          <button
            className="w-full bg-black text-white py-2 rounded-lg"
            onClick={() => setShowModal(true)}
          >
            Apply Now
          </button>
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div
            className="absolute inset-0 bg-black bg-opacity-40 backdrop-blur-sm"
            onClick={() => setShowModal(false)}
          />
          <div className="relative bg-white rounded-lg shadow-lg p-8 z-10 min-w-[300px]">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
              onClick={() => setShowModal(false)}
            >
              <X />
            </button>
            <h2 className="text-xl font-bold mb-4">Apply for Java Developer</h2>
            <JobApplyForm onClose={() => setShowModal(false)} />
          </div>
        </div>
      )}

      {showDetailsModal && (
        <ShowDetailsModal setShowDetailsModal={setShowDetailsModal} />
      )}
    </>
  );
}

function ShowDetailsModal({ setShowDetailsModal }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden p-5">
      <div
        className="absolute inset-0 bg-black bg-opacity-40 backdrop-blur-sm"
        onClick={() => setShowDetailsModal(false)}
      />
      <div className="relative bg-white rounded-lg shadow-lg p-8 z-10 w-full max-w-5xl h-[80vh] flex flex-col overflow-y-auto">
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
          onClick={() => setShowDetailsModal(false)}
        >
          <X />
        </button>
        <div className="mb-6">
          <h2 className="text-2xl font-bold mb-2">Java Developer</h2>
          <div className="flex flex-col md:flex-row md:items-center md:space-x-6 text-gray-700 text-sm mb-2">
            <span>Company: Example Corp</span>
            <span>Location: Remote</span>
          </div>
          <a
            href="#"
            className="text-blue-600 underline text-sm"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Full Details
          </a>
        </div>
        <p className="mb-4 text-gray-700">
          Build cutting-edge web applications from start to finish, utilizing
          your expertise in both front-end and back-end technologies. You will
          work with a dynamic team, contribute to architecture decisions, and
          deliver robust solutions for our clients. Lorem, ipsum dolor sit amet
          consectetur adipisicing elit. Blanditiis deleniti nobis temporibus
          culpa neque necessitatibus totam error vel laboriosam repellat
          excepturi libero magni, nam architecto officia! Mollitia laudantium
          debitis quas porro a ipsam nulla, incidunt animi obcaecati quis
          provident, ipsum, veniam ex ducimus dolorem ea earum? Expedita
          necessitatibus qui illum aspernatur autem, mollitia voluptates
          obcaecati aut? Maiores ipsa mollitia enim dolor ad aspernatur
          reiciendis vel tempora dolorem, accusantium eius quisquam illum est
          pariatur eligendi soluta. Explicabo neque adipisci quibusdam pariatur
          quidem ex itaque inventore nisi dignissimos! Consequuntur dignissimos
          similique molestias, sit ullam et magnam assumenda vel blanditiis,
          sapiente tempore? Dolorem dignissimos enim exercitationem. Debitis
          adipisci deserunt molestias ipsam eius blanditiis repellendus
          veritatis ad id in quis ex amet totam, atque dolor esse suscipit
          inventore voluptatum atque?
        </p>
        <ul className="mb-4 text-gray-600 list-disc pl-5">
          <li>Company: Example Corp</li>
          <li>Location: Remote</li>
          <li>Type: Full Time</li>
          <li>Level: Mid Level</li>
        </ul>
        <div className="mt-auto pt-4">
          <button
            className="bg-black text-white px-4 py-2 rounded-lg w-full"
            onClick={() => setShowDetailsModal(false)}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
