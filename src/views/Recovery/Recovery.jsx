import React from 'react';
import { Link, useHistory } from 'react-router-dom';

import SimpleForm from '../../components/common/SimpleForm';

import { NAVIGATION_ROUTES } from '../../constants/navigation-routes';
import { RECOVERY_FORM } from '../../constants/schemas/recovery-form';

import logo from '../../assets/Logotipo.png';

const Recovery = () => {
	const history = useHistory();

	const onSimpleFormSave = () => {
		history.push(NAVIGATION_ROUTES.NEW_PASSWORD);
	};

	return (
		<>
			<img alt="logo app" src={logo} className="w-50 h-25 mb-5" />

			<div className="w-50  d-flex flex-column justify-content-center align-items-center">
				<h3 className="text-center mb-5 font-weight-bold">Recuperar contraseña</h3>
				<SimpleForm
					onSave={onSimpleFormSave}
					schema={RECOVERY_FORM}
					saveText={<p className="px-5 m-0">Enviar</p>}
				/>
			</div>

			<div className="d-flex flex-column justify-content-between w-50 text-center h-25">
				<Link to={NAVIGATION_ROUTES.LOGIN} className="color_primary mt-3">
					Iniciar Sesión
				</Link>
				<p>
					Para recuperar tu contraseña por favor escribe el correo al que pertenece tu
					cuenta.
				</p>
			</div>
		</>
	);
};

export default Recovery;
