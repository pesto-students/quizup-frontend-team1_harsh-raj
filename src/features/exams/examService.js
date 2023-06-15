import axios from "axios";
import { API_URL } from "../../constants";

const EXAM_API_URL = API_URL + "api/exam/";

// Get 5 exams (for user dashboard)
const getFiveExams = async () => {
	const response = await axios.get(EXAM_API_URL + 5);
	return response.data;
};

// Get all exams
const getAllExams = async () => {
	const response = await axios.get(EXAM_API_URL);
	return response.data;
};

// Get all tests in an exam
const getAllTests = async (examId) => {
	const response = await axios.get(EXAM_API_URL + examId);
	return response.data;
};

const examService = {
	getAllExams,
	getFiveExams,
	getAllTests,
};

export default examService;
