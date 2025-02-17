import React from "react";

const featuredProperties = [
  {
    id: 1,
    title: "Modern Apartment in Sydney",
    imageUrl: "https://source.unsplash.com/featured/?apartment",
    price: "$750,000",
  },
  {
    id: 2,
    title: "Cozy House in Melbourne",
    imageUrl: "https://source.unsplash.com/featured/?house",
    price: "$850,000",
  },
  {
    id: 3,
    title: "Luxury Villa in Brisbane",
    imageUrl: "https://source.unsplash.com/featured/?villa",
    price: "$1,200,000",
  },
];

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <section
        className="bg-cover bg-center h-96"
        style={{
          backgroundImage:
            'url("https://source.unsplash.com/1600x900/?australia,city")',
        }}
      >
        <div className="flex items-center justify-center h-full bg-black bg-opacity-50">
          <div className="text-center">
            <h1 className="text-white text-5xl font-bold">
              Nepali in Australia Real Estate
            </h1>
            <p className="text-white text-xl mt-4">
              Discover your dream property in Australia
            </p>
          </div>
        </div>
      </section>

      {/* Featured Properties Section */}
      <section className="py-10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Featured Properties</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredProperties.map((property) => (
              <div
                key={property.id}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <img
                  src={property.imageUrl}
                  alt={property.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-bold">{property.title}</h3>
                  <p className="text-gray-600 mt-2">{property.price}</p>
                  <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-10 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-100 p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-2">Property Listings</h3>
              <p>
                Browse through a curated list of properties tailored for the
                Nepali community in Australia.
              </p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-2">
                Real Estate Consulting
              </h3>
              <p>
                Get expert advice on property investments and market trends in
                Australia.
              </p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-2">Community Support</h3>
              <p>
                Connect with fellow Nepali investors and homeowners across
                Australia.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
