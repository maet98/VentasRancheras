// export default (state = [], action) => {
// 	switch (action.type) {
// 		case "LOGIN":
// 			return action.payload;
// 		default:
// 			return state;
// 	}
// };

import { LOGIN, LOGGED_USER, REGISTER_CLIENT, LOGOUT } from "../actions/type";

export default function login(state = { employeeId: null, username: "", type: "", email: "", token: null }, action) {
	const { type, payload } = action;
	switch (type) {
		case LOGIN:
			return {
				...state,
				employeeId: payload.user.employeeId,

				username: payload.user.username,
				type: payload.user.type,
				email: payload.user.email,
				token: payload.token
			};

		case LOGGED_USER:
			return {
				...state,
				employeeId: payload.user.employeeId,

				username: payload.user.username,
				type: payload.user.type,
				email: payload.user.email,
				token: payload.token
			};

		case REGISTER_CLIENT:
			return {
				...state,
				employeeId: payload.user.employeeId,

				username: payload.user.username,
				type: payload.user.type,
				email: payload.user.email,
				token: payload.token
			};

		case LOGOUT:
			return {
				...state,
				employeeId: null,

				username: "",

				type: "",
				email: "",
				token: null
			};
		default:
			return state;
	}
}
