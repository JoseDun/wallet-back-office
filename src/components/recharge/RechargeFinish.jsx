import React from 'react';

import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import PersonIcon from '@mui/icons-material/Person';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

const RechargeFinish = ({ isSuccess, amount, phone }) => {
	return (
		<>
			{isSuccess ? (
				<>
					<b className="text-center">
						<h4 className="mb-2 color_secondary">
							¡La recarga fue realizada con éxito!
						</h4>
						<p className="color_medium font-weight-light">
							¡Una gran noticia! Has transferido con éxito dinero a la cuenta. Ahora
							el usuario puede usar su dinero desde su billetera personal.
						</p>
					</b>

					<div className="d-flex flex-row justify-content-around mt-4 w-100  align-items-center">
						<div className="color_secondary d-flex flex-column align-items-center justify-content-center">
							<PersonIcon />
							<p className="pt-2">{phone}</p>
						</div>

						<div className="color_secondary d-flex flex-column align-items-center justify-content-center">
							<AttachMoneyIcon />
							<p className="pt-2"> $ {amount}</p>
						</div>

						<div className="color_secondary d-flex flex-column align-items-center justify-content-center">
							<CalendarMonthIcon />
							<p className="pt-2">{new Date()?.toLocaleDateString('en-CA')}</p>
						</div>
					</div>
				</>
			) : (
				<>
					<b className="text-center">
						<h4 className="mb-2 color_danger">¡La recarga no fue realizada!</h4>
						<p className="color_medium font-weight-light">
							Ocurrio un error, intente de nuevo
						</p>
					</b>

					<div className="d-flex flex-row justify-content-around mt-4 w-100  align-items-center">
						<div className="color_danger d-flex flex-column align-items-center justify-content-center">
							<PersonIcon />
							<p className="pt-2">{phone}</p>
						</div>

						<div className="color_danger d-flex flex-column align-items-center justify-content-center">
							<AttachMoneyIcon />
							<p className="pt-2"> $ {amount}</p>
						</div>

						<div className="color_danger d-flex flex-column align-items-center justify-content-center">
							<CalendarMonthIcon />
							<p className="pt-2">{new Date()?.toLocaleDateString('en-CA')}</p>
						</div>
					</div>
				</>
			)}
		</>
	);
};

export default RechargeFinish;
