import React, { Component } from 'react';
import { APIManager } from '../../utils';
import { connect } from 'react-redux';
import actions from '../../actions';
import { Map } from '../view';

class Posts extends Component {
	setNewLocation(location) {
		// console.log('setNewLocation', JSON.stringify(location));

		this.props.updateCurrentLocation(location);
	}

	render() {
		return (
			<div>
				<Map 
					center={this.props.posts.currentLocation} 
					zoom={15} 
					mapMoved={this.setNewLocation.bind(this)}
				/>
			</div>
		)
	}
}

const mapStateToProps = (state) => {

	return {
		posts: state.post
	}
}

const mapDispatchToProps = (dispatch) => {
	
	return {
		updateCurrentLocation: (location) => dispatch(actions.updateCurrentLocation(location))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts);