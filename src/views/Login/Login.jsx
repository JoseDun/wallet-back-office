import React from 'react';
import { useMutation } from 'react-query';
import { Link, useHistory } from 'react-router-dom';

import { setToken } from '../../helpers/tokenHelper';

import SimpleForm from '../../components/common/SimpleForm';

import { NAVIGATION_ROUTES } from '../../constants/navigation-routes';
import { LOGIN_FORM } from '../../constants/schemas/login-form';

import logo from '../../assets/Logotipo.png';
import { loginUser } from '../../apis/login';

const Login = () => {
	const history = useHistory();

	const {
		mutate: signIn,
		isError,
		isLoading,
	} = useMutation(loginUser, {
		mutationKey: 'loginUser',
		onSuccess: ({ token }) => {
			setToken(token);
			history.push(NAVIGATION_ROUTES.HOME);
		},
	});

	const onSimpleFormSave = (data) => {
		signIn(data);
	};

	return (
		<>
			<img alt="logo app" src={logo} className="w-50 h-25 mb-5" />

			<div className="w-50  d-flex flex-column justify-content-center align-items-center">
				<h3 className="text-center mb-5 font-weight-bold">Iniciar Sesión</h3>

				<SimpleForm
					isLoading={isLoading}
					onSave={onSimpleFormSave}
					schema={LOGIN_FORM}
					saveText={<p className="px-5 m-0">Iniciar Sesión</p>}
					formError={isError && <p className="color_danger">Credenciales invalidas</p>}
				/>
			</div>

			<div className="d-flex flex-column justify-content-between w-50 text-center h-25">
				<Link to={NAVIGATION_ROUTES.RECOVERY} className="color_primary mt-3">
					Olvide Mi Contraseña
				</Link>
				<p>Política de privacidad y nuestros Términos y Condiciones</p>
			</div>
		</>
	);
};

export default Login;
