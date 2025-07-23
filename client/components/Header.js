"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import LoginModal from "./LoginModal";

export default function Header() {
  const [showLogin, setShowLogin] = useState(false);
  const router = useRouter();

  const handleLoginSuccess = () => {
    setShowLogin(false);
    router.push("/dashboard");
  };
  return (
    <>
      <header className="flex justify-between items-center pb-2">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold" onClick={() => router.push("/")}>
            Jobseeker
          </h1>
        </div>
        <div className="hidden md:flex items-center space-x-8 font-semibold">
          <button
            className="border rounded-lg px-6 py-2 bg-white shadow-lg"
            onClick={() => setShowLogin(true)}
          >
            Post a Job
          </button>
        </div>
        <div className="flex items-center space-x-4">
          <button className="p-2 rounded-full hover:bg-gray-200">
            <i className="fas fa-cog"></i>
          </button>
          <button className="p-2 rounded-full hover:bg-gray-200">
            <i className="fas fa-bell"></i>
          </button>
          <img
            src="https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png"
            alt="User"
            className="w-10 h-10 rounded-full"
          />
        </div>
      </header>
      {showLogin && (
        <LoginModal
          onClose={() => setShowLogin(false)}
          onLoginSuccess={handleLoginSuccess}
        />
      )}
    </>
  );
}
