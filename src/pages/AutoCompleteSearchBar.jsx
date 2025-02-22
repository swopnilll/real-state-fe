import React, { useEffect, useState } from "react";

const SearchBarTest = () => {
  const mockPropertyList = [
    {
      id: 1,
      title: "Sydney Harbour View Apartment",
      location: "Sydney, NSW",
      price: "AUD 1,200,000",
      type: "Apartment",
      bedrooms: 2,
      bathrooms: 2,
      area: "85 sqm",
    },
    {
      id: 2,
      title: "Luxury Beachfront Villa",
      location: "Gold Coast, QLD",
      price: "AUD 3,500,000",
      type: "House",
      bedrooms: 5,
      bathrooms: 4,
      area: "320 sqm",
    },
    {
      id: 3,
      title: "Modern Suburban Home",
      location: "Melbourne, VIC",
      price: "AUD 900,000",
      type: "House",
      bedrooms: 3,
      bathrooms: 2,
      area: "150 sqm",
    },
    {
      id: 4,
      title: "Cozy Cottage",
      location: "Adelaide Hills, SA",
      price: "AUD 650,000",
      type: "Cottage",
      bedrooms: 2,
      bathrooms: 1,
      area: "90 sqm",
    },
    {
      id: 5,
      title: "High-Rise City Apartment",
      location: "Brisbane, QLD",
      price: "AUD 850,000",
      type: "Apartment",
      bedrooms: 2,
      bathrooms: 2,
      area: "95 sqm",
    },
  ];

  const [filteredList, setFilteredList] = useState(mockPropertyList);

  const [textInput, setTextInput] = useState("");

  useEffect(() => {
    const updatedList = mockPropertyList.filter((item) =>
      item.title.toLowerCase().includes(textInput.toLowerCase())
    );

    setFilteredList(updatedList);
  }, [filteredList, textInput]);

  return (
    <div className="w-screen h-[calc(100svh-140px)] flex flex-col items-center mt-12">
      <h1>Search Bar</h1>
      <input
        className="w-1/2 border border-gray-400 p-2 rounded-sm mt-4 focus:outline focus:outline-blue-500"
        type="text"
        placeholder="Search Properties...."
        onChange={(e) => setTextInput(e.target.value)}
        value={textInput}
      />

      {/* Suggestion Section */}
      <ul className="w-1/2 max-h-[240px] shadow-md overflow-auto">
        {filteredList?.map((item) => {
          return (
            <li className="p-2 cursor-pointer hover:bg-gray-200" key={item.id}>
              {item.title}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SearchBarTest;
