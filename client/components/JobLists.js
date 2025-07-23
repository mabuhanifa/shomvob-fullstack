"use client";
import Job from "./Job";

export const jobs = [
  {
    id: 1,
    title: "Java Developer",
    company: "Example Corp",
    location: "Remote",
    detailsLink: `/jobs/1`,
    description:
      "Build cutting-edge web applications from start to finish, utilizing your expertise in both front-end and back-end technologies.",
    fullDescription:
      "Full description for Java Developer. You will build cutting-edge web applications from start to finish, utilizing your expertise in both front-end and back-end technologies. You will work with a dynamic team, contribute to architecture decisions, and deliver robust solutions for our clients.",
    salary: 70000,
  },
  {
    id: 2,
    title: "Frontend Engineer",
    company: "Tech Solutions",
    location: "Dhaka",
    detailsLink: "/jobs/2",
    description:
      "Develop modern, responsive user interfaces using React and TypeScript.",
    fullDescription:
      "Full description for Frontend Engineer. You will develop modern, responsive user interfaces using React and TypeScript. Collaborate with UX/UI designers to implement design systems and ensure a seamless user experience across all platforms.",
    salary: 55000,
  },
  {
    id: 3,
    title: "Backend Developer",
    company: "Cloudify",
    location: "Remote",
    detailsLink: "/jobs/3",
    description: "Design and implement scalable backend services and APIs.",
    fullDescription:
      "Full description for Backend Developer. You will design and implement scalable backend services and APIs. Work with the front-end team to integrate user-facing elements with server-side logic, and manage database systems and data storage solutions.",
    salary: 60000,
  },
  {
    id: 4,
    title: "DevOps Engineer",
    company: "InfraWorks",
    location: "Chittagong",
    detailsLink: "/jobs/4",
    description:
      "Automate deployment pipelines and manage cloud infrastructure.",
    fullDescription:
      "Full description for DevOps Engineer. You will automate deployment pipelines and manage cloud infrastructure. Collaborate with development teams to ensure seamless integration and delivery of applications, and monitor system performance and reliability.",
    salary: "Negotiable",
  },
  {
    id: 5,
    title: "Mobile App Developer",
    company: "Appify",
    location: "Remote",
    detailsLink: "/jobs/5",
    description: "Create cross-platform mobile applications using Flutter.",
    fullDescription:
      "Full description for Mobile App Developer. You will create cross-platform mobile applications using Flutter. Work closely with product managers and designers to deliver high-quality mobile apps that provide excellent user experiences.",
    salary: 50000,
  },
  {
    id: 6,
    title: "QA Engineer",
    company: "QualityFirst",
    location: "Dhaka",
    detailsLink: "/jobs/6",
    description: "Ensure product quality through automated and manual testing.",
    fullDescription:
      "Full description for QA Engineer. You will ensure product quality through automated and manual testing. Develop and maintain test plans, test cases, and test scripts, and collaborate with development teams to resolve defects and improve product quality.",
    salary: "Negotiable",
  },
];

export default function JobLists() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
      {jobs.map((job) => (
        <Job key={job.id} job={job} />
      ))}
    </div>
  );
}
