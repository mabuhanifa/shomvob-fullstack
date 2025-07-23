import { useState } from "react";

export default function JobApplyForm({ onSuccess, onClose }) {
  const [form, setForm] = useState({ name: "", email: "", cv: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    if (onSuccess) onSuccess();
  };

  return (
    <div>
      {submitted ? (
        <div className="text-center">
          <h3 className="text-lg font-bold mb-2">Application Submitted!</h3>
          <p className="mb-4 text-green-600">Thank you for applying.</p>
          <button
            className="bg-black text-white px-4 py-2 rounded-lg"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Name</label>
            <input
              type="text"
              name="name"
              required
              value={form.name}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              name="email"
              required
              value={form.email}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">
              CV Link or Short Text
            </label>
            <input
              type="text"
              name="cv"
              required
              value={form.cv}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2"
            />
          </div>
          <button
            type="submit"
            className="bg-black text-white px-4 py-2 rounded-lg w-full"
          >
            Submit
          </button>
        </form>
      )}
    </div>
  );
}
