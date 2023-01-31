import React, { useState } from 'react';

import { Button, Box, Popover } from '@mui/material';

/**
 *Component for display an image preview
 *
 * @component
 *
 * @param {Object} props - Component's props
 * @param {*} props.url - images's url
 * @param {*} [props.className] - Aditional className
 * @param {*} [props.elevation=sm] - Container shadow
 * @param {*} [props.width=100px] - Container width
 * @param {*} [props.height=100px] - Container height
 * @param {*} [props.style] - Images's style
 * @param {*} [props.textButton] - Text to display in the button
 * @param {*} [props.buttonProps] - Aditional props to pass to button
 * @returns
 */
const ImagePreview = ({
	url,
	className,
	elevation = 'sm',
	width = '100px',
	height = '100px',
	style,
	textButton,
	buttonProps = {},
}) => {
	const [anchorEl, setAnchorEl] = useState(null);

	/**
	 * Function to handle the container image click event
	 *
	 * @param {MouseEvent} event - Click event
	 */
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};

	/**
	 * Function to handle the close popover event
	 */
	const handleClose = () => {
		setAnchorEl(null);
	};

	/**
	 * Handle keyboard event
	 *
	 * @param {KeyboardEvent} event - Keyboard event
	 */
	const onKeyUpHandler = (event) => {
		event.preventDefault();
		const allowedKey = 'Enter';
		if (event.key !== allowedKey) return;
		setAnchorEl(event.currentTarget);
	};

	return (
		<>
			{!textButton ? (
				<div
					className={`overflow-hidden radius_small shadow-${elevation} ${
						className || ''
					}`}
					role="button"
					tabIndex="0"
					onClick={handleClick}
					onKeyUp={onKeyUpHandler}
					style={{
						width,
						height,
						...style,
					}}
				>
					<img
						src={url}
						alt="Evidence"
						style={{
							objectFit: 'cover',
						}}
					/>
				</div>
			) : (
				<Button onClick={handleClick} onKeyUp={onKeyUpHandler} {...buttonProps}>
					{textButton}
				</Button>
			)}

			<Popover open={!!anchorEl} anchorEl={anchorEl} onClose={handleClose}>
				<Box sx={{ maxWidth: 460 }}>
					<img src={url} alt="Evidence" />
				</Box>
			</Popover>
		</>
	);
};
export default ImagePreview;
