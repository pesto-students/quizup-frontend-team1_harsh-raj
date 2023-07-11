import axios from "axios";
import { API_URL } from "../../constants";

const TEST_API_URL = API_URL + "api/test/";

const getTest = async (testId) => {
	const response = await axios.get(TEST_API_URL + testId);
	return response.data;
};

const testService = {
	getTest,
};

export default testService;
