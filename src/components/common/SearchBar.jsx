import React, { useState } from 'react';

import { IconButton, InputBase, Paper } from '@mui/material';
import { Search, Clear } from '@mui/icons-material';

const SearchBar = ({
	onChange,
	autoFocus = false,
	disabled = false,
	placeholder = 'Buscar',
	onEnterKeyUp,
}) => {
	const [value, setValue] = useState('');

	let timeout;

	const emitChange = (change) => {
		clearTimeout(timeout);
		onChange(change);
	};

	const onClearButtonClick = () => {
		if (disabled) return;
		setValue('');
		onChange('');
	};

	const onInputChange = (event) => {
		setValue(event.target.value);
		emitChange(event.target.value);
	};

	return (
		<Paper
			component="form"
			className="bg_white d-flex align-items-center w-100 p-1 radius_medium"
		>
			<Search className="m-2" />
			<InputBase
				onChange={onInputChange}
				disabled={disabled}
				autoFocus={autoFocus}
				placeholder={placeholder}
				value={value}
				className="w-100"
				onKeyUp={(event) => {
					if (event.key !== 'Enter') return;
					onEnterKeyUp(value);
				}}
				onKeyDown={(event) => {
					if (event.key !== 'Enter') return;
					event.preventDefault();
				}}
			/>
			<IconButton onClick={onClearButtonClick} className="p-2" aria-label="clear">
				<Clear />
			</IconButton>
		</Paper>
	);
};

export default SearchBar;
