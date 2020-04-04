// export default (state = [], action) => {
// 	switch (action.type) {
// 		case "LOGIN":
// 			return action.payload;
// 		default:
// 			return state;
// 	}
// };

import { LOGIN, LOGGED_USER, REGISTER_CLIENT, LOGOUT } from "../actions/type";

export default function login(state = { GivenName: null, DisplayName: "", type: "", email: "", Id: null }, action) {
	const { type, payload } = action;
	//console.log("payload : ", payload);
	switch (type) {
		case LOGIN:
			return {
				...state,
				DisplayName: payload.user.DisplayName,

				GivenName: payload.user.GivenName,
				type: payload.user.type,
				email: payload.user.email,
				Id: payload.Id
			};

		case LOGGED_USER:
			return {
				...state,
				DisplayName: payload.user.DisplayName,

				GivenName: payload.user.GivenName,
				type: payload.user.type,
				email: payload.user.email,
				Id: payload.Id
			};

		case REGISTER_CLIENT:
			return {
				...state,
				DisplayName: payload.user.DisplayName,

				GivenName: payload.user.GivenName,
				type: payload.user.type,
				email: payload.user.email,
				Id: payload.Id
			};

		case LOGOUT:
			return {
				...state,
				employeeId: null,

				username: "",

				type: "",
				email: "",
				Id: null
			};
		default:
			return state;
	}
}
