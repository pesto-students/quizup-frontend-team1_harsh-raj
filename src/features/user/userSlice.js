import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import userService from "./userService";

// Get user from localStorage
const user = JSON.parse(localStorage.getItem("user"));

const initialState = {
	user: user ? user : null,
	isError: false,
	isSuccess: false,
	isLoading: false,
	message: "",
};

// get user
export const getUser = createAsyncThunk("user/getMe", async (_, thunkAPI) => {
	try {
		return await userService.getUser();
	} catch (err) {
		const message =
			(err.response && err.response.data && err.response.data.message) ||
			err.message ||
			err.toString();
		return thunkAPI.rejectWithValue(message);
	}
});

// Logout
export const logout = createAsyncThunk("user/logout", async () => {
	await userService.logout();
});

export const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		reset: (state) => {
			state.isLoading = false;
			state.isSuccess = false;
			state.isError = false;
			state.message = "";
		},
	},
	extraReducers: (builder) => {
		builder
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
				state.user = null;
			})
			.addCase(logout.fulfilled, (state) => {
				state.user = null;
			});
	},
});

export const { reset } = userSlice.actions;
export default userSlice.reducer;
