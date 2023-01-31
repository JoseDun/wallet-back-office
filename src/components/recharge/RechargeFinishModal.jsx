/* eslint-disable max-len */
import React from 'react';

import { Modal, Box, Button } from '@mui/material';

import RechargeFinish from './RechargeFinish';

const style = {
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: 500,
	bgcolor: 'background.paper',
	boxShadow: 24,
	p: 4,
};

const RechargeFinishModal = ({ open, onClose, onError, phone, amount, isSuccess }) => {
	return (
		<Modal open={open} onClose={onClose}>
			<Box sx={style} className="radius_large">
				<RechargeFinish isSuccess={isSuccess} amount={amount} phone={phone} />
				<div className="d-flex justify-content-end w-100 mt-2">
					<Button
						variant="contained"
						color={isSuccess ? 'success' : 'error'}
						onClick={isSuccess ? onClose : onError}
						className="mt-2"
					>
						Continuar
					</Button>
				</div>
			</Box>
		</Modal>
	);
};

export default RechargeFinishModal;
