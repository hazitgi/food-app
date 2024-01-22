import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import { MyContext } from "../../App";

const Layout = () => {
  const titleContext = useContext(MyContext);
  return (
    <div>
      <header className="main-header">
        <div className="container">
          <h1 className="primary-header">{titleContext.title}</h1>
        </div>
      </header>
      <Outlet />
    </div>
  );
};

export default Layout;
