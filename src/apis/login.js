import axios from 'axios';

const URL_BASE = process.env.REACT_APP_API_LOGIN;

export async function loginUser(dataBody = {}) {
	const url = new URL(`${URL_BASE}/api/auth/login`);
	const { data } = await axios.post(url.toString(), dataBody);

	return data;
}
