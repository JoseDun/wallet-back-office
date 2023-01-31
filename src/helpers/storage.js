/**
 * Custom Storage to globalize the Local Storage
 */
export const Storage = {
	/**
	 * Return a value from the local storage
	 * @param {String} key - Storage key
	 */
	get(key) {
		const body = localStorage.getItem(key);
		return JSON.parse(body);
	},
	/**
	 * Save a value to a storage key
	 * @param {String} key - Storage key
	 * @param {*} data - Value to save in local storage
	 */
	set(key, data) {
		const body = JSON.stringify(data);
		return localStorage.setItem(key, body);
	},
	/**
	 * Delete a value in the local storage
	 * @param {String} key - Storage key
	 */
	delete(key) {
		return localStorage.removeItem(key);
	},
	/**
	 * Clear all the local storage
	 */
	clear() {
		return localStorage.clear();
	},
};
