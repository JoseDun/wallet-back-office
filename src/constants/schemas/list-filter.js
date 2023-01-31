export const USERS_LIST_FILTERS_SCHEMA = [
	{
		type: 'select',
		name: 'DEALER_SCHEMA.id_dealer.name',
		class: 'w-100',
		label: 'Status',
		placeholder: 'Selecciona un status',
		options: [
			{
				title: 'Activo',
				value: 1,
			},
			{
				title: 'Inactivo',
				value: 0,
			},
		],
	},
	{
		type: 'date',
		name: 'name',
		class: 'w-100',
		label: 'Desde',
		placeholder: 'Desde',
	},
	{
		type: 'date',
		name: 'name',
		class: 'w-100',
		label: 'Hasta',
		placeholder: ' Hasta',
	},
];
