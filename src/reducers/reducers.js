import { combineReducers } from "redux";
import {actionType} from '@app/actions/actionType';

const users = ['Ivan', 'Serhii'];
const messages = ['Lorem', 'Ipsum'];

const userReducer = (state = users, action) => {
	switch (action.type) {
		case actionType.ADD_USER:
			return [
				...state,
				'newUser_' + Date.now(),
			];
		default:
			return state;
	}
};

const messageReducer = (state = messages, action) => {
	switch (action.type) {
		case actionType.ADD_MESSAGE:
			return [
				...state,
				action.message,
			];
		default:
			return state;
	}
};

const rootReducer = combineReducers({
	userReducer,
	messageReducer,
});

export default rootReducer;
