import React, { useEffect, useState } from 'react';

import { useQuery } from 'react-query';

import { Person } from '@mui/icons-material';

import { listsUsers } from '../../apis/users';
import Selecter from '../common/Selecter';

const UserSelecter = (props) => {
	const [items, setItems] = useState();

	const { data: response, isFetching } = useQuery('listsUsers', listsUsers, {
		refetchOnWindowFocus: false,
	});

	useEffect(() => {
		const ITEMS = (response?.data?.content || []).map((item) => ({
			...item,
			title: item.name,
			description: `C.I: ${item.document}`,
			id: item.userId,
		}));
		setItems(ITEMS);
	}, [response]);

	useEffect(() => {}, [items, isFetching, props]);

	return (
		<>
			{!isFetching && (
				<>
					<Selecter
						icon={<Person />}
						placeholder="Selecciona un usuario..."
						items={items}
						{...props}
					/>
				</>
			)}
		</>
	);
};

export default UserSelecter;
