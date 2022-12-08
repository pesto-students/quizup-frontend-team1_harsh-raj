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
	console.log("added to localstorage");
	return response.data;
};

// Logout
const logout = async () => {
	localStorage.removeItem("user");
	await axios.get(API_URL + "logout");
	console.log("removed from localstorage");
};

const userService = {
	getUser,
	logout,
};

export default userService;
