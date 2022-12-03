import { configureStore } from "@reduxjs/toolkit";
import quizReducer from "../features/quizzes/quizSlice";
import examReducer from "../features/exams/examSlice";

export const store = configureStore({
	reducer: {
		quizzes: quizReducer,
		exams: examReducer,
	},
});
