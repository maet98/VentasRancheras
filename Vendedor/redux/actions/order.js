import Api from "../../apis/api";
import { apiStart, apiEnd, apiError } from "./api";
import { GET_ALL_ORDER, GET_ONE_ORDER } from "./type";
import { AsyncStorage } from "react-native";
//import NavigationService from "../../pages/navigator";
//import { getCurrentLanguage } from "../../constants/Utils";
//import { NavigationActions } from "react-navigation";

function requestGetOrderSuccess(type, list) {
	//console.log("dale Type : ", type);
	//console.log("the list : ", list);
	return { type, payload: { list } };
}

function requestSuccess(type, data) {
	return { type, payload: { data } };
}

function requestFail(errorCode, language) {
	return { type: API_FAILURE, payload: { data: errorCode, language } };
}

export async function getAllOrder() {
	//console.log("ORDER HERE");
	//console.log("ORDER Aquiiiii");
	return dispatch => {
		dispatch(apiStart());
		Api.get("/order")
			.then(response => {
				//console.log("response: ", response);
				if (response.data) {
					//console.log("Console : ", response.date);

					const Item = response.data;
					//const { _id, name, role, tel, email } = Item;
					//console.log("ITEMs : ", Item);

					dispatch(requestGetOrderSuccess(GET_ALL_ORDER, Item));

					//console.log("Llego aqui----------------------------------");
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

export function getOneOrder(name) {
	//console.log("Hi");
	return dispatch => {
		dispatch(apiStart());

		Api.get(`/order/${name}`)
			.then(response => {
				//console.log("response: ", response);
				if (response.data) {
					const Item = response.data.Item;
					//console.log("response Item : ", Item);
					//const { _id, name, role, tel, email } = Item;
					//console.log("ITEMs : ", Item);

					dispatch(requestGetOrderSuccess(GET_ONE_ORDER, Item));

					//console.log("Llego aqui----------------------------------");
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
