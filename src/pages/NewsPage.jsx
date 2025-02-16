/* global process */
import React, { useEffect, useState } from "react";

const NewsPage = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      console.log("FEtch news called");

      console.log(import.meta.env.VITE_NEWS_API_KEY);

      try {
        const res = await fetch(
          `https://newsapi.org/v2/top-headlines?country=us&apiKey=${
            import.meta.env.VITE_NEWS_API_KEY
          }`
        );

        const data = await res.json();

        console.log(data);

        if (data.status === "ok") {
          setArticles(data.articles);
        } else {
          setError(data.message || "Failed to fetch news.");
        }
      } catch (err) {
        setError("An error occurred while fetching news.");
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-6 text-center">News Page</h1>
      {loading && <p className="text-center">Loading news...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article) => (
          <div key={article.url} className="bg-white rounded shadow p-4">
            {article.urlToImage && (
              <img
                src={article.urlToImage}
                alt={article.title}
                className="w-full h-48 object-cover rounded mb-4"
              />
            )}
            <h2 className="text-xl font-semibold mb-2">{article.title}</h2>
            <p className="text-gray-700 mb-2">
              {article.description || "No description available."}
            </p>
            <a
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              Read more
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsPage;
