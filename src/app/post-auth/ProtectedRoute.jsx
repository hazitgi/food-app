import React, { useContext, useEffect } from "react";
import { AppContext } from "../../store/Context";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const { state, dispatch } = useContext(AppContext);
  const { loggedIn } = state;

  useEffect(() => {
    if (!loggedIn) {
      dispatch({ type: "LOG_OUT" });
    }
  }, [loggedIn, dispatch]);

  return loggedIn ? children : <Navigate to="/login" />;
}

export default ProtectedRoute;
