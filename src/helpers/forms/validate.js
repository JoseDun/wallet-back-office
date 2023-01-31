/* eslint-disable no-eval */

import { FORM_ERROR_MESSAGES } from '../../constants/messages';

const errorMessage = (error) => FORM_ERROR_MESSAGES[error];

export const validateObjectBySchema = (values, schema = []) => {
	const errors = {};

	schema.forEach(({ name, required, minLength, maxLength, match, pattern, _eval_required }) => {
		const value = values[name];

		const isRequired = _eval_required ? eval(_eval_required) : required;

		if (isRequired && !value && value !== 0) {
			errors[name] = errorMessage('required');
		}

		if (minLength && value && `${value}`.length < minLength) {
			const message = errorMessage('minlength');
			errors[name] = message.replace('{min}', minLength);
		}

		if (maxLength && value && value > maxLength) {
			const message = errorMessage('maxlength');
			errors[name] = message.replace('{max}', maxLength);
		}

		if (pattern && !new RegExp(pattern).test(value)) {
			errors[name] = errorMessage('pattern');
		}

		if (match && value) {
			if (value === values[match]) return;
			errors[name] = errorMessage('match');
		}
	});

	return errors;
};
