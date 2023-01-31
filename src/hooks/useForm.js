import { useState } from 'react';

import { validateObjectBySchema } from '../helpers/forms/validate';

/**
 * Hook to set the form state
 *
 * @param {*} initialState - Initial state of the form
 * @param {*} callback - Callback to be called when the form is submitted
 * @param {*} schema - Schema to validate the form
 *
 * @returns
 */
export const useForm = (initialState, callback, schema) => {
	const [values, setValues] = useState(initialState);
	const [errors, setErrors] = useState({});

	/**
	 * Function to set the form state
	 * @param {*} e
	 */
	const onInputChange = (e) => {
		const { name, value, type } = e.target;
		setValues({ ...values, [name]: type === 'number' ? parseInt(value, 10) : value });
	};

	/**
	 * Function to reset the form state
	 */
	const reset = () => {
		setValues(initialState);
		setErrors({});
	};

	/**
	 * Function to change the form state
	 */
	const setValue = (value) => {
		setValues(value);
	};

	/**
	 * Function to handle the form submission
	 */
	const onSubmit = (e) => {
		if (e) e.preventDefault();
		const result = validateObjectBySchema(values, schema);
		if (!Object.keys(result || {}).length) {
			setErrors({});
			callback(values);
		} else setErrors(result);
	};

	return {
		values,
		errors,
		onInputChange,
		reset,
		onSubmit,
		setValue,
	};
};
