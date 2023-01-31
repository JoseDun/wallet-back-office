import { Button, Dialog, DialogActions, DialogContent } from '@mui/material';
import React, { useEffect, useState } from 'react';

import ItemsList from './ItemsList';

const ItemsListModal = ({
	onClose,
	opened,
	selected,
	selectable = true,
	color = 'primary',
	...props
}) => {
	const [isOpen, setIsOpen] = useState(false);
	const [itemsSelected, setItemsSelected] = useState();

	useEffect(() => {
		setIsOpen(!!opened);
	}, [opened]);

	useEffect(() => {
		setItemsSelected(selected || []);
	}, [selected]);

	const closeModal = (data) => {
		setItemsSelected(data);
		setIsOpen(false);
		onClose(data);
	};

	const onItemsListSelect = (value) => {
		setItemsSelected(value);
	};

	return (
		<Dialog open={isOpen} onClose={() => closeModal(selected)}>
			<DialogContent dividers style={{ width: '600px', height: '500px' }}>
				<ItemsList
					onSelect={onItemsListSelect}
					selected={itemsSelected}
					selectable={selectable}
					color={color}
					{...props}
				/>
			</DialogContent>
			<DialogActions>
				{selectable && (
					<Button
						className="rounded-pill px-4"
						onClick={() => closeModal(selected)}
						color="success"
						variant="outlined"
					>
						cancelar
					</Button>
				)}
				<Button
					disabled={!itemsSelected}
					onClick={() => closeModal(itemsSelected)}
					className="rounded-pill px-4"
					color="primary"
					variant="contained"
					autoFocus
				>
					Aceptar
				</Button>
			</DialogActions>
		</Dialog>
	);
};

export default ItemsListModal;
