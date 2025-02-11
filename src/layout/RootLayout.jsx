import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <>
      <header className="flex justify-between mt-3 w-[100%]">
        <h3 className="font-bold text-2xl">Maqola</h3>
        <nav className="">
          <NavLink to="/">Bosh sahifa</NavLink>
          <NavLink to="/about">Biz haqimizda</NavLink>
          <NavLink to="/articles">Maqolalar</NavLink>
          <NavLink to="/contactLayout">Bog'lanish</NavLink>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer className="text-center mt-3 bg-gray-200 p-3 rounded-md">
        All rights reserved by{" "}
        <a className="text-sky-700 underline" href="https://abeek.netlify.app">
          Abbosbek Ruzimov
        </a>
      </footer>
    </>
  );
};

export default RootLayout;
