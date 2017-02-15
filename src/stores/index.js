import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { postReducer, accountReducer } from '../reducers';

let store;

export default {
	configureStore: () => {
		const reducers = combineReducers({
			post: postReducer,
			account: accountReducer

		});

		store = createStore(
			reducers,
			applyMiddleware(thunk)
		)

		return store;
	},

	currentStore: () => {
		return store;
	}
}
