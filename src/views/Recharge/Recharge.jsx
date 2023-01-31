import React, { useState } from 'react';

import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import { Button } from '@mui/material';

import UserSelecter from '../../components/user/UserSelecter';

import RechargeFormModal from '../../components/recharge/RechargeFormModal';

import asset from '../../assets/asset.png';

const Recharge = () => {
	const [itemSelected, setItemSelected] = useState();
	const [RechargeFormModalIsVisible, setRechargeFormModalIsVisible] = useState(false);

	const onSelectUserChange = (user) => {
		setItemSelected(user);
	};

	const onModalUserDetailClose = () => {
		setRechargeFormModalIsVisible(false);
	};

	return (
		<>
			<section className="app-max-width mx-auto h-100 d-flex flex-column align-items-center py-5">
				<h2 className="titleSections text-center m-0 my-3 color_dark">Recargar Saldo</h2>

				<UserSelecter
					onChange={onSelectUserChange}
					value={itemSelected}
					itemSelected={itemSelected}
				/>

				<div className="w-100 h-100 d-flex flex-column justify-content-center align-items-center">
					<div>
						<figure className="asset px-5 d-flex justify-content-center ">
							<img src={asset} alt="monedero" />
						</figure>
						<p className="px-5 text-center color_medium">
							Aquí podrás recargar la billetera de un usuario.
						</p>
						<div className="d-flex justify-content-center align-items-center ">
							<Button
								disabled={!itemSelected}
								color="primary"
								variant="contained"
								autoFocus
								startIcon={<AttachMoneyIcon />}
								onClick={() => setRechargeFormModalIsVisible(true)}
							>
								Recargar
							</Button>
						</div>
					</div>
				</div>
			</section>

			<RechargeFormModal
				data={itemSelected}
				opened={RechargeFormModalIsVisible}
				onClose={onModalUserDetailClose}
			/>
		</>
	);
};

export default Recharge;
