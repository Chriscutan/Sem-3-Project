import React, { useState } from "react";

function SearchBar({ page }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center space-x-3 max-w-4xl mx-auto mt-5"
    >
      <input
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        type="text"
        placeholder={`Search by ${page}`}
        className="bg-gray-200 rounded-lg p-5 px-3 outline-none w-full"
      />
      <button className="bg-green-400 text-white font-bold p-4 rounded-lg hover:scale-110 transition-all duration-200 ease-in-out">
        Search
      </button>
    </form>
  );
}

export default SearchBar;
