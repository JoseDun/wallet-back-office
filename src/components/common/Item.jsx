import React from 'react';

import { CheckCircle } from '@mui/icons-material';
import { Radio } from '@mui/material';

const User = ({
	selectable,
	active,
	disabled,
	title,
	description,
	onSelect,
	startIcon,
	end,
	endIcon,
	color = 'primary',
}) => {
	const emitSelection = () => {
		if (disabled) return;
		if (!onSelect) return;
		onSelect(!active);
	};

	const onClick = (event) => {
		event.preventDefault();
		emitSelection();
	};

	const onKeyUpHandler = (event) => {
		event.preventDefault();
		const allowedKey = 'Enter';
		if (event.key !== allowedKey) return;
		emitSelection();
	};

	return (
		<>
			<div
				aria-label="item"
				className={`w-100 container radius_medium p-2 d-flex justify-content-between ${
					active && !disabled ? `bg_${color}` : 'bg_medium'
				}`}
				role="button"
				onClick={onClick}
				onKeyUp={onKeyUpHandler}
				tabIndex={0}
			>
				<div className="d-flex align-items-center justify-content-between w-100">
					<div className="d-flex align-items-center w-100">
						<div>
							{startIcon && (
								<div
									className={`ml-2 asset bg_white radius_small p-2 color_${
										active && !disabled ? color : 'dark'
									}`}
								>
									{startIcon}
								</div>
							)}
						</div>
						<div
							className={`mx-3 m-0 text-truncate ${
								active && !disabled ? 'color_white' : 'color_dark'
							}`}
						>
							<b>{title}</b> <br />
							<small>{description}</small>
						</div>
					</div>

					<div>
						{endIcon && (
							<div
								className={`asset radius_small p-2 ${
									active && !disabled ? 'color_white' : 'color_dark'
								}`}
							>
								{endIcon}
							</div>
						)}
					</div>
				</div>
				<div className="end p-2">
					{end}
					{selectable && !end && (
						<Radio
							checked={selectable && active}
							checkedIcon={<CheckCircle />}
							className={`color_${active && !disabled ? 'white' : 'dark'}`}
						/>
					)}
				</div>
			</div>
		</>
	);
};

export default User;
