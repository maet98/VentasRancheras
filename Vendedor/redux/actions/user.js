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

function requestUserSuccess(type, user, token) {
	return { type, payload: { user, token } };
}

function requestSuccess(type, data) {
	return { type, payload: { data } };
}

function requestFail(errorCode, language) {
	return { type: API_FAILURE, payload: { data: errorCode, language } };
}

export function rehydrate(data) {
	return dispatch => {
		dispatch(requestUserSuccess(LOGGED_USER, data.user, data.token));
		Api.defaults.headers.common["Authorization"] = `Bearer ${data.token}`;
		Api.defaults.headers.common["idUser"] = data.user._id;
		//NavigationService.navigate("App");
	};
}

export function login(email, password) {
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
					const token = response.data.token;
					const user = response.data.ans;
					//console.log("token : ", token);
					//console.log("user : ", user);
					const { username, type, employeeId, email } = user;
					const authUser = { employeeId, username, type, email };
					const authToken = { user: authUser, token };
					AsyncStorage.setItem("authToken", JSON.stringify(authToken));
					dispatch(requestUserSuccess(LOGIN, user, token));
					Api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
					Api.defaults.headers.common["idUser"] = user.employeeId;
					dispatch(apiEnd());
					//console.log("Llego aqui");
					//NavigationActions.navigate("NewMenu");
					//console.log("Now");
				} else {
					dispatch(apiEnd());
					//const language = getCurrentLanguage();
					//dispatch(requestFail(response.data.message, language));
				}
			})
			.catch(error => {
				//const language = getCurrentLanguage();
				//	dispatch(apiError(error, language));
				dispatch(apiEnd());
			});
	};
}

// export function logout() {
// 	return async dispatch => {
// 		await AsyncStorage.removeItem("authToken");
// 		Api.defaults.headers.common["Authorization"] = `Bearer `;
// 		Api.defaults.headers.common["idUser"] = "";
// 		dispatch(requestUserSuccess(LOGOUT, null, null));
// 		NavigationService.navigate("Auth");
// 	};
// }

// export function register(name, phone, address, password) {
// 	return dispatch => {
// 		dispatch(apiStart());
// 		Api.post("/users", {
// 			name: name,
// 			tel: phone,
// 			address: address,
// 			password: password
// 		})
// 			.then(response => {
// 				if (response.data.success) {
// 					const { user, token } = response.data.data;
// 					const { _id, credit, nom, role, tel, email } = user;
// 					const authUser = { _id, credit, nom, role, tel, email };
// 					const authToken = { user: authUser, token };
// 					AsyncStorage.setItem("authToken", JSON.stringify(authToken));
// 					dispatch(requestUserSuccess(REGISTER_CLIENT, user, token));
// 					Api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
// 					Api.defaults.headers.common["idUser"] = user._id;
// 					dispatch(apiEnd());
// 					NavigationService.navigate("App");
// 				} else {
// 					dispatch(apiEnd());
// 					const language = getCurrentLanguage();
// 					dispatch(requestFail(response.data.message, language));
// 				}
// 			})
// 			.catch(error => {
// 				const language = getCurrentLanguage();
// 				dispatch(apiError(error, language));
// 				dispatch(apiEnd());
// 			});
// 	};
// }

// export function fetchUserInfo(userID) {
// 	return dispatch => {
// 		dispatch(apiStart());
// 		Api.get(`/users/${userID}`)
// 			.then(response => {
// 				if (response.data.success) {
// 					dispatch(requestSuccess(GET_BOULPIKS, response.data.data.boulpik));
// 					dispatch(requestSuccess(REFRESH_CREDIT, response.data.data.user.credit));
// 					dispatch(apiEnd());
// 				} else {
// 					dispatch(apiEnd());
// 					const language = getCurrentLanguage();
// 					dispatch(requestFail(response.data.message, language));
// 				}
// 			})
// 			.catch(error => {
// 				const language = getCurrentLanguage();
// 				dispatch(apiError(error, language));
// 				dispatch(apiEnd());
// 			});
// 	};
// }
