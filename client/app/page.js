"use client";

import Header from "@/components/Header";
import Main from "@/components/Main";
import SearchBar from "@/components/SearchBar";

export default function Home() {
  return (
    <div className="container mx-auto p-4 lg:p-8 bg-[#f5f3ef] rounded">
      <Header />
      <SearchBar />
      <Main />
    </div>
  );
}
