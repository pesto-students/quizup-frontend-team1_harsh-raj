import axios from "axios";

const API_URL = "http://localhost:5000/api/users/";

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

const userService = {
	addQuizResult,
	addTestResult,
};

export default userService;