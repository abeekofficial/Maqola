import React from "react";
import { NavLink, useRouteError } from "react-router-dom";
import Button from "../../ui/Button";

const ErrorPage = () => {
  const error = useRouteError();
  console.log(error, "xato");
  if (error.status == "404") {
    return (
      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-sm text-center">
            <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-cyan-600 dark:text-primary-500">
              404
            </h1>
            <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">
              Sahifani topa olmadik
            </p>
            <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">
              Kechirasiz, biz bu sahifani topa olmadik. Bosh sahifada ko'p
              narsalarni topishingiz mumkin.
            </p>
            <NavLink className={"flex justify-center"} to="/">
              <Button>Bosh sahifa</Button>
            </NavLink>
          </div>
        </div>
      </section>
    );
  } else {
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center">
          <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-cyan-600 dark:text-primary-500">
            404
          </h1>
          <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">
            Nimadir xato bo'ldi.
          </p>
          <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">
            {error.message}
          </p>
          <NavLink className={"flex justify-center"} to="/">
            <Button>Bosh sahifa</Button>
          </NavLink>
        </div>
      </div>
    </section>;
  }
};

export default ErrorPage;
