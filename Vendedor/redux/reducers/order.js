import { GET_ALL_ORDER, GET_ONE_ORDER } from "../actions/type";

export default function getAllOrder(
	state = { ID: null, Line: "", Description: "", DueDate: "", EmailStatus: "", Balance: 0, employeeId: "" },
	action
) {
	//console.log("the Action Order : ", action);
	const { type, payload } = action;
	if (type === "GET_ALL_ORDER") {
		//console.log("One Product Payload : ", payload);
	}
	switch (type) {
		case GET_ALL_ORDER:
			return payload.list;
		case GET_ONE_ORDER:
			return payload.list;

		default:
			return state;
	}
}

// export default function getOneOrder(
// 	state = { ID: null, Line: "", Description: "", DueDate: "", EmailStatus: "", Balance: 0, employeeId: "" },
// 	action
// ) {
// 	console.log("the Action : ", action);
// 	const { type, payload } = action;
// 	if (type === "GET_ONE_ORDER") {
// 		//console.log("One Product Payload : ", payload);
// 	}
// 	switch (type) {
// 		case GET_ONE_ORDER:
// 			return payload.list;

// 		default:
// 			return state;
// 	}
// }
