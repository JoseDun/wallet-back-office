import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { getToken, tokenHasExpired } from '../helpers/tokenHelper';

import AuthLayout from '../components/layout/AuthLayout';

import { NAVIGATION_ROUTES } from '../constants/navigation-routes';

const AuthRoute = ({ component: Component, ...rest }) => (
	<Route
		{...rest}
		render={(props) => {
			const localToken = getToken();

			return (
				<>
					{localToken && !tokenHasExpired() ? (
						<Redirect to={{ pathname: NAVIGATION_ROUTES.HOME }} />
					) : (
						<AuthLayout>
							<Component {...props} />
						</AuthLayout>
					)}
				</>
			);
		}}
	/>
);

export default AuthRoute;
