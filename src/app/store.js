import { configureStore } from "@reduxjs/toolkit";
import quizReducer from "../features/quizzes/quizSlice";
import examReducer from "../features/exams/examSlice";
import testReducer from "../features/tests/testSlice";
import authReducer from "../features/auth/authSlice";

export const store = configureStore({
	reducer: {
		quizzes: quizReducer,
		exams: examReducer,
		tests: testReducer,
		auth: authReducer,
	},
});
