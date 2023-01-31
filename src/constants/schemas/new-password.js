export const NEW_PASSWORD = [
	{
		name: 'password',
		type: 'password',
		required: true,
		label: 'Contraseña',
		placeholder: '*******',
		minLength: 6,
	},
	{
		name: 'newPassword',
		type: 'password',
		required: true,
		label: 'Confirmar contraseña',
		placeholder: '*******',
		minLength: 6,
		match: 'password',
	},
];
