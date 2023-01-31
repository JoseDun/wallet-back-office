/**
 * Function to replace all emtpy values with null
 *
 * @param {*} obj
 * @returns
 */
export function replaceEmptyValuesForNull(obj) {
	const response = { ...obj };

	const keys = Object.keys(obj || {});

	for (let i = 0; i < keys.length; i++) {
		const key = keys[i];
		if (obj[key] === '' || obj[key] === undefined) {
			response[key] = null;
		}
		if (key === 'status') {
			response[key] = parseInt(response[key], 10);
		}
	}

	return response;
}
