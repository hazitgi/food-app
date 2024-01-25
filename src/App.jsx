import React, { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./Styles.scss";
//import { getBrowserRouter } from "./routes/AppRoutes";
import ProductListing from "./app/post-auth/ProductListing";
import { Login } from "./app/pre-auth/log-in/Login";
import ProductSummary from "./app/post-auth/ProductSummary";
import Layout from "./_components/Layout";

//const router = createBrowserRouter(getBrowserRouter());

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <ProductListing />,
        title: "Create Purchase Order",
      },
      {
        path: "summary",
        element: <ProductSummary />,
        title: "Purchase Summary",
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
    title: "login",
  },
]);
const MyContext = React.createContext({
  user: "",
  loggedIn: false,
  cart : localStorage.getItem("cart")? JSON.parse(localStorage.getItem("cart")) : [],
});

function App() {
  const [title, setTitle] = useState("title");
  const changeTitle = (value) => {
    setTitle(value);
  };
  return (
    <div className="App">
      <MyContext.Provider value={{ title, changeTitle }}>
        <RouterProvider router={router} />
      </MyContext.Provider>
    </div>
  );
}

export { MyContext };

export default App;
