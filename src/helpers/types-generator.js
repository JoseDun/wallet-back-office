/**
 * @typedef {Object} StoreTypes
 * @property {String} NAME - Action types name.
 * @property {String} START - Used for when the action starts.
 * @property {String} SUCCESS - Used for when the action ends successfully.
 * @property {String} ERROR - Used for when the action ends wrongly.
 */

/**
 * @param {String} name
 * @return {StoreTypes}
 */
export const TypesGenerator = (name) => {
	const type = name.toUpperCase();
	const response = {
		NAME: type,
		START: `START_${type}`,
		ERROR: `ERROR_${type}`,
		SUCCESS: `SUCCESS_${type}`,
	};
	Object.freeze(response);
	return response;
};
