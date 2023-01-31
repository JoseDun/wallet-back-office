import axios from 'axios';

const URL_BASE = process.env.REACT_APP_API_LOGIN;

export async function listsUsers({ pageParam = 0 }) {
	const url = new URL(`${URL_BASE}/users/all?page=${pageParam}&size=100`);
	const { data } = await axios.get(url.toString());

	return data;
}
