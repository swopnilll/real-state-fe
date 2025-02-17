import React from "react";

const Commercial = () => {
  const ads = [
    {
      id: 1,
      title: "Traditional Nepali Food Sale",
      description:
        "Enjoy authentic Nepali cuisine delivered right to your door by trusted Nepali drivers. Savor momos, dal bhat, and more!",
      image: "https://source.unsplash.com/300x200/?nepali-food",
    },
    {
      id: 2,
      title: "Reliable Nepali Movers",
      description:
        "Our experienced Nepali movers ensure a smooth and safe relocation service across Australia. Move with confidence!",
      image: "https://source.unsplash.com/300x200/?movers",
    },
    {
      id: 3,
      title: "Commercial Real Estate Services",
      description:
        "Tailored commercial real estate solutions for the Nepali community. Find the perfect space for your business in Australia.",
      image: "https://source.unsplash.com/300x200/?real-estate",
    },
    {
      id: 4,
      title: "Cultural Nepali Art & Crafts",
      description:
        "Bring a piece of Nepali heritage into your home with our exclusive range of art and crafts. Unique, handmade, and authentic!",
      image: "https://source.unsplash.com/300x200/?handicraft",
    },
    {
      id: 1,
      title: "Traditional Nepali Food Sale",
      description:
        "Enjoy authentic Nepali cuisine delivered right to your door by trusted Nepali drivers. Savor momos, dal bhat, and more!",
      image: "https://source.unsplash.com/300x200/?nepali-food",
    },
    {
      id: 2,
      title: "Reliable Nepali Movers",
      description:
        "Our experienced Nepali movers ensure a smooth and safe relocation service across Australia. Move with confidence!",
      image: "https://source.unsplash.com/300x200/?movers",
    },
    {
      id: 3,
      title: "Commercial Real Estate Services",
      description:
        "Tailored commercial real estate solutions for the Nepali community. Find the perfect space for your business in Australia.",
      image: "https://source.unsplash.com/300x200/?real-estate",
    },
    {
      id: 4,
      title: "Cultural Nepali Art & Crafts",
      description:
        "Bring a piece of Nepali heritage into your home with our exclusive range of art and crafts. Unique, handmade, and authentic!",
      image: "https://source.unsplash.com/300x200/?handicraft",
    },
  ];

  return (
    <div
      style={{
        padding: "40px",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        backgroundColor: "#f8f9fa",
        minHeight: "100vh",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          marginBottom: "20px",
          color: "#333",
        }}
      >
        Commercial Services for Nepali in Australia
      </h1>
      <p
        style={{
          textAlign: "center",
          marginBottom: "40px",
          color: "#555",
          fontSize: "18px",
        }}
      >
        Discover our curated range of products and services crafted especially
        for the Nepali community in Australia.
      </p>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "20px",
        }}
      >
        {ads.map((ad) => (
          <div
            key={ad.id}
            style={{
              backgroundColor: "#fff",
              border: "1px solid #ddd",
              borderRadius: "10px",
              width: "300px",
              padding: "15px",
              boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
              transition: "transform 0.3s ease",
              marginBottom: "20px",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "scale(1.05)")
            }
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            <div
              style={{
                width: "100%",
                height: "200px",
                overflow: "hidden",
                borderRadius: "8px",
              }}
            >
              <img
                src={ad.image}
                alt={ad.title}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src =
                    "https://via.placeholder.com/300x200?text=No+Image";
                }}
              />
            </div>
            <h2
              style={{
                fontSize: "20px",
                margin: "15px 0 10px",
                color: "#333",
              }}
            >
              {ad.title}
            </h2>
            <p style={{ fontSize: "16px", color: "#666" }}>{ad.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Commercial;
