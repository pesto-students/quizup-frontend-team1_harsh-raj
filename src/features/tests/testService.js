import axios from "axios";

const API_URL = "https://quizup-backend.onrender.com/api/test/";

const getTest = async (testId) => {
	const response = await axios.get(API_URL + testId);
	return response.data;
};

const testService = {
	getTest,
};

export default testService;
