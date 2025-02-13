import React from "react";
import { useParams } from "react-router-dom"; // Assuming you're using react-router for dynamic routes
import { useFetch } from "../../hooks/useFetch";

const ArticlesDetail = () => {
  const { id } = useParams(); // Getting the article ID from the route
  const {
    data: article,
    error,
    loading,
  } = useFetch(`http://localhost:3000/articles/${id}`);

  if (loading) return <h3>Yuklanmoqda...</h3>; // Show loading state
  if (error) return <p>Error: {error}</p>; // Show error if any

  return (
    <div className="max-w-4xl mx-auto p-5">
      {article ? (
        <article>
          <h2 className="text-3xl font-bold mb-4">{article.title}</h2>{" "}
          {/* Article Title */}
          <div className="flex gap-3 mb-4">
            <h5 className="font-medium text-gray-500">{article.author}</h5>
            <p className="text-gray-400">{article.date}</p>
          </div>
          <img
            className="w-full h-64 object-cover rounded-lg mb-4"
            src={article.image}
            alt={article.title}
          />
          <h6 className="mb-2 text-lg font-semibold text-blue-600">
            {article.category}
          </h6>{" "}
          {/* Display Category */}
          <p className="text-gray-700 mb-5">{article.content}</p>{" "}
          {/* Article Content */}
          {/* Display tags */}
          <div className="flex flex-wrap gap-2 mb-3">
            {article.tags &&
              article.tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-gray-200 text-gray-800 text-xs font-semibold px-2.5 py-0.5 rounded"
                >
                  {tag}
                </span>
              ))}
          </div>
        </article>
      ) : (
        <h3>Maqola topilmadi.</h3> // Show message if the article is not found
      )}
    </div>
  );
};

export default ArticlesDetail;
