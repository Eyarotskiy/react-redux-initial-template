import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import Chat from '@app/Chat';
import rootReducer from '@app/reducers/reducers';
import reduxThunk from 'redux-thunk';
import '@app/assets/styles/style.less';

const loggerMiddleware = store => next => action => {
	console.log('logger1' + action);

	return next(action);
};

const loggerMiddleware2 = store => next => action => {
	console.log('logger2' + action);

	return next(action);
};

const store = createStore(
	rootReducer,
	applyMiddleware(reduxThunk, loggerMiddleware, loggerMiddleware2)
);

class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<Chat/>
			</Provider>
		);
	}
}

export default App;