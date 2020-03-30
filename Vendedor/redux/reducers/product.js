// export default (state = [], action) => {
// 	switch (action.type) {
// 		case "LOGIN":
// 			return action.payload;
// 		default:
// 			return state;
// 	}
// };

import { GET_ALL_PRODUCT, GET_ONE_PRODUCT } from "../actions/type";

export default function getAllProduct(
	state = { ID: null, Name: "", Description: "", UnitPrice: "", IncomeAccountRef: {}, maxResults: null },
	action
) {
	//console.log("the Action : ", action);
	const { type, payload } = action;
	if (type === "GET_ONE_PRODUCT") {
		console.log("One Product Payload : ", payload);
	}
	switch (type) {
		case GET_ALL_PRODUCT:
			return payload.list;
		case GET_ONE_PRODUCT:
			return payload.list;

		default:
			return state;
	}
}

// export default function getOneProduct(
// 	state = { ID: null, Name: "", Description: "", UnitPrice: "", IncomeAccountRef: {}, maxResults: null },
// 	action
// ) {
// 	//console.log("the Action : ", action);
// 	const { type, payload } = action;
// 	switch (type) {
// 		case GET_ONE_PRODUCT:
// 			return payload.list;

// 		default:
// 			return state;
// 	}
// }
