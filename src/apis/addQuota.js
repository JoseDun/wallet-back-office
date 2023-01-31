import axios from 'axios';

const URL_BASE = process.env.REACT_APP_API_LOGIN;

export async function addQuota(dataBody = {}) {
	const url = new URL(`${URL_BASE}/users/add-quota`);
	const { data } = await axios.post(url.toString(), dataBody);

	return data;
}
