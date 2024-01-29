import React, { useContext, useEffect } from "react";
import { AppContext } from "../../store/Context";
import { Outlet, Navigate } from "react-router-dom";

function ProtectedRoute({ children, ...prop }) {
    const { state, dispatch } = useContext(AppContext);
    const { loggedIn } = state;
    useEffect(() => {
        if (!loggedIn) {
            dispatch({ type: "LOG_OUT" });
        }
    }, [loggedIn, dispatch]);

    if (loggedIn) {
        return <Outlet />;
    } else {
        return <Navigate to="/login" />;
    }
}

export default ProtectedRoute;
