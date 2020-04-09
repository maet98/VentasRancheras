//Actions Creator
//import JsonPlaceholder from "../apis/api";
import _ from "lodash";

//import apiAxios from "../../apis/api";
//import Api from "../../apis/api";

// export const loginUser = (email, password) => async dispatch => {
// 	const params = Object.assign({}, { email, password });
// 	const response = await apiAxios.post("/login", params);
// 	console.log("respons : ", response);
// 	//return action
// 	return dispatch({
// 		type: "LOGIN",
// 		payload: response.data
// 	});
// };

// export const fetchClient = () => async dispatch => {
// 	const response = await apiAxios.get("/client");
// 	//console.log("respons : ", response);
// 	//return action
// 	return dispatch({
// 		type: "FETCH_CLIENT",
// 		payload: response.data
// 	});
// };

// export const selectUser = (userS = []) => {
// 	//return action
// 	return {
// 		type: "UserS",
// 		payload: userS
// 	};
// };

//make sure that we got a call one time, using lodash to memorize

import Api from "../../apis/api";
import { apiStart, apiEnd, apiError } from "./api";
import { LOGIN, LOGGED_USER, API_FAILURE } from "./type";
import { AsyncStorage } from "react-native";
//import NavigationService from "../../pages/navigator";
//import { getCurrentLanguage } from "../../constants/Utils";
//import { NavigationActions } from "react-navigation";

function requestUserSuccess(type, user, Id) {
	return { type, payload: { user, Id } };
}

function requestSuccess(type, data) {
	return { type, payload: { data } };
}

function requestFail(errorCode, language) {
	return { type: API_FAILURE, payload: { data: errorCode, language } };
}

export function login(email, password) {
	console.log("LOGIN : ", email);
	return dispatch => {
		dispatch(apiStart());
		Api.post("/auth/login", {
			email,
			password: password
		})
			.then(response => {
				//console.log("response: ", response);
				if (response.data) {
					//console.log("Inside");
					//const token = response.data.token;
					//const user = response.data.ans;

					const Id = response.data.Id;
					const user = response.data;
					console.log("TYPE : ", response.data.type);

					dispatch(requestUserSuccess(LOGIN, user, Id));

					dispatch(apiEnd());
				} else {
					dispatch(apiEnd());
				}
			})
			.catch(error => {
				dispatch(apiEnd());
			});
	};
}
