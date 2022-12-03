import axios from "axios";

const API_URL = "http://localhost:5000/api/exam/";

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

const examService = {
	getAllExams,
	getFiveExams,
};

export default examService;
