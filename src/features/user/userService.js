import axios from "axios";

const API_URL = "http://localhost:5000/auth/";

// Get user details after login
const getUser = async () => {
	const response = await axios.get(API_URL + "login/success", {
		withCredentials: true,
	});
	if (response.data) {
		localStorage.setItem("user", JSON.stringify(response.data));
	}
	return response.data;
};

// Logout
const logout = async () => {
	localStorage.removeItem("user");
	await axios.get(API_URL + "logout");
};

const userService = {
	getUser,
	logout,
};

export default userService;
