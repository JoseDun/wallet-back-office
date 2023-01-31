import React, { useEffect } from 'react';

import { Button } from '@mui/material';

import { getInitialFormState } from '../../helpers/forms/utils';

import { useForm } from '../../hooks/useForm';

import InputsDisplayer from './InputsDisplayer';

const SimpleForm = ({
	isLoading,
	formError,
	value,
	onSave,
	onCancel,
	saveText,
	cancelText,
	footerAlign = 'center',
	schema,
}) => {
	const INITIAL_STATE = getInitialFormState(schema);

	const { values, onInputChange, errors, onSubmit, setValue } = useForm(
		INITIAL_STATE,
		onSave,
		schema
	);

	useEffect(() => {
		setValue(value || {});
	}, [value]);

	const onCancelButtonClick = () => {
		onCancel();
	};

	const onSaveButtonClick = () => {
		onSubmit();
	};

	return (
		<>
			<InputsDisplayer
				fields={schema}
				values={values}
				errors={errors}
				onInputChange={onInputChange}
			/>
			{formError}
			<footer className={`w-100 mt-3 d-flex justify-content-${footerAlign}`}>
				{!!onCancel && (
					<Button onClick={onCancelButtonClick}>{cancelText || 'Cancelar'}</Button>
				)}
				{!!onSave && (
					<Button
						variant="contained"
						className="px-5 m-0"
						onClick={onSaveButtonClick}
						disabled={isLoading}
					>
						{isLoading ? (
							<>
								<span
									className="spinner-border spinner-border-sm mr-2"
									role="status"
									aria-hidden="true"
								/>
								<span className="visually-hidden"> Cargando...</span>
							</>
						) : (
							saveText || 'Guardar'
						)}
					</Button>
				)}
			</footer>
		</>
	);
};

export default SimpleForm;
