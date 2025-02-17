import React, { useState } from "react";

const AgentSearchPage = () => {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [agency, setAgency] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    // Add your search logic here
    console.log("Searching agents with:", {
      name,
      location,
      agency,
    });
  };

  return (
    <div className=" bg-gray-100 flex flex-col items-center p-4">
      <h1 className="text-3xl font-bold my-4">Agent Search</h1>
      <form
        onSubmit={handleSearch}
        className="w-full max-w-lg bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Agent Name
          </label>
          <input
            type="text"
            id="name"
            placeholder="Enter agent name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="location"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Location
          </label>
          <input
            type="text"
            id="location"
            placeholder="City or ZIP code"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="agency"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Agency
          </label>
          <input
            type="text"
            id="agency"
            placeholder="Enter agency name"
            value={agency}
            onChange={(e) => setAgency(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default AgentSearchPage;
