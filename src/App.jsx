// react-router-dom
import { RouterProvider, createBrowserRouter } from "react-router-dom"; // v6...

// pages
import Home from "./pages/Home/home";
import About from "./pages/about/about";
import Articles from "./pages/articles/Articles";
import Faq from "./pages/help/Faq";
import Form from "./pages/help/Form";
import ErrorPage from "./pages/help/ErrorPage";
import ArticleDetail from "./pages/articles/ArticlesDetail";
// layouts
import RootLayout from "./layout/RootLayout";
import ContactLayout from "./layout/ContactLayout";
import ArticlesLayout from "./layout/ArticlesLayout";
function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "contact",
          element: <ContactLayout />,
          children: [
            {
              path: "faq",
              element: <Faq />,
            },
            {
              path: "form",
              element: <Form />,
            },
          ],
        },
        {
          path: "articles",
          element: <ArticlesLayout />,
          children: [
            {
              index: true,
              element: <Articles />,
            },
            {
              path: ":id",
              element: <ArticleDetail />,
            },
          ],
        },
      ],
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
