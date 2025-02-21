import React from "react";

const SearchBarTest = () => {
  return (
    <div className="w-screen h-[calc(100svh-140px)] flex flex-col items-center mt-12">
      <h1>Search Bar</h1>
      <input
        className="w-1/2 border border-gray-400 p-2 rounded-sm mt-4 focus:outline focus:outline-blue-500"
        type="text"
        placeholder="Search Properties...."
      />
      {/* Suggestion Section */}
    </div>
  );
};

export default SearchBarTest;
