import constants from '../constants';
import { APIManager } from '../utils';

const getRequest = (path, params, actionType) => {
	return (dispatch) => 
		// returns a promise
		APIManager
		.get(path, params)
		.then(response => {
			// console.log("GET response", JSON.stringify(response));
			const payload = response.results || response.result || response.message;

			dispatch({
				type: actionType,
				payload: payload,
				params: params
			});

			return response;
		})
		.catch(err => {
			console.log(err.message);
			throw err;
		});
}

const postRequest = (path, params, actionType) => {
	return (dispatch) => 
		APIManager
		.post(path, params)
		.then(response => {
			console.log("POST response", JSON.stringify(response));
			const payload = response.results || response.result || response.message;
			
			dispatch({
				type: actionType,
				payload: payload
			});

			return response;
		})
		.catch(err => {
			console.log("error here?")
			console.log(err.message);
			throw err;
		});
}

export default {

	signup: (params) => {
		return (dispatch) => {
			return dispatch(postRequest('/account/register', params, constants.CURRENT_USER_RECEIVED))
		}
	},

	createPost: (params) => {
		return (dispatch) => {
			return dispatch(postRequest('/api/post', params, constants.CREATE_POST))
		}
	},

	fetchPosts: (params) => {
		return (dispatch) => {
			return dispatch(getRequest('/api/post/', params, constants.FETCH_POSTS))
		}
	},

	updateCurrentLocation: (location) => {
		return {
			type: constants.CURRENT_LOCATION_CHANGED,
			location: location
		}
	}


}