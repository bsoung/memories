import constants from '../constants';

let initialState = {
	user: null
}

export default (state=initialState, action) => {
	let updated = Object.assign({}, state);

	switch (action.type) {
		case constants.CURRENT_USER_RECEIVED:

			updated['user'] = action.payload;

			console.log("CURRENT_USER_RECEIVED", JSON.stringify(updated));
			return updated;

		default:
			return updated;
	}
}