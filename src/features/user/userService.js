import axios from "axios";

const API_URL = "http://quizup-backend.up.railway.app/api/users/";

// Add quiz result to user data
const addQuizResult = async (quizResult) => {
	const response = await axios.post(API_URL + "quiz", quizResult);
	return response.data;
};

// Add mock test result to user data
const addTestResult = async (testResult) => {
	const response = await axios.post(API_URL + "test", testResult);
	return response.data;
};

// Get user data
const getUser = async (email) => {
	const response = await axios.post(API_URL + "getme", email);
	return response.data;
};

const userService = {
	addQuizResult,
	addTestResult,
	getUser,
};

export default userService;
