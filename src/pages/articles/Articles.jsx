import React from "react";
import { useFetch } from "../../hooks/useFetch";
import { NavLink } from "react-router-dom";

const Articles = () => {
  const {
    data: articles,
    error,
    loading,
  } = useFetch("http://localhost:3000/articles");

  console.log(" => articles", articles); // Logs fetched data

  return (
    <div>
      <h2 className="font-medium text-2xl mb-3">Maqolalar bo'limi</h2>
      {loading && <h3>Yuklanmoqda...</h3>} {/* Show loading */}
      {error && <p>Error: {error}</p>}{" "}
      {/* Show error message if there's an error */}
      {/* Ensure articles is an array and not null */}
      {articles && articles.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {" "}
          {/* 2 columns layout on medium screens and above */}
          {articles.map((article) => (
            <article key={article.id}>
              <a
                href="#"
                className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-sm md:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
              >
                <img
                  className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
                  src={article.image}
                  alt={article.title}
                />
                <div className="flex flex-col justify-between p-4 leading-normal">
                  <h6 className="mb-1 text-sm font-semibold text-blue-600 dark:text-blue-400">
                    {article.category}
                  </h6>{" "}
                  {/* Display the category */}
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {article.title}
                  </h5>
                  <NavLink
                    className={"text-blue-600 underline"}
                    to={`/articles/${article.id}`}
                  >
                    Batafsil ko'rish
                  </NavLink>
                </div>
              </a>
            </article>
          ))}
        </div>
      ) : (
        !loading && <h3>Maqolalar topilmadi.</h3>
      )}
    </div>
  );
};

export default Articles;
