import React from 'react';

import { Button } from '@mui/material';
import emptyAsset from '../../assets/logo.svg';

/**
 * Component for display a empty indicator
 *
 * @component
 *
 * @param {Object} props - Component's props
 * @param {*} [props.title] - Title to display inside the layout container
 * @param {*} props.onContinue - Function to continue the action
 */
const Empty = ({ title, onContinue }) => {
	return (
		<>
			<figure className="asset d-flex justify-content-center ">
				<img src={emptyAsset} alt="empty asset" style={{ width: '400px' }} />
			</figure>
			{title && <p className="color_medium text-center m-0 my-3">{title}</p>}
			{onContinue && (
				<Button
					className="rounded-pill px-5 shadow w-auto"
					color="primary"
					variant="contained"
					autoFocus
					onClick={onContinue}
				>
					continue
				</Button>
			)}
		</>
	);
};

export default Empty;
