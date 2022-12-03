import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import examService from "./examService";

const initialState = {
	exams: [],
	isError: false,
	isSuccess: false,
	isLoading: false,
	message: "",
};

export const getFiveExams = createAsyncThunk(
	"exams/getFive",
	async (_, thunkAPI) => {
		try {
			return await examService.getFiveExams();
		} catch (err) {
			const message =
				(err.response && err.response.data && err.response.data.message) ||
				err.message ||
				err.toString();
			return thunkAPI.rejectWithValue(message);
		}
	}
);

export const getAllExams = createAsyncThunk(
	"exams/getAll",
	async (_, thunkAPI) => {
		try {
			return await examService.getAllExams();
		} catch (err) {
			const message =
				(err.response && err.response.data && err.response.data.message) ||
				err.message ||
				err.toString();
			return thunkAPI.rejectWithValue(message);
		}
	}
);

export const examSlice = createSlice({
	name: "exam",
	initialState,
	reducers: {
		reset: (state) => initialState,
	},
	extraReducers: (builder) => {
		builder
			.addCase(getFiveExams.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(getFiveExams.fulfilled, (state, action) => {
				state.isLoading = false;
				state.isSuccess = true;
				state.exams = action.payload;
			})
			.addCase(getFiveExams.rejected, (state, action) => {
				state.isLoading = false;
				state.isError = false;
				state.message = action.payload;
			})
			.addCase(getAllExams.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(getAllExams.fulfilled, (state, action) => {
				state.isLoading = false;
				state.isSuccess = true;
				state.exams = action.payload;
			})
			.addCase(getAllExams.rejected, (state, action) => {
				state.isLoading = false;
				state.isError = false;
				state.message = action.payload;
			});
	},
});

export const { reset } = examSlice.actions;
export default examSlice.reducer;
