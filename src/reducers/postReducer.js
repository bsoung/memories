import constants from '../constants';

let initialState = {
	currentLocation: {
		lat: 40.7504753,
		lng: -73.9932668
	},
	list: null
}

export default (state=initialState, action) => {

	let updated = Object.assign({}, state);

	switch (action.type) {
		case constants.FETCH_POSTS:

			updated.list = action.payload;

			return updated;

		case constants.CURRENT_LOCATION_CHANGED:

			updated.currentLocation = action.location;

			return updated;

		default:
			return updated;
	}
}