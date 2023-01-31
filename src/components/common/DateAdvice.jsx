import React from 'react';

import { Tooltip } from '@mui/material';

/**
 * Component for display a date advice.
 *
 * @component
 *
 * @param {Object} props - Component's props
 * @param {*} props.date - Date to display
 * @param {*} props.color - Color of the date container
 * @param {*} props.tooltip - Tooltip to display
 * @param {*} props.className - Additional class name
 * @param {*} props.light - Flag to display a light version
 */
const DateAdvice = ({ date, color, className = '', tooltip = '', light, plane, textColor }) => {
	const parsedDate = new Date(date || Date.now());

	let day = parsedDate.getDate();
	day = day > 10 ? day : `0${day}`;
	const month = parsedDate.toLocaleString('default', { month: 'short' }).replace('.', '');

	return (
		<Tooltip title={tooltip}>
			<div
				className={`
					rounded-circle d-flex flex-column justify-content-center align-items-center 
					${!light && color !== '#fff' ? 'color_white' : 'color_primary'}
					${className}
					${!plane ? 'shadow-sm' : ''}
				`}
				style={{
					backgroundColor: color || '#000',
					width: '50px',
					minWidth: '50px',
					height: '50px',
				}}
			>
				{date ? (
					<>
						<b
							style={{
								marginBottom: '-5px',
								color: textColor,
							}}
						>
							{day}
						</b>
						<small style={{ color: textColor }} className="m-0 text-uppercase">
							{month}
						</small>
					</>
				) : (
					'-'
				)}
			</div>
		</Tooltip>
	);
};

export default DateAdvice;
