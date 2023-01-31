import React from 'react';

import AdviceContainer from '../common/AdviceContainer';
import Empty from '../common/Empty';
import UserItem from './UserItem';

const UsersItemsList = ({ items = [], onItemClick }) => {
	return (
		<div className="routes-items-list pb-3">
			{!!items?.length &&
				items.map((item) => (
					<UserItem
						key={item.userId}
						data={item}
						onClick={onItemClick ? () => onItemClick(item) : null}
						className="mb-3"
					/>
				))}
			{!items?.length && (
				<AdviceContainer>
					<Empty title="Lo sentimos, no hay datos para mostrar." />
				</AdviceContainer>
			)}
		</div>
	);
};

export default UsersItemsList;
