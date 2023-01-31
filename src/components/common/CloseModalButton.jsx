import React from 'react';

import { IconButton } from '@mui/material';

import CloseIcon from '@mui/icons-material/Close';

/**
 * Component for display an close button
 *
 * @component
 *
 * @param {Object} props - Component's props
 * @param {*} props.onClick - Handle click on the close button
 * @param {*} props.className - Additional class name
 */
const CloseModalButton = ({ onClick, className }) => (
	<div className={`position-absolute ${className || ''}`} style={{ right: '0px', top: '0px' }}>
		<IconButton onClick={onClick}>
			<CloseIcon />
		</IconButton>
	</div>
);

export default CloseModalButton;
