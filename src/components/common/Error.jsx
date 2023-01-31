import React from 'react';

import { Button } from '@mui/material';
import errorAsset from '../../assets/images/empty-asset.png';

/**
 * Component for display a error indicator
 *
 * @component
 *
 * @param {Object} props - Component's props
 * @param {*} [props.title] - Title to display inside the layout container
 * @param {*} props.onCancel - Function to cancel the action
 * @param {*} props.onRetry - Function to retry the action
 * @param {*} props.color - Color of the button
 */
const Error = ({ title, onCancel, onRetry, color = 'primary' }) => {
	return (
		<>
			<figure className="asset d-flex justify-content-center ">
				<img src={errorAsset} alt="Error asset" style={{ width: '400px' }} />
			</figure>
			{title && <p className="color_medium text-center m-0 my-3">{title}</p>}
			<div className="d-flex">
				{onCancel && (
					<Button color={color} variant="outlined" onClick={onCancel}>
						cancel
					</Button>
				)}
				{onRetry && (
					<Button
						className={onCancel ? 'ml-2' : ''}
						color={color}
						variant="contained"
						onClick={onRetry}
					>
						retry
					</Button>
				)}
			</div>
		</>
	);
};

export default Error;
