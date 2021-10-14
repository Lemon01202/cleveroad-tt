import axios from "axios"

export const locationAPI = {
	getLocation() {
		return axios.get('http://api.open-notify.org/iss-now.json').then(response => { return response.data });
	},
	getCrew() {
		return axios.get('http://api.open-notify.org/astros.json').then(response => { return response.data });
	}
}