import axios from "axios";
import jwtdecode from "jwt-decode";

const API_URL = "http://localhost:5000/api/users/";

const login = async (token) => {
	const userData = jwtdecode(token);
	const response = await axios.post(API_URL + "login", userData);
	if (response.data) {
		console.log(response.data);
		localStorage.setItem("user", JSON.stringify(response.data));
	}
	return response.data;
};

// Logout
const logout = async () => {
	localStorage.removeItem("user");
	await axios.get(API_URL + "logout");
};

const authService = {
	login,
	logout,
};

export default authService;
