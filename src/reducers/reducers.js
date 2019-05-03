import { combineReducers } from "redux";

const users = ['Ivan', 'Serhii'];
const messages = ['Lorem', 'Ipsum'];

const reducerOne = (state = users, action) => {
	switch (action.type) {
		case 'ADD_USER':
			return [
				...state,
				'newUser_' + Date.now()
			];
		default:
			return state;
	}
};

const reducerTwo = (state = messages, action) => {
	switch (action.type) {
		case 'ADD_MESSAGE':
			return [
				...state,
				action.message
			];
		default:
			return state;
	}
};

const rootReducer = combineReducers({
	reducerOne,
	reducerTwo,
});

export default rootReducer;
