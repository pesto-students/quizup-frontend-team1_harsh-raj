import { configureStore } from "@reduxjs/toolkit";
import quizReducer from "../features/quizzes/quizSlice";

export const store = configureStore({
	reducer: {
		quizzes: quizReducer,
	},
});
