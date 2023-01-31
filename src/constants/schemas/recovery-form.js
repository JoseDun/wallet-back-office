import { EMAIL_PATTERN } from '../regex';

export const RECOVERY_FORM = [
	{
		name: 'email',
		type: 'email',
		required: true,
		label: 'Correo Electrónico',
		pattern: EMAIL_PATTERN,
		placeholder: 'Test@test.com',
	},
];
