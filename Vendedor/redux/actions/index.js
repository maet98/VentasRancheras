//Actions Creator
import apiAxios from "../../apis/api";
export const selectSong = (song = []) => {
	//return action
	return {
		type: "SONG_SELECTED",
		payload: song
	};
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
