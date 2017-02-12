import constants from '../constants';

let initialState = {
	
	list: []
}

export default (state=initialState, action) => {

	let updated = Object.assign({}, state);

	switch (action.type) {
		case constants.FETCH_POSTS:
			// console.log('FETCH_POSTS:', JSON.stringify(action.payload));

			updated['list'] = action.payload

			console.log(updated);

			return updated;

		default:
			return updated;
	}
}