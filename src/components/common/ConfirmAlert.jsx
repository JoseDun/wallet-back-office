import React from 'react';
import {
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
} from '@mui/material';

import { useModalState } from '../../hooks/useModalState';

/**
 * Component to display a confirm in a dialog
 *
 * @component
 *
 * @param {Object} props - Component's props
 * @param {Boolean} [props.opened] - Handle the dialog state open/close
 * @param {Method} props.onClose - Function to handle the close event
 * @param {*} [props.title] - Title to display inside the layout container
 * @param {*} [props.message] - Message to display in the item container
 */
const ConfirmAlert = ({ opened, onClose, title, message, titleButton, color = 'primary' }) => {
	const { isOpened, setIsOpened } = useModalState(opened);

	/**
	 * Function to handle the close event
	 *
	 * @param {*} value - Data to use in handle function
	 */
	const handleClose = (value) => {
		setIsOpened(false);
		if (!onClose) return;
		onClose(value);
	};

	return (
		<div>
			<Dialog
				open={isOpened}
				onClose={handleClose}
				aria-labelledby="alert-dialog-title"
				aria-describedby="alert-dialog-description"
				maxWidth="xs"
			>
				<DialogTitle id="alert-dialog-title">{title}</DialogTitle>
				<DialogContent>
					<DialogContentText id="alert-dialog-description">{message}</DialogContentText>
				</DialogContent>
				<DialogActions>
					<Button className="mr-2" color={color} onClick={() => handleClose(false)}>
						cancel
					</Button>
					<Button
						autoFocus
						color={color}
						variant="contained"
						onClick={() => handleClose(true)}
					>
						{titleButton}
					</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
};

export default ConfirmAlert;
