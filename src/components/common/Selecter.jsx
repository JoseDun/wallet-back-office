import React, { useCallback, useEffect, useState } from 'react';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import ItemsListModal from './ItemsListModal';
import Item from './Item';

const Selecter = ({
	single = true,
	disabled,
	onChange,
	value,
	icon,
	items = [],
	placeholder,
	searchable,
}) => {
	const [itemSelected, setItemSelected] = useState();
	const [modalIsVisible, setModalIsVisible] = useState(false);

	useEffect(() => {
		setItemSelected(value);
	}, [value]);

	const handleSelection = useCallback(
		(selected) => {
			setItemSelected(selected);
			onChange(selected);
		},
		[onChange, setItemSelected]
	);

	const openModal = () => {
		setModalIsVisible(true);
	};

	const onItemsListModalClose = (response) => {
		handleSelection(response[0]);
		setModalIsVisible(false);
	};

	const onItemSelect = () => {
		if (disabled) return;
		openModal();
	};

	return (
		<>
			{((single && items?.length > 1) || !single) && (
				<>
					<Item
						color="dark"
						startIcon={icon}
						endIcon={<ExpandMoreIcon />}
						title={itemSelected?.title || placeholder || 'Selecciona un item'}
						description={itemSelected?.description}
						onSelect={onItemSelect}
						active={itemSelected && !disabled}
					/>
					<ItemsListModal
						color="dark"
						selected={itemSelected ? [itemSelected] : []}
						opened={modalIsVisible}
						onClose={onItemsListModalClose}
						itemIcon={icon}
						items={items}
						searchable={searchable}
					/>
				</>
			)}
		</>
	);
};

export default Selecter;
