import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import testService from "./testService";

const initialState = {
	test: {},
	isError: false,
	isSuccess: false,
	isLoading: false,
	message: "",
};

// Get a single test
export const getTest = createAsyncThunk(
	"tests/getOne",
	async (testId, thunkAPI) => {
		try {
			return await testService.getTest(testId);
		} catch (err) {
			const message =
				(err.response && err.response.data && err.response.data.message) ||
				err.message ||
				err.toString();
			return thunkAPI.rejectWithValue(message);
		}
	}
);

export const testSlice = createSlice({
	name: "test",
	initialState,
	reducers: {
		reset: (state) => initialState,
	},
	extraReducers: (builder) => {
		builder
			.addCase(getTest.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(getTest.fulfilled, (state, action) => {
				state.isLoading = false;
				state.isSuccess = true;
				state.test = action.payload;
			})
			.addCase(getTest.rejected, (state, action) => {
				state.isLoading = false;
				state.isError = true;
				state.message = action.payload;
			});
	},
});

export const { reset } = testSlice.actions;
export default testSlice.reducer;
