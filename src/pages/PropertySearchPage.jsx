import React, { useState } from "react";

const PropertySearchPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [location, setLocation] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    // Add your search logic here
    console.log("Searching properties with:", {
      searchTerm,
      location,
      minPrice,
      maxPrice,
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-4">
      <h1 className="text-3xl font-bold my-4">Property Search</h1>
      <form
        onSubmit={handleSearch}
        className="w-full max-w-lg bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <div className="mb-4">
          <label
            htmlFor="searchTerm"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Keyword
          </label>
          <input
            type="text"
            id="searchTerm"
            placeholder="e.g. 2 bedroom apartment"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
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
        <div className="flex mb-4">
          <div className="w-1/2 mr-2">
            <label
              htmlFor="minPrice"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Min Price
            </label>
            <input
              type="number"
              id="minPrice"
              placeholder="Min"
              value={minPrice}
              onChange={(e) => setMinPrice(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="w-1/2 ml-2">
            <label
              htmlFor="maxPrice"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Max Price
            </label>
            <input
              type="number"
              id="maxPrice"
              placeholder="Max"
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
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

export default PropertySearchPage;
