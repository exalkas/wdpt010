import { useContext } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { AppContext } from "./Context";

function ProtectedRoutes() {

    const {state} = useContext(AppContext)

    if (state.user._id) {
        return <Outlet />
    }

    return <Navigate to='/'/>
}

export default ProtectedRoutes;