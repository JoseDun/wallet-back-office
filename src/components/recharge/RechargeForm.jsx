import React, { useState } from 'react';
import { useMutation } from 'react-query';

import { Button, Input, Tooltip } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';

import { cleanNumber } from '../../helpers/clean-number';

import { addQuota } from '../../apis/addQuota';

import RechargeFinishModal from './RechargeFinishModal';

import Saly44 from '../../assets/Saly44.png';

import DateAdvice from '../common/DateAdvice';

import { COLORS } from '../../constants/colors';

const RechargeForm = ({ onCancel, onSuccess, data = {} }) => {
	const [successModalIsOpen, setSuccessModalIsOpen] = useState(false);
	const [inputValue, setInputValue] = useState('');

	const { name, expeditionDate, document, userId, phone } = data;

	const { mutate: sendQuota, status, isLoading } = useMutation(addQuota);

	const inputValueWithoutCommas = inputValue.replaceAll(',', '');

	const handleContinueButtonClick = () => {
		setSuccessModalIsOpen(true);
		sendQuota({
			userId: data.userId,
			amount: inputValueWithoutCommas,
		});
	};

	const handleFinish = () => {
		setSuccessModalIsOpen(false);
		onSuccess();
	};

	const handleError = () => {
		setSuccessModalIsOpen(false);
	};

	const onInputChange = ({ target }) => {
		const { value } = target;
		setInputValue(cleanNumber(value));
	};

	return (
		<>
			<>
				<div
					className="d-flex flex-column bg_primary radius_large color_white px-4"
					style={{ height: '200px' }}
				>
					<div className="d-flex justify-content-between radius_large">
						<div className="pt-3 d-flex justify-content-between flex-column">
							<h3 className="font-weight-bold">Recargar</h3>
							<p className="pb-4 font-font-weight-lighter color_medium">
								Debes ingresar el monto que quieres recargar, y luego se enviará un
								código de verificación al número del usuario.
							</p>
							<p className="pb-3">USER ID: {userId}</p>
						</div>
						<figure>
							<img src={Saly44} alt="eWallet" style={{ width: '200px' }} />
						</figure>
						<div className="py-3">
							<DateAdvice
								date={expeditionDate}
								tooltip="Fecha de registro"
								textColor={COLORS.PRIMARY}
								color="white"
							/>
						</div>
					</div>
				</div>

				<div
					className="text-center d-flex flex-column w-100 pt-4 justify-content-center align-items-center"
					style={{ height: '260px' }}
				>
					<div className="d-flex w-100 justify-content-between p-3 bg_white radius_medium">
						<div className="d-flex ">
							<div className="bg_secondary radius_small color_white d-flex align-items-center px-2">
								<PersonIcon />
							</div>

							<div className="d-flex flex-column ml-3">
								<Tooltip title="Nombre">
									<b className="color_dark text-left">{name}</b>
								</Tooltip>

								<Tooltip title="Cédula">
									<p className="m-0 color_medium">C.I: {document}</p>
								</Tooltip>
							</div>
						</div>
						<div className="d-flex justify-content-end align-items-center">
							<Tooltip title="ID de la cuenta">
								<small className="color_white radius_medium bg_secondary px-3">
									{phone}
								</small>
							</Tooltip>
						</div>
					</div>

					<form className="w-100 text-left mt-5">
						<p className="m-0">Valor a recargar</p>
						<Input
							className="form-control w-100 p-3 py-4 shadow-sm border-0"
							value={inputValue}
							placeholder="Ej. 300.000 $"
							onChange={onInputChange}
							type="text"
							name="recharge"
						/>
					</form>
				</div>
				<div className="w-100 d-flex justify-content-end mt-2">
					<Button
						color="success"
						variant="outlined"
						onClick={onCancel}
						className="mt-2 w-25 mr-2 radius_medium"
					>
						Cancelar
					</Button>

					<Button
						disabled={!inputValue || inputValue <= 0 || isLoading}
						variant="contained"
						onClick={handleContinueButtonClick}
						className="mt-2 w-25 radius_medium"
					>
						{!isLoading ? (
							'Continuar'
						) : (
							<>
								<span
									className="spinner-border spinner-border-sm mr-2"
									role="status"
									aria-hidden="true"
								/>
								<span className="visually-hidden"> Cargando...</span>
							</>
						)}
					</Button>
				</div>
			</>

			{(status === 'success' || status === 'error') && (
				<RechargeFinishModal
					open={successModalIsOpen}
					onClose={handleFinish}
					onError={handleError}
					phone={data.phone}
					amount={inputValue}
					isSuccess={status === 'success'}
					isError={!status === 'success'}
				/>
			)}
		</>
	);
};

export default RechargeForm;
