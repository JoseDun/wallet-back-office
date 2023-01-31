import React from 'react';

/**
 * Component for display an advice container
 *
 * @component
 *
 * @param {Object} props - Component's props
 * @param {*} props.children - Children to display inside the container
 */
const AdviceContainer = ({ children, maxWidth = '320px' }) => (
	<div
		style={{ maxWidth }}
		className="w-100 mx-auto my-auto d-flex flex-column align-items-center"
	>
		{children}
	</div>
);

export default AdviceContainer;
