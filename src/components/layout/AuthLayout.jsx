import React from 'react';

import logo from '../../assets/Logotipo.png';

import '../../styles/layout.css';

const AuthLayout = ({ children }) => {
	return (
		<div className="bg_primary w-100 h-100 d-flex justify-content-end">
			<div className="min-vh-100 w-50  d-flex justify-content-center align-items-center">
				<img
					style={{ filter: 'brightness(2)' }}
					alt="logo app"
					src={logo}
					className="w-50"
				/>
			</div>
			<div className="bg_light w-50 min-vh-100 d-flex flex-column justify-content-center align-items-center">
				{children}
			</div>
		</div>
	);
};

export default AuthLayout;
