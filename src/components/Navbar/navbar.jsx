import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

export default function Navbar() {
  return (
    <header
      className={`sticky z-20 top-0 right-0 left-0  py-4 px-4 mx-auto ${`bg-[#fff] shadow-lg duration-500 ease-in-out shadow-[#ccc]`}`}
    >
      <nav className="container  flex justify-between items-center px-16">
        <Link to={"/"} className="font-bold flex text-2xl ">
          <h1 className="flex">
            <div className="flex gap-1">
              <img src={logo} alt="" width={60} />
              <h1 className=" font-bold text-2xl pt-2">Maqola</h1>
            </div>
          </h1>
        </Link>

        <ul className="gap-12 items-center flex ">
          <Link
            to={"/login"}
            className=" gap-2 items-center hover:text-green-500 transition-all ease-out hidden md:flex"
          >
            <li className="nav-link font-bold text-2xl ">Login</li>
          </Link>
          <Link
            to={"/register"}
            className=" gap-2 items-center hover:text-green-500 transition-all ease-out hidden md:flex"
          >
            <li className="nav-link font-bold text-2xl ">Register</li>
          </Link>
        </ul>
      </nav>
    </header>
  );
}
