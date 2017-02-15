import React, { Component } from 'react';
import { APIManager } from '../../utils';
import { connect } from 'react-redux';
import actions from '../../actions';
import { Register } from '../view';


class Account extends Component {

	componentDidMount() {
		// check current user
		console.log("what is the current user?", this.props.account.user)

		if (this.props.account.user != null) {
			return;
		}

		this.props.checkCurrentUser();
	
	}

	register(registration) {
		this.props.signup(registration);
	}

	login(credentials) {
		this.props.login(credentials)
			.then(response => {
				console.log("thank you for logging in!")
			})
			.catch(err => {
				alert(err);
			})
	}

	render() {
		const { account } = this.props;

		return (
			<div>
				Account Container
				{
					(account.user) == null 
					? <Register 
						onRegister={this.register.bind(this)} 
						onLogin={this.login.bind(this)}
						/> 
					: <h2>{account.user.username}</h2>
				}
			</div>
		)
	}
}

const mapStateToProps = (state) => {

	return {
		account: state.account
	}
}

const mapDispatchToProps = (dispatch) => {
	
	return {
		signup: (params) => dispatch(actions.signup(params)),
		login: (params) => dispatch(actions.login(params)),
		checkCurrentUser: () => dispatch(actions.checkCurrentUser())
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Account);