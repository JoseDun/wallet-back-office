import HomeIcon from '@mui/icons-material/Home';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import PersonIcon from '@mui/icons-material/Person';

import { NAVIGATION_ROUTES } from './navigation-routes';

export const MENU_ITEMS = [
	{
		title: 'Inicio',
		path: NAVIGATION_ROUTES.HOME,
		icon: <HomeIcon />,
	},
	{
		title: 'Usuarios',
		path: NAVIGATION_ROUTES.USERS,
		icon: <PersonIcon />,
	},
	{
		title: 'Recargas',
		path: NAVIGATION_ROUTES.RECHARGE,
		icon: <AttachMoneyIcon />,
	},
];
