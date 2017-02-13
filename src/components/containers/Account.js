import React, { Component } from 'react';
import { APIManager } from '../../utils';
import { connect } from 'react-redux';
import actions from '../../actions';
import { Register } from '../view';


class Account extends Component {

	register(registration) {
		console.log('REGISTER', JSON.stringify(registration));

		this.props.signup(registration);
	}

	render() {
		return (
			<div>
				Account Container
				<Register onRegister={this.register.bind(this)} />
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
		signup: (params) => dispatch(actions.signup(params))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Account);