import React from 'react';

/**
 * Component for display a child component inside a layout
 *
 * @component
 *
 * @param {Object} props - Component's props
 * @param {*} props.children - Info to display inside the layout container
 */

const Layout = ({ children }) => {
	return <div className="main">{children}</div>;
};

export default Layout;
