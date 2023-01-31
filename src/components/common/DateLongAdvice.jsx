import React from 'react';
import moment from 'moment';

import { Tooltip } from '@mui/material';

import { LONG_DATE_FORMAT } from '../../constants/date-formats';

/**
 * Component for display a time advice.
 *
 * @component
 *
 * @param {Object} props - Component's props
 * @param {*} props.date - Date to display
 * @param {*} props.color - Color of the date container
 * @param {*} props.tooltip - Tooltip to display
 * @param {*} props.className - Additional class name
 * @param {*} props.title - Title to display
 */
const DateLongAdvice = ({ date, color, className, tooltip, title }) => {
	const parsedDate = new Date(date || Date.now());

	const time = moment(parsedDate).format(LONG_DATE_FORMAT);

	return (
		<Tooltip title={tooltip || ''}>
			<div
				className={`d-flex flex-column ${className || ''} ${!color ? 'color_primary' : ''}`}
			>
				{!!title && <small className="m-0 color_medium">{title}</small>}
				<b style={{ marginBottom: '-5px', color }}>{date ? time : '-'}</b>
			</div>
		</Tooltip>
	);
};

export default DateLongAdvice;
