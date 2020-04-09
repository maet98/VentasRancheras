import Api from "../../apis/api";
import { apiStart, apiEnd, apiError } from "./api";
import { GET_ALL_PRODUCT, GET_ONE_PRODUCT } from "./type";
import { AsyncStorage } from "react-native";
//import NavigationService from "../../pages/navigator";
//import { getCurrentLanguage } from "../../constants/Utils";
//import { NavigationActions } from "react-navigation";

function requestGetProductSuccess(type, list) {
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

export function getAllProduct() {
	return dispatch => {
		dispatch(apiStart());
		Api.get("/product")
			.then(response => {
				//console.log("response: ", response);
				if (response.data) {
					const Item = response.data.Item;
					//const { _id, name, role, tel, email } = Item;
					//console.log("ITEMs : ", Item);

					dispatch(requestGetProductSuccess(GET_ALL_PRODUCT, Item));

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

export function getOneProduct(name) {
	//console.log("Hi");
	return dispatch => {
		dispatch(apiStart());

		Api.get(`/product/${name}`)
			.then(response => {
				//console.log("response: ", response);
				if (response.data) {
					const Item = response.data.Item;
					//console.log("response Item : ", Item);
					//const { _id, name, role, tel, email } = Item;
					//console.log("ITEMs : ", Item);

					dispatch(requestGetProductSuccess(GET_ONE_PRODUCT, Item));

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
