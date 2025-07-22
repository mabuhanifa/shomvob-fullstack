import Job from "./Job";

export default function JobLists() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
      <Job bg="bg-blue-100" />

      <Job bg="bg-green-100" />

      <Job bg="bg-yellow-50" />

      <Job bg="bg-red-100" />

      <Job bg="bg-purple-100" />

      <Job bg="bg-pink-100" />
    </div>
  );
}
