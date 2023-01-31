import React from 'react';
import axios from 'axios';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

import { Container } from '@mui/material';

import {
	axiosRequestInterceptor,
	axiosResponseErrorInterceptor,
} from '../helpers/axios-interceptors';

import ErrorBoundary from '../containers/ErrorBoundary';
import CustomQueryClientProvider from '../containers/CustomQueryClientProvider';
import MaterialUiThemeProvider from '../containers/MaterialUiThemeProvider';

import { Home, Login, NewPassword, Recharge, Recovery, Users } from '../views';

import AuthRoute from './AuthRoute';
import ProtectedRoute from './ProtectedRoute';

import { NAVIGATION_ROUTES } from '../constants/navigation-routes';

import '../styles/App.css';

axios.interceptors.request.use(axiosRequestInterceptor);

axios.interceptors.response.use((response) => response, axiosResponseErrorInterceptor);

const App = () => {
	return (
		<ErrorBoundary>
			<BrowserRouter>
				<Switch>
					<CustomQueryClientProvider>
						<MaterialUiThemeProvider>
							<Container maxWidth={false} disableGutters>
								<AuthRoute exact path={NAVIGATION_ROUTES.LOGIN} component={Login} />
								<AuthRoute
									exact
									path={NAVIGATION_ROUTES.RECOVERY}
									component={Recovery}
								/>
								<AuthRoute
									exact
									path={NAVIGATION_ROUTES.NEW_PASSWORD}
									component={NewPassword}
								/>
								<ProtectedRoute
									exact
									path={NAVIGATION_ROUTES.HOME}
									component={Home}
								/>
								<ProtectedRoute
									exact
									path={NAVIGATION_ROUTES.RECHARGE}
									component={Recharge}
								/>
								<ProtectedRoute
									exact
									path={NAVIGATION_ROUTES.USERS}
									component={Users}
								/>

								<Route
									path="*"
									element={<Redirect to={NAVIGATION_ROUTES.LOGIN} />}
								/>
							</Container>
						</MaterialUiThemeProvider>
					</CustomQueryClientProvider>
				</Switch>
			</BrowserRouter>
		</ErrorBoundary>
	);
};

export default App;
