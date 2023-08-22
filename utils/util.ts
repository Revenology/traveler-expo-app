/* eslint-disable no-fallthrough */
import axios from 'axios';

export interface ValidationResponse {
	valid: boolean;
	response: string[];
}

export const validateUsername = async (
	username: string
): Promise<ValidationResponse> => {
	const validationResponse: ValidationResponse = {
		valid: false,
		response: [],
	};

	const response = axios.get(`database/username/check/${username}`);
	const isValid = (await response).data.valid;

	switch (true) {
	case !isValid:
		validationResponse.response.push('Username already exists');
		break;
	default:
		validationResponse.valid = true;
	}

	return await validationResponse;
};

export const validatePassword = (password: string): ValidationResponse => {
	const validationResponse: ValidationResponse = {
		valid: false,
		response: [],
	};
	const numberRegex = /\d+/;
	const specialRegex = /[!@#$%^&*()-_]/;

	switch (true) {
	case !numberRegex.test(password):
		validationResponse.response.push('Password must contain a number');
	case !specialRegex.test(password):
		validationResponse.response.push(
			'Password must contain a special character'
		);
	case !(password.length < 8):
		validationResponse.response.push(
			'Password must be at least 8 character long'
		);
	}

	if (validationResponse.response.length == 0) {
		validationResponse.valid = true;
	}

	return validationResponse;
};

export const validateEmail = (email: string): boolean => {
	const emailRegex =
		/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

	console.log(emailRegex.test(email));

	if (emailRegex.test(email)) {
		return true;
	}
	return false;
};
