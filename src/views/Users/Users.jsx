import React from 'react';

import ListFilter from '../../components/common/ListFilter';
import { USERS_LIST_FILTERS_SCHEMA } from '../../constants/schemas/list-filter';

import UsersItemsListInfinite from '../../components/user/UsersItemsListInfinite';

const Users = () => {
	return (
		<div className="w-100 h-100 d-flex">
			<section className="w-100 h-100 p-3 overflow-auto">
				<header className="p-3 my-5">
					<h2 className="font-weight-bold title color_dark mr-2 text-left mb-2">
						Lista de usuarios
					</h2>
					<p className="m-0 color_medium ">
						Utiliza el filtro de usuarios para una búsqueda específica
					</p>
				</header>
				<section>
					<UsersItemsListInfinite />
				</section>
			</section>
			<aside className="h-100 pt-5 p-3 border_side">
				<div style={{ width: '320px' }} className="mt-5 pt-5">
					<ListFilter fields={USERS_LIST_FILTERS_SCHEMA} />
				</div>
			</aside>
		</div>
	);
};

export default Users;
