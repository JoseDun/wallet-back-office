import React from 'react';
import Menu from './Menu';

import '../../styles/layout.css';

const Layout = ({ children, userData }) => {
	return (
		<section className="d-flex w-100 h-100">
			<Menu userData={userData} />
			<div className="main">{children}</div>
		</section>
	);
};

export default Layout;
