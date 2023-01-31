import React from 'react';

import { Tooltip } from '@mui/material';

import TimeAdvice from './TimeAdvice';

import '../../styles/components/TimeIntervalAdvice.css';

const TimeIntervalAdvice = ({
	color,
	startTime,
	endTime,
	startTitle,
	endTitle,
	className,
	tooltip,
}) => {
	return (
		<Tooltip title={tooltip || ''}>
			<div
				className={`box d-flex p-2 radius_large ${className || ''} ${
					!color ? 'bg_primary' : ''
				}`}
				style={{ backgroundColor: color }}
			>
				<div className="box-item active d-flex align-items-center pl-2">
					<TimeAdvice color={color} title={startTitle} date={startTime} />
					<div className="arrow" />
				</div>
				<div className="box-item ml-4 d-flex align-items-center pl-2">
					<TimeAdvice title={endTitle} date={endTime} className="color_white" />
				</div>
			</div>
		</Tooltip>
	);
};

export default TimeIntervalAdvice;
