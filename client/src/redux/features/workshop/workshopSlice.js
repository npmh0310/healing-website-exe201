import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import workshopService from './workshopService';

export const getAllWorkShops = createAsyncThunk(
	'workshops/getAllWorkShops',
	async (_, thunkAPI) => {
		try {
			return await workshopService.getAllWorkShop();
		} catch (error) {
			const message =
				(error.response &&
					error.response.data &&
					error.response.data.message) ||
				error.message ||
				error.toString();

			return thunkAPI.rejectWithValue(message);
		}
	}
);

const initialState = {
    workshops: null,
	isError: false,
	isSuccess: false,
	isLoading: false,
	message: '',
};

export const workshopSlice = createSlice({
	name: 'workshops',
	initialState,
	reducers: {
		reset: (state) => {
			state.isError = false;
			state.isLoading = false;
			state.isSuccess = false;
			state.message = '';
		},
	},
	extraReducers: (builder) => {
		builder
        .addCase(getAllWorkShops.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(getAllWorkShops.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.workshops = action.payload;
        })
        .addCase(getAllWorkShops.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        })
	},
});

export const { reset } = workshopSlice.actions;
export default workshopSlice.reducer;
