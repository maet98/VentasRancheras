import axios from 'axios';

const baseUrl = 'http://186.7.237.112:3000';

export default {
	auth(url = baseUrl + '/auth/login') {
		return {
			login: user => axios.post(url, user),
		};
	},
	employee(url = baseUrl + '/employee') {
		return {
			register: user => axios.post(url, user),
			getAll: () => axios.get(url),
			getClients: id => axios.get(url + `/customer/${id}`),
			getById: id => axios.get(url + `/${id}`),
		};
	},
	order(url = baseUrl + '/order') {
		return {
			getAll: () => axios.get(url),
			getByCustomerId: id => axios.get(url + `/${id}`),
			getById: id => axios.get(url + `/employee/${id}`),
			getAvailable: () => axios.get(url + '/available'),
		};
	},
	client(url = baseUrl + '/client') {
		return {
			getAll: () => axios.get(url),
			filterByName: name => axios.get(url + '/name/' + name),
			getAvailable: () => axios.get(url + `/available`),
			getById: id => axios.get(url + `/${id}`),
		};
	},
	product(url = baseUrl + '/product') {
		return {
			getAll: () => axios.get(url),
		};
	},
	route(url = baseUrl + '/route') {
		return {
			create: data => axios.post(url, data),
		};
	},
};
