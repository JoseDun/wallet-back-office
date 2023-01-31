import React, { useEffect, useState } from 'react';

import DoneAllIcon from '@mui/icons-material/DoneAll';

import { capitalize } from '../../helpers/strings';

import SearchBar from './SearchBar';
import Empty from './Empty';
import Item from './Item';

const ItemsList = ({
	title,
	items = [],
	searchable = true,
	selectable = true,
	capitalizeTitle = true,
	color = 'primary',
	onSelect,
	multiple,
	selected,
	itemIcon,
}) => {
	const [itemsSelected, setItemsSelected] = useState([]);
	const [query, setQuery] = useState('');

	useEffect(() => {
		setItemsSelected(selected || []);
	}, [selected, setItemsSelected]);

	const matchesTheQuery = (item) => {
		const match = query?.slice()?.toLowerCase();
		return item?.name?.toLowerCase()?.match(match);
	};

	const handleSelection = (value) => {
		setItemsSelected(value);
		if (!onSelect) return;
		onSelect(value);
	};

	const addItem = (item) => {
		const ITEMS = itemsSelected.slice();
		const DATA = !multiple ? [item] : [...ITEMS, item];
		handleSelection(DATA);
	};

	const removeItem = (index) => {
		const ITEMS = itemsSelected.slice();
		ITEMS.splice(index, 1);
		handleSelection(ITEMS);
	};

	const onOneItemSelected = (item) => {
		if (!selectable) return null;
		const ITEMS = itemsSelected;
		const index = ITEMS.findIndex((element) => element.id === item.id);
		if (index >= 0) return removeItem(index);
		return addItem(item);
	};

	const onSearchBarChange = (change) => {
		setQuery(change);
	};

	return (
		<div className="w-100 bg_white main-container p-0">
			{title && (
				<h3 className={`text-uppercase text-center m-0 mb-3 color_${color}`}>{title}</h3>
			)}
			{searchable && <SearchBar onChange={onSearchBarChange} />}
			<div className={`w-100 ${searchable ? 'pt-5' : ''}`}>
				{items
					.filter((item) => (!searchable || !query ? true : matchesTheQuery(item)))
					.map((item) => (
						<div key={item.id} className="mb-3">
							<Item
								selectable={selectable}
								color={color}
								startIcon={itemIcon || <DoneAllIcon />}
								title={
									(capitalizeTitle ? capitalize(item?.title) : item?.title) ||
									'Unknow'
								}
								description={item.description || ''}
								onSelect={() => onOneItemSelected(item)}
								active={
									!selectable ||
									(itemsSelected &&
										!!itemsSelected.find((element) => element.id === item.id))
								}
							/>
						</div>
					))}
				{!items.length && <Empty title="no_data" />}
			</div>
		</div>
	);
};

export default ItemsList;
