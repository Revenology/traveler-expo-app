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

const generateRandomColor = () => {
	const randomColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
		Math.random() * 256
	)}, ${Math.floor(Math.random() * 256)})`;
	return randomColor;
};

const lightenColor = (baseColor: any, factor: any) => {
	const rgb = baseColor.match(/\d+/g);
	const r = parseInt(rgb[0]);
	const g = parseInt(rgb[1]);
	const b = parseInt(rgb[2]);

	const newR = Math.min(255, r + factor);
	const newG = Math.min(255, g + factor);
	const newB = Math.min(255, b + factor);

	return `rgb(${newR}, ${newG}, ${newB})`;
};

const calculateTextColor = (background) => {
	// Parse the background color to extract RGB components
	const rgb = background.match(/\d+/g);
	const r = parseInt(rgb[0]);
	const g = parseInt(rgb[1]);
	const b = parseInt(rgb[2]);

	// Calculate the brightness of the background color
	const brightness = (r * 299 + g * 587 + b * 114) / 1000;

	// Determine the text color based on brightness
	return brightness > 128 ? 'black' : 'white';
};

export const generateRandomColorsWithContrast = () => {
	const baseColor = generateRandomColor();

	const lightColor = lightenColor(baseColor, 40);
	const textColor = calculateTextColor(lightColor);

	return [lightColor, baseColor, textColor];
};
