import React from 'react';

import homeAsset from '../../assets/Saly-10.png';

const Home = () => {
	return (
		<section className="app-max-width mx-auto h-100 d-flex flex-column align-items-center">
			<h1 className="d-flex justify-content-center mt-5 color_primary">Easy Wallet</h1>
			<div className="w-100 h-100 d-flex flex-column justify-content-center align-items-center">
				<div>
					<figure className="asset px-5 d-flex justify-content-center ">
						<img src={homeAsset} alt="" />
					</figure>
					<p className="px-5 mt-5 text-center color_medium ">
						!Bienvenido al panel admnistrativo de Easy Wallet!
					</p>
				</div>
			</div>
		</section>
	);
};
export default Home;
