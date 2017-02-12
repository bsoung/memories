import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { postReducer } from '../reducers';

let store;

export default {
	configureStore: () => {
		const reducers = combineReducers({
			post: postReducer,

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
