import axios from "axios";
import jwtdecode from "jwt-decode";

const API_URL = "https://quizup-backend.up.railway.app/api/users/";

const login = async (token) => {
	const userData = jwtdecode(token);
	const response = await axios.post(API_URL + "login", userData);
	if (response.data) {
		localStorage.setItem("user", JSON.stringify(response.data));
	}
	return response.data;
};

// Logout
const logout = async () => {
	localStorage.removeItem("user");
};

const authService = {
	login,
	logout,
};

export default authService;
