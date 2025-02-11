import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const ContactLayout = () => {
  return (
    <>
      <h1 className="text-3xl mb-5 font-bold font-mono">Contact</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti id
        alias dolore recusandae assumenda nobis. Deserunt id, necessitatibus,
        similique debitis perferendis, fugit tempore recusandae nulla aperiam
        non minus! Incidunt itaque enim velit harum et totam iusto nobis
        doloribus delectus nam!
      </p>
      <nav className="mt-10">
        <NavLink
          className={({ isActive }) =>
            `mr-5 px-3 py-1 text-blue ${isActive ? "bg-black text-white" : ""}`
          }
          to="faq"
        >
          Faq
        </NavLink>{" "}
        {/* Relative path */}
        <NavLink
          className={({ isActive }) =>
            `px-3 py-1 text-blue ${isActive ? "bg-black text-white" : ""}`
          }
          to="form"
        >
          Form
        </NavLink>{" "}
      </nav>
      {/* Relative path */}
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default ContactLayout;
