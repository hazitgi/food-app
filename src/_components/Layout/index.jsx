import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import { AppContext } from "../../store/Context";

const Layout = () => {
  const {state} = useContext(AppContext);

  return (
    <div>
      <header className="main-header">
        <div className="container">
          <h1 className="primary-header">{state.title}</h1>
        </div>
      </header>
      <Outlet />
    </div>
  );
};

export default Layout;
