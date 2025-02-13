import React from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";

const BreadCrumbs = () => {
  const location = useLocation();
  let currentLink = "";

  const crumbs = location.pathname
    .split("/")
    .filter((crumb) => crumb !== "")
    .map((crumb, index) => {
      currentLink += `/${crumb}`;
      return (
        <div
          key={index}
          className="inline-block mr-3 after:content-['>'] after:text-blue-500 last:after:content-none after:ml-2"
        >
          <Link to={currentLink} className="text-blue-500 font-medium">
            {crumb}
          </Link>
        </div>
      );
    });

  return (
    <div className="max-w-[1200px] mx-auto my-5 inline-block">{crumbs}</div>
  );
};

export default BreadCrumbs;
