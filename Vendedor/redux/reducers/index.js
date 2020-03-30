// import { combineReducers } from "redux";

// //Reducers

import login from "./user";
import getAllProduct from "./product";

// export default combineReducers({
// 	user
// });

import { combineReducers } from "redux";
import apiAxios from "../../apis/api";
import { getOneProduct } from "../actions/product";

//import user from "./user";

const songsReducer = () => {
	return [
		{
			title: "No Scrubs1",
			duration: "4:05"
		},
		{
			title: "No Scrubs2",
			duration: "4:15"
		},
		{
			title: "No Scrubs3",
			duration: "4:25"
		},
		{
			title: "No Scrubs4",
			duration: "4:35"
		}
	];
};

export const fetchClient = () => async dispatch => {
	const response = await apiAxios.get("/client");
	//console.log("respons : ", response);
	//return action
	return dispatch({
		type: "FETCH_CLIENT",
		payload: response.data
	});
};

const selectedSongReducer = (selectedSong = null, action) => {
	if (action.type === "SONG_SELECTED") {
		return action.payload;
	}

	return selectedSong;
};

export default combineReducers({
	//listClient: getAllClient,
	userLogin: login,
	listProduct: getAllProduct,
	selectedProduct: getOneProduct
	//listOrder: getAllOrder
});
