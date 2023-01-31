import axios from 'axios';
import { axiosRequestInterceptor, axiosResponseErrorInterceptor } from './axios-interceptors';

const VERSION = window.env.REACT_APP_BACKEND_VERSION;
const URL_BASE = window.env.REACT_APP_BACKEND_ENDPOINT;

/** @type {*} */
const client = axios.create({
	baseURL: `${URL_BASE}/${VERSION}`,
});

client.interceptors.request.use(axiosRequestInterceptor);

client.interceptors.response.use((response) => response, axiosResponseErrorInterceptor);
/**
 * Request Wrapper with default success/error actions
 *
 * @param {String} method
 * @param {String} route
 * @param {*} [body=null]
 * @return {*}
 */
const apiCall = (route, method, body = null) => {
	/**
	 * @param {*} response
	 * @return {*} - Response data
	 */
	const onSuccess = (response) => {
		return response.data;
	};

	/**
	 * @param {*} error
	 * @return {*} - Promise reject
	 */
	const onError = (error) => {
		return Promise.reject(error.response || error.message);
	};

	return client({
		method,
		url: route,
		data: body,
	})
		.then(onSuccess)
		.catch(onError);
};

export default apiCall;
