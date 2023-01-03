import axios from "axios";

const API_URL = "https://quizup-backend.up.railway.app/api/exam/";

// Get 5 exams (for user dashboard)
const getFiveExams = async () => {
	const response = await axios.get(API_URL + 5);
	return response.data;
};

// Get all exams
const getAllExams = async () => {
	const response = await axios.get(API_URL);
	return response.data;
};

// Get all tests in an exam
const getAllTests = async (examId) => {
	const response = await axios.get(API_URL + examId);
	return response.data;
};

const examService = {
	getAllExams,
	getFiveExams,
	getAllTests,
};

export default examService;
