import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { getToken, getUserData, tokenHasExpired } from '../helpers/tokenHelper';

import Layout from '../components/layout/Layout';
import { NAVIGATION_ROUTES } from '../constants/navigation-routes';

const ProtectedRoute = ({ component: Component, ...rest }) => (
	<Route
		{...rest}
		render={(props) => {
			const localToken = getToken();
			const userData = getUserData();

			return (
				<>
					{!localToken || tokenHasExpired() ? (
						<Redirect to={{ pathname: NAVIGATION_ROUTES.LOGIN }} />
					) : (
						<Layout userData={userData}>
							<Component {...props} />
						</Layout>
					)}
				</>
			);
		}}
	/>
);

export default ProtectedRoute;
