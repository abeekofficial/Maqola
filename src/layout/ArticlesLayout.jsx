import React from "react";
import { Outlet } from "react-router";

const ArticlesLayout = () => {
  return (
    <>
      <h1 className="text-3xl mb-5 font-bold font-mono">Maqolalar</h1>
      <hr />
      <Outlet />
    </>
  );
};

export default ArticlesLayout;
