import React from 'react';

import { Button } from '@mui/material';
import successAsset from '../../assets/images/empty-asset.png';

/**
 * Component for display a success indicator
 *
 * @component
 *
 * @param {Object} props - Component's props
 * @param {*} [props.title] - Title to display inside the layout container
 * @param {*} props.onContinue - Function to continue the action
 * @param {*} props.color - Color of the button
 */
const Success = ({ title, onContinue, color = 'primary' }) => {
	return (
		<>
			<figure className="asset px-5 d-flex justify-content-center ">
				<img src={successAsset} alt="Success asset" />
			</figure>
			{title && <p className="color_medium text-center m-0 my-3">{title}</p>}
			{onContinue && (
				<Button color={color} variant="contained" autoFocus onClick={onContinue}>
					continue
				</Button>
			)}
		</>
	);
};

export default Success;
