import React from 'react';

import { Button } from '@mui/material';

import { useForm } from '../../hooks/useForm';

import InputsDisplayer from './InputsDisplayer';

import { getInitialFormState } from '../../helpers/forms/utils';

const ListFilter = ({ fields = [], onChange }) => {
	const INITIAL_STATE = getInitialFormState(fields);

	const { values, reset, onInputChange, errors, onSubmit } = useForm(
		INITIAL_STATE,
		onChange,
		fields
	);

	const onClearButtonClick = () => {
		reset();
		onChange(null);
	};

	const onSearchButtonClick = () => {
		onSubmit();
	};

	return (
		<form className="form-group d-flex flex-wrap">
			<InputsDisplayer
				fields={fields}
				values={values}
				onInputChange={onInputChange}
				errors={errors}
			/>
			<div className="w-100 d-flex mt-3">
				<Button
					onClick={onClearButtonClick}
					type="button"
					variant="outlined"
					className="w-50 mr-1"
					color="secondary"
				>
					Limpiar
				</Button>
				<Button
					onClick={onSearchButtonClick}
					type="button"
					variant="contained"
					className="w-50 ml-1"
					disabled={
						!Object.keys(values || {}).filter(
							(item) => !!values[item] || values[item] === 0
						).length
					}
				>
					Filtrar
				</Button>
			</div>
		</form>
	);
};

export default ListFilter;
