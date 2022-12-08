import { Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

function PrivateRoutes() {
	const { user, isSuccess } = useSelector((state) => state.auth);
	return user || isSuccess ? <Outlet /> : <Navigate to="/login" />;
}

export default PrivateRoutes;
