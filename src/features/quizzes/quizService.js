import axios from "axios";
import { API_URL } from "../../constants";

const QUIZ_API_URL = API_URL + "api/quiz/";

const getFiveQuizzes = async () => {
	const response = await axios.get(QUIZ_API_URL + 5);
	return response.data;
};

const getAllQuizzes = async () => {
	const response = await axios.get(QUIZ_API_URL);
	return response.data;
};

const getOneQuiz = async (quizId) => {
	const response = await axios.get(QUIZ_API_URL + quizId);
	return response.data;
};

const quizService = {
	getFiveQuizzes,
	getAllQuizzes,
	getOneQuiz,
};

export default quizService;
