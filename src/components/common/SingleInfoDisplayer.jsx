import React from 'react';

/**
 * Component for display an advice container
 *
 * @component
 *
 * @param {Object} props - Component's props
 * @param {*} props.children - Children to display inside the container
 */
const SingleInfoDisplayer = ({ asset, title, content, className, ...props }) => (
	<div className={`d-flex w-100 align-items-center ${className || ''}`} {...props}>
		<div className="asset px-3" style={{ maxWidth: '80px' }}>
			<img src={asset} alt="icon" />
		</div>
		<div className="d-flex flex-column">
			<b className="m-0 color_primary text-uppercase">{title}</b>
			<small className="color_medium text-uppercase">{content || '-'}</small>
		</div>
	</div>
);

export default SingleInfoDisplayer;
