import { API_START, API_END, API_ERROR } from "./type";

export const apiStart = () => {
	return {
		type: API_START
	};
};

export const apiEnd = () => {
	return {
		type: API_END
	};
};

export const apiError = (error, language) => {
	return {
		type: API_ERROR,
		payload: { error, language }
	};
};
