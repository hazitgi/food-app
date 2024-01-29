import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./Styles.scss";
//import { getBrowserRouter } from "./routes/AppRoutes";
import ProductListing from "./app/post-auth/ProductListing";
import { Login } from "./app/pre-auth/log-in/Login";
import ProductSummary from "./app/post-auth/ProductSummary";
import Layout from "./_components/Layout";
//const router = createBrowserRouter(getBrowserRouter());
import { AppProvider } from "./store/Context";
import ProtectedRoute from "./app/post-auth/ProtectedRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        // element: <ProductListing />,
        element: (
          <ProtectedRoute>
            <ProductListing />
          </ProtectedRoute>
        ),
        title: "Create Purchase Order",
      },
      {
        path: "summary",
        // element: <ProductSummary />,
        // element: <ProtectedRoute element={ProductSummary} />,
        element: (
          <ProtectedRoute>
            <ProductSummary />
          </ProtectedRoute>
        ),
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

function App() {
  return (
    <div className="App">
      <AppProvider>
        <RouterProvider router={router} />
      </AppProvider>
    </div>
  );
}

export default App;
