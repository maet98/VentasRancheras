import axios from "axios";

const baseUrl = "http://152.0.34.162:3000";

export default {
	auth(url = baseUrl + "/auth/login") {
		return {
			login: (user) => axios.post(url, user),
		};
	},
	employee(url = baseUrl + "/employee") {
		return {
			register: (user) => axios.post(url, user),
			getAll: () => axios.get(url),
			getById: (id) => axios.get(url + `/${id}`),
		};
	},
	order(url = baseUrl + "/order") {
		return {
			getAll: () => axios.get(url),
			getByCustomerId: (id) => axios.get(url + `/employee/${id}`),
		};
	},
	client(url = baseUrl + "/client") {
		return {
			getAll: () => axios.get(url),
			filterByName: (name) => axios.get(url + "/name/" + name),
		};
	},
	product(url = baseUrl + "/product") {
		return {
			getAll: () => axios.get(url),
		};
	},
};
