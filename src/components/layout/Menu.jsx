import React from 'react';

import LogoutIcon from '@mui/icons-material/Logout';

import { Storage } from '../../helpers/storage';

import MenuItem from './MenuItem';

import { MENU_ITEMS } from '../../constants/menu';

import '../../styles/menu.css';
import { NAVIGATION_ROUTES } from '../../constants/navigation-routes';

const Menu = ({ userData }) => {
	const { email, name } = userData || {};

	const menu = MENU_ITEMS;

	const handleLogout = () => {
		Storage.clear();
		window.location = NAVIGATION_ROUTES.LOGIN;
	};

	return (
		<menu className="bg_light d-flex flex-column justify-content-between flex-nowrap">
			<nav>
				<header className="d-flex p-2 align-items-center my-5">
					<div className="d-flex flex-column pl-2">
						<strong className="text-capitalize color_primary m-0">{name}</strong>
						<small className="color_medium m-0">{email}</small>
					</div>
				</header>
				<br />
				<ul className="d-flex flex-column overflow-auto">
					{menu.map((item) => (
						<MenuItem key={item.path} {...item} />
					))}
				</ul>
			</nav>
			<footer className="p-2 w-100 mt-3">
				<button
					type="button"
					className="logout btn bg_white shadow radius_medium w-100 p-2 d-flex align-items-center m-0"
					onClick={handleLogout}
				>
					<div className="bg_primary p-2 radius_medium color_white mr-3">
						<LogoutIcon />
					</div>
					<p className="m-0 w-100 text-left">Cerrar Sesión</p>
				</button>
			</footer>
		</menu>
	);
};

export default Menu;
