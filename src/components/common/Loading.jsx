import React from 'react';

import CircularProgress from '@mui/material/CircularProgress';
import loadingAsset from '../../assets/images/empty-asset.png';

/**
 * Component for display a progress indicator
 *
 * @component
 *
 * @param {Object} props - Component's props
 * @param {*} props.title - Title to display inside the layout container
 * @param {*} props.simple - Indicates when the component has a simple styles and not show the asset
 */
const Loading = ({ title, simple, ...props }) => {
	return (
		<>
			{!simple && (
				<figure className="asset d-flex justify-content-center ">
					<img src={loadingAsset} alt="Loading asset" />
				</figure>
			)}
			<p className={`color_medium ${!simple ? 'text-center m-0 my-3' : ''}`}>{title}...</p>
			<CircularProgress {...props} />
		</>
	);
};

export default Loading;
