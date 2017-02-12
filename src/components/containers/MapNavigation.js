import React, { Component } from 'react';
import { APIManager } from '../../utils';
import { connect } from 'react-redux';
import actions from '../../actions';
import { Map } from '../view';

class Posts extends Component {

	render() {
		const center = {
			lat: 40.7504753,
			lng: -73.9932668
		}

		return (
			<div>
				<Map center={center} zoom={14} />
			</div>
		)
	}
}

const mapStateToProps = (state) => {

	return {

	}
}

const mapDispatchToProps = (dispatch) => {
	
	return {

	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts);