import { Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

function PrivateRoutes() {
	const { user } = useSelector((state) => state.auth);
	return user ? <Outlet /> : <Navigate to="/login" />;
}

export default PrivateRoutes;
