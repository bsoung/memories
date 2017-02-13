import React, { Component } from 'react';
import { APIManager } from '../../utils';
import { connect } from 'react-redux';
import actions from '../../actions';


class Account extends Component {
	render() {
		return (
			<div>
				Account Container
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

export default connect(mapStateToProps, mapDispatchToProps)(Account);