import React from 'react';
import { Link, useHistory } from 'react-router-dom';

import SimpleForm from '../../components/common/SimpleForm';

import { NAVIGATION_ROUTES } from '../../constants/navigation-routes';
import { NEW_PASSWORD } from '../../constants/schemas/new-password';

import logo from '../../assets/Logotipo.png';

const NewPassword = () => {
	const history = useHistory();

	const onSimpleFormSave = () => {
		history.push(NAVIGATION_ROUTES.LOGIN);
	};

	return (
		<>
			<img alt="logo app" src={logo} className="w-50 h-25 mb-5" />

			<div className="w-50 d-flex flex-column justify-content-center align-items-center">
				<h3 className="text-center mb-2 font-weight-bold">Nueva contraseña</h3>
				<p className="text-center mb-4">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam id laoreet dui.
				</p>
				<SimpleForm
					onSave={onSimpleFormSave}
					schema={NEW_PASSWORD}
					saveText={<p className="px-5 m-0">Enviar</p>}
				/>
			</div>

			<div className="d-flex flex-column justify-content-between w-50 text-center h-25">
				<Link to={NAVIGATION_ROUTES.LOGIN} className="color_primary mt-3">
					Iniciar Sesión
				</Link>
				<p>Lorem ipsum Política de privacidad y nuestros Términos y Condiciones</p>
			</div>
		</>
	);
};
export default NewPassword;
