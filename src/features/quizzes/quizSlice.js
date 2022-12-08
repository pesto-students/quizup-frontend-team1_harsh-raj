import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import quizService from "./quizService";

const initialState = {
	quizzes: [],
	isError: false,
	isSuccess: false,
	isLoading: false,
	message: "",
};

// Get five quizzes (for user dashboard)
export const getFiveQuizzes = createAsyncThunk(
	"quizzes/getFive",
	async (_, thunkAPI) => {
		try {
			return await quizService.getFiveQuizzes();
		} catch (err) {
			const message =
				(err.response && err.response.data && err.response.data.message) ||
				err.message ||
				err.toString();
			return thunkAPI.rejectWithValue(message);
		}
	}
);

// Get all quizzes
export const getAllQuizzes = createAsyncThunk(
	"quizzes/getAll",
	async (_, thunkAPI) => {
		try {
			return await quizService.getAllQuizzes();
		} catch (err) {
			const message =
				(err.response && err.response.data && err.response.data.message) ||
				err.message ||
				err.toString();
			return thunkAPI.rejectWithValue(message);
		}
	}
);

// Get single quiz
export const getOneQuiz = createAsyncThunk(
	"quizzes/getOne",
	async (quizId, thunkAPI) => {
		try {
			return await quizService.getOneQuiz(quizId);
		} catch (err) {
			const message =
				(err.response && err.response.data && err.response.data.message) ||
				err.message ||
				err.toString();
			return thunkAPI.rejectWithValue(message);
		}
	}
);

export const quizSlice = createSlice({
	name: "quiz",
	initialState,
	reducers: {
		reset: (state) => initialState,
	},
	extraReducers: (builder) => {
		builder
			.addCase(getFiveQuizzes.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(getFiveQuizzes.fulfilled, (state, action) => {
				state.isLoading = false;
				state.isSuccess = true;
				state.quizzes = action.payload;
			})
			.addCase(getFiveQuizzes.rejected, (state, action) => {
				state.isLoading = false;
				state.isError = false;
				state.message = action.payload;
			})
			.addCase(getAllQuizzes.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(getAllQuizzes.fulfilled, (state, action) => {
				state.isLoading = false;
				state.isSuccess = true;
				state.quizzes = action.payload;
			})
			.addCase(getAllQuizzes.rejected, (state, action) => {
				state.isLoading = false;
				state.isError = false;
				state.message = action.payload;
			})
			.addCase(getOneQuiz.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(getOneQuiz.fulfilled, (state, action) => {
				state.isLoading = false;
				state.isSuccess = true;
				state.quizzes = action.payload;
			})
			.addCase(getOneQuiz.rejected, (state, action) => {
				state.isLoading = false;
				state.isError = false;
				state.message = action.payload;
			});
	},
});

export const { reset } = quizSlice.actions;
export default quizSlice.reducer;
