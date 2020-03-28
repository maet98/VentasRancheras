//Actions Creator
import JsonPlaceholder from "../apis/api";
import _ from "lodash";
export const fetchPosts = () => async dispatch => {
	const response = await JsonPlaceholder.get("/posts");
	//console.log("respons : ", response);
	//return action
	return dispatch({
		type: "FETCH_POSTS",
		payload: response.data
	});
};

//make sure that we got a call one time, using lodash to memorize
