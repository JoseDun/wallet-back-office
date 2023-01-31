import React from 'react';

import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';

import { useModalState } from '../../hooks/useModalState';

import RechargeForm from './RechargeForm';
import CloseModalButton from '../common/CloseModalButton';

const RechargeFormModal = ({ opened, onClose, ...props }) => {
	const { isOpened, setIsOpened } = useModalState(opened);

	const closeModal = (data) => {
		setIsOpened(false);
		onClose(data);
	};

	return (
		<Dialog open={isOpened} onClose={() => closeModal(null)} maxWidth="xl">
			<CloseModalButton onClick={() => closeModal(null)} />
			<DialogContent className="bg_light" style={{ width: '750px', minHeight: '500px' }}>
				<RechargeForm onCancel={() => closeModal(null)} onSuccess={closeModal} {...props} />
			</DialogContent>
		</Dialog>
	);
};

export default RechargeFormModal;
