import React from 'react';

import DialogTitle from '@mui/material/DialogTitle';

import CloseModalButton from './CloseModalButton';

/**
 * Component for display an header modal
 *
 * @component
 *
 * @param {Object} props - Component's props
 * @param {*} props.children - Children to display
 * @param {*} props.onClose - Callback to close the Modal
 * @param {*} props.title - Title to display
 * @param {*} props.color - Color of the header
 */
const ModalHeader = ({ children, onClose, title, color = 'primary', ...props }) => {
	return (
		<DialogTitle {...props}>
			<span className={`color_${color}`}>{children || title}</span>
			{!!onClose && <CloseModalButton onClick={() => onClose(null)} />}
		</DialogTitle>
	);
};

export default ModalHeader;
