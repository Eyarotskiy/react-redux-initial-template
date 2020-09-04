import {actionType} from '@app/actions/actionType';

export const addUser = () => {
	return (dispatch) => {
		dispatch({
			type: actionType.ADD_USER,
		});

		dispatch(addMessage('Lorem Ipsum'));
	}
};

export const addMessage = (message) => {
	return {
		type: actionType.ADD_MESSAGE,
		message,
	}
};
