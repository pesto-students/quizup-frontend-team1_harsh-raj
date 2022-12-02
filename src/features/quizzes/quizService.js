import axios from "axios";

const API_URL = "http://localhost:5000/api/quiz/";

const getFiveQuizzes = async () => {
	const response = await axios.get(API_URL + 5);
	return response.data;
};

const getAllQuizzes = async () => {
	const response = await axios.get(API_URL);
	return response.data;
};

const quizService = {
	getFiveQuizzes,
	getAllQuizzes,
};

export default quizService;
