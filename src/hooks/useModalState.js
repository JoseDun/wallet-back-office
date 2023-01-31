import { useState, useEffect } from 'react';

/**
 * It returns an object with two properties: isOpened and setIsOpened
 *
 * @param {Boolean} [initialState=false] - The initial state of the modal.
 *
 * @returns An object with two properties: isOpened and setIsOpened.
 */
export const useModalState = (initialState = false) => {
	const [isOpened, setIsOpened] = useState(initialState);

	useEffect(() => {
		setIsOpened(!!initialState);
	}, [initialState, setIsOpened]);

	return {
		isOpened,
		setIsOpened,
	};
};
