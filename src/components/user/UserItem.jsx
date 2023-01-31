import React from 'react';

import { Tooltip } from '@mui/material';

import { capitalize } from '../../helpers/strings';

import DateAdvice from '../common/DateAdvice';

import { COLORS } from '../../constants/colors';

const UserItem = ({ data = {}, className, onClick, ...props }) => {
	const { expeditionDate, lastname, name, userId, document } = data;

	const lastnameToDisplay = capitalize(lastname);
	const nameToDisplay = capitalize(name);

	return (
		<div
			role={onClick ? 'button' : 'none'}
			tabIndex={0}
			className={`w-100 bg_white shadow radius_medium d-flex flex-column p-2  ${
				className || ''
			}`}
			onClick={() => onClick && onClick()}
			{...props}
		>
			<div className="w-100 d-flex ">
				<div className=" d-flex w-50">
					<DateAdvice
						date={expeditionDate}
						tooltip="Fecha de registro"
						textColor="white"
						color={COLORS.PRIMARY}
					/>
					<div className="d-flex flex-column ml-3">
						<Tooltip title="Nombre">
							<b className="color_primary">{`${nameToDisplay}  ${lastnameToDisplay}`}</b>
						</Tooltip>

						<Tooltip title="Cédula">
							<p className="color_medium m-0">{`C.I. ${document}`}</p>
						</Tooltip>
					</div>
				</div>
				<div className="w-50 d-flex justify-content-end align-items-center mr-2">
					<Tooltip title="ID de la cuenta">
						<small className="color_white radius_medium bg_dark px-3">{`User ID:${userId}`}</small>
					</Tooltip>
				</div>
			</div>
		</div>
	);
};

export default UserItem;
