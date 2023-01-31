import React from 'react';
import { useInfiniteQuery } from 'react-query';

import { listsUsers } from '../../apis/users';

import UsersItemsList from './UsersItemsList';

const UsersItemsListInfinite = (props = {}) => {
	const { data = {} } = useInfiniteQuery(['list'], listsUsers, {
		getNextPageParam: (lastPage) => {
			return lastPage?.info?.page + 1;
		},
	});

	const users = data?.pages?.[0]?.data?.content;

	return <UsersItemsList items={users} {...props} />;
};

export default UsersItemsListInfinite;
