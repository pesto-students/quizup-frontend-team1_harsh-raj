import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import userService from "./userService";

// Get user from localStorage
const user = JSON.parse(localStorage.getItem("user"));

const initialState = {
	user: user ? user : null,
	quizResult: null,
	testResult: null,
	isError: false,
	isSuccess: false,
	isLoading: false,
	message: "",
};

export const addQuizResult = createAsyncThunk(
	"user/addQuiz",
	async (quizResult, thunkAPI) => {
		try {
			return await userService.addQuizResult(quizResult);
		} catch (err) {
			const message =
				(err.response && err.response.data && err.response.data.message) ||
				err.message ||
				err.toString();
			return thunkAPI.rejectWithValue(message);
		}
	}
);

export const addTestResult = createAsyncThunk(
	"user/addTest",
	async (testResult, thunkAPI) => {
		try {
			return await userService.addTestResult(testResult);
		} catch (err) {
			const message =
				(err.response && err.response.data && err.response.data.message) ||
				err.message ||
				err.toString();
			return thunkAPI.rejectWithValue(message);
		}
	}
);

export const getUser = createAsyncThunk(
	"user/getData",
	async (email, thunkAPI) => {
		try {
			return await userService.getUser(email);
		} catch (err) {
			const message =
				(err.response && err.response.data && err.response.data.message) ||
				err.message ||
				err.toString();
			return thunkAPI.rejectWithValue(message);
		}
	}
);

export const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		reset: (state) => {
			state.quizResult = null;
			state.testResult = null;
			state.isLoading = false;
			state.isSuccess = false;
			state.isError = false;
			state.message = "";
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(addQuizResult.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(addQuizResult.fulfilled, (state, action) => {
				state.isLoading = false;
				state.isSuccess = true;
				state.quizResult = action.payload;
			})
			.addCase(addQuizResult.rejected, (state, action) => {
				state.isLoading = false;
				state.isError = true;
				state.message = action.payload;
				state.quizResult = null;
			})
			.addCase(addTestResult.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(addTestResult.fulfilled, (state, action) => {
				state.isLoading = false;
				state.isSuccess = true;
				state.testResult = action.payload;
			})
			.addCase(addTestResult.rejected, (state, action) => {
				state.isLoading = false;
				state.isError = true;
				state.message = action.payload;
				state.testResult = null;
			})
			.addCase(getUser.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(getUser.fulfilled, (state, action) => {
				state.isLoading = false;
				state.isSuccess = true;
				state.user = action.payload;
			})
			.addCase(getUser.rejected, (state, action) => {
				state.isLoading = false;
				state.isError = true;
				state.message = action.payload;
				state.testResult = null;
			});
	},
});

export const { reset } = userSlice.actions;
export default userSlice.reducer;
