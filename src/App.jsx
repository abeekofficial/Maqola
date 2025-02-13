import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import About from "./pages/about/about";
import Home from "./pages/Home/home";
import RootLayout from "./layout/RootLayout";
import ContactLayout from "./layout/ContactLayout";
import Faq from "./pages/help/Faq";
import Form from "./pages/help/Form";
import PageNotFound from "./pages/help/PageNotFound";
import ArticlesLayout from "./layout/ArticlesLayout";
import Articles from "./pages/articles/Articles";
import ArticlesDetail from "./pages/articles/ArticlesDetail";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        { index: true, element: <Home /> },
        { path: "about", element: <About /> },
        {
          path: "contact",
          element: <ContactLayout />,
          children: [
            { path: "faq", element: <Faq /> }, // Nested route for FAQ
            { path: "form", element: <Form /> }, // Nested route for Form
          ],
        },
        {
          path: "articles",
          element: <ArticlesLayout />,
          children: [
            { index: true, element: <Articles /> },
            { path: ":id", element: <ArticlesDetail /> },
          ],
        },
        { path: "*", element: <PageNotFound /> },
      ],
    },
  ]);

  return <RouterProvider router={routes} />;
}

export default App;
