import { createSlice } from '@reduxjs/toolkit';
import { DestinationData, FormData } from '@/types/formData';

const initialState: FormData = {};

const formSlice = createSlice({
	name: 'formData',
	initialState: {
		value: initialState,
	},
	reducers: {
		updateFormData: (state, action) => {
			state.value = action.payload;
		},
	},
});

export const { updateFormData } = formSlice.actions;

export const formReducer = formSlice.reducer;
