import React, { Component } from 'react';

class Register extends Component {
	constructor() {
		super();

		this.state = {
			registration: {
				username: '',
				password: ''
			}
		}
	}

	updateRegistration(e) {
		let updated = Object.assign({}, this.state.registration);

		updated[e.target.id] = e.target.value;

		this.setState({
			registration: updated
		})
	}

	submitRegistration(e) {
		e.preventDefault();

		let registration = this.state.registration;

		if (registration.username.length == 0) {
			alert('Please enter a username');
			return;
		}

		if (registration.password.length == 0) {
			alert('Please enter a password');
			return;
		}

		this.props.onRegister(this.state.registration);
	}

	submitLoginCredentials(e) {
		e.preventDefault();

		let registration = this.state.registration;

		if (registration.username.length == 0) {
			alert('Please enter a username');
			return;
		}

		if (registration.password.length == 0) {
			alert('Please enter a password');
			return;
		}

		this.props.onLogin(this.state.registration);
	}

	render() {
		return (
			<div>
				<input onChange={this.updateRegistration.bind(this)} id="username" type="text" placeholder="Username" /><br />
				<input onChange={this.updateRegistration.bind(this)} id="password" type="password" placeholder="Password" /><br />
				<button className="button special small" style={{marginBottom: 20}} onClick={this.submitLoginCredentials.bind(this)}>Login</button>
				<button className="button special small" onClick={this.submitRegistration.bind(this)}>Join</button>
			</div>
		)
	}
}


export default Register;