import { getToken } from './tokenHelper';

/**
 * Updates the current configuration of the current request
 *
 * @param {*} config - Current request config
 * @return {*}  - New config to apply to the current request
 */
export function axiosRequestInterceptor(config) {
	const newConfig = config;
	const token = getToken();
	if (token) {
		newConfig.headers.Authorization = `Bearer ${token.value}`;
		newConfig.headers['Content-Type'] = 'application/json; charset=UTF-8 ';
	}
	return newConfig;
}

/**
 *	Handle response errors in a current request
 *
 * @param {*} error - Error object returned from axiosRequest
 * @return {Void}
 */
export function axiosResponseErrorInterceptor(error) {
	const { status } = error.response;

	if (status !== undefined) {
		switch (status) {
			// 401 Unauthorized
			case 401:
				window.location = '/';
				break;
			// 403 Forbidden
			case 403:
				window.location = '/';
				break;

			default:
				break;
		}
	}

	return Promise.reject(error.response);
}
