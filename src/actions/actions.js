export const addUser = () => {
	return dispatch => {
		dispatch({
			type: 'ADD_USER'
		});

		dispatch(addMessage('Lorem Ipsum'));
	}
};

export const addMessage = message => {
	return {
		type: 'ADD_MESSAGE',
		message
	}
};
